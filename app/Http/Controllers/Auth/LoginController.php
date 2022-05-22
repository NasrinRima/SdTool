<?php

namespace BookStack\Http\Controllers\Auth;

use BookStack\Auth\Access\LoginService;
use BookStack\Auth\Access\SocialAuthService;
use BookStack\Exceptions\LoginAttemptEmailNeededException;
use BookStack\Exceptions\LoginAttemptException;
use BookStack\Facades\Activity;
use BookStack\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;
use Illuminate\Validation\ValidationException;
use Laravel\Socialite\Facades\Socialite;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Redirection paths.
     */
    protected $redirectTo = '/';
    protected $redirectPath = '/';
    protected $redirectAfterLogout = '/login';

    protected $socialAuthService;
    protected $loginService;

    /**
     * Create a new controller instance.
     */
    public function __construct(SocialAuthService $socialAuthService, LoginService $loginService)
    {
        $this->middleware('guest', ['only' => ['getLogin', 'login']]);
        $this->middleware('guard:standard,ldap', ['only' => ['login']]);
        $this->middleware('guard:standard,ldap,oidc', ['only' => ['logout']]);

        $this->socialAuthService = $socialAuthService;
        $this->loginService = $loginService;

        $this->redirectPath = url('/');
        $this->redirectAfterLogout = url('/login');
    }

    public function username()
    {
        return config('auth.method') === 'standard' ? 'email' : 'username';
    }

    /**
     * Get the needed authorization credentials from the request.
     */
    protected function credentials(Request $request)
    {
        return $request->only('username', 'email', 'password');
    }

    /**
     * Show the application login form.
     */
    public function getLogin(Request $request)
    {
        // Store the previous location for redirect after login
        $this->updateIntendedFromPrevious();
        session()->put('social-callback', 'login');

        return Socialite::driver('keycloak')->redirect();
    }

    /**
     * Handle a login request to the application.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @throws \Illuminate\Validation\ValidationException
     *
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Http\Response|\Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        $this->validateLogin($request);
        $username = $request->get($this->username());

        // If the class is using the ThrottlesLogins trait, we can automatically throttle
        // the login attempts for this application. We'll key this by the username and
        // the IP address of the client making these requests into this application.
        if (method_exists($this, 'hasTooManyLoginAttempts') &&
            $this->hasTooManyLoginAttempts($request)) {
            $this->fireLockoutEvent($request);

            Activity::logFailedLogin($username);

            return $this->sendLockoutResponse($request);
        }

        try {
            if ($this->attemptLogin($request)) {
                return $this->sendLoginResponse($request);
            }
        } catch (LoginAttemptException $exception) {
            Activity::logFailedLogin($username);

            return $this->sendLoginAttemptExceptionResponse($exception, $request);
        }

        // If the login attempt was unsuccessful we will increment the number of attempts
        // to login and redirect the user back to the login form. Of course, when this
        // user surpasses their maximum number of attempts they will get locked out.
        $this->incrementLoginAttempts($request);

        Activity::logFailedLogin($username);

        return $this->sendFailedLoginResponse($request);
    }

    /**
     * Attempt to log the user into the application.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return bool
     */
    protected function attemptLogin(Request $request)
    {
        return $this->loginService->attempt(
            $this->credentials($request),
            auth()->getDefaultDriver(),
            $request->filled('remember')
        );
    }

    /**
     * The user has been authenticated.
     *
     * @param \Illuminate\Http\Request $request
     * @param mixed $user
     *
     * @return mixed
     */
    protected function authenticated(Request $request, $user)
    {
        return redirect()->intended($this->redirectPath());
    }

    /**
     * Validate the user login request.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return void
     * @throws \Illuminate\Validation\ValidationException
     *
     */
    protected function validateLogin(Request $request)
    {
        $rules = ['password' => ['required', 'string']];
        $authMethod = config('auth.method');

        if ($authMethod === 'standard') {
            $rules['email'] = ['required', 'email'];
        }

        if ($authMethod === 'ldap') {
            $rules['username'] = ['required', 'string'];
            $rules['email'] = ['email'];
        }

        $request->validate($rules);
    }

    /**
     * Send a response when a login attempt exception occurs.
     */
    protected function sendLoginAttemptExceptionResponse(LoginAttemptException $exception, Request $request)
    {
        if ($exception instanceof LoginAttemptEmailNeededException) {
            $request->flash();
            session()->flash('request-email', true);
        }

        if ($message = $exception->getMessage()) {
            $this->showWarningNotification($message);
        }

        return redirect('/login');
    }

    /**
     * Get the failed login response instance.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return \Symfony\Component\HttpFoundation\Response
     * @throws \Illuminate\Validation\ValidationException
     *
     */
    protected function sendFailedLoginResponse(Request $request)
    {
        throw ValidationException::withMessages([
            $this->username() => [trans('auth.failed')],
        ])->redirectTo('/login');
    }

    /**
     * Update the intended URL location from their previous URL.
     * Ignores if not from the current app instance or if from certain
     * login or authentication routes.
     */
    protected function updateIntendedFromPrevious(): void
    {
        // Store the previous location for redirect after login
        $previous = url()->previous('');
        $isPreviousFromInstance = (strpos($previous, url('/')) === 0);
        if (!$previous || !setting('app-public') || !$isPreviousFromInstance) {
            return;
        }

        $ignorePrefixList = [
            '/login',
            '/mfa',
        ];

        foreach ($ignorePrefixList as $ignorePrefix) {
            if (strpos($previous, url($ignorePrefix)) === 0) {
                return;
            }
        }

        redirect()->setIntendedUrl($previous);
    }

    public function logout(Request $request)
    {
        $this->guard()->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        if ($response = $this->loggedOut($request)) {
            return $response;
        }

        Auth::logout(); // Logout of your app
        $redirectUri = Config::get('app.url'); // The URL the user is redirected to

        return redirect(Socialite::driver('keycloak')->getLogoutUrl($redirectUri));
    }
}
