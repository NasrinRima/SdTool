<?php

namespace BookStack\Http\Middleware;

use Closure;
use Firebase\JWT\JWT;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Cookie;

class MercureBroadcasterAuthorizationCookie
{
    public function handle(Request $request, Closure $next)
    {
        /** @var Response $response */
        $response = $next($request);

        if (!method_exists($response, 'withCookie')) {
            return $response;
        }

        return $response->withCookie($this->createCookie($request->user(), $request->secure()));
    }

    private function createCookie($user, bool $secure)
    {

        return Cookie::make(
            'mercureAuthorization',
            $this->getToken($user),
            15,
            '/.well-known/mercure', // or which path you have mercure running
            parse_url(config('app.url'), PHP_URL_HOST),
            $secure,
            true
        );
    }

    public function getToken($user)
    {
        $payload = [
            'mercure' => [
                'subscribe' => $this->getSubscribeArray($user),
            ],
        ];

        return JWT::encode($payload, env('JWT_KEY'), 'HS256');
    }

    protected function getSubscribeArray($user): array
    {
        return ['http://event/annotation', 'http://event/comment'];
    }
}