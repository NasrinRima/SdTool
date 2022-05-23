# Easy Wiki

A platform for storing and organising information and documentation.

## 📚 Project Definition

Easy Wiki is an opinionated wiki system that provides a pleasant and simple out-of-the-box experience. New users to an instance should find the experience intuitive and only basic word-processing skills should be required to get involved in creating content on BookStack. The platform should provide advanced power features to those that desire it but they should not interfere with the core simple user experience.

## 🛠️ Development & Testing

This project uses SASS for CSS development and this is built, along with the JavaScript, using a range of npm scripts. The below npm commands can be used to install the dependencies & run the build tasks:

``` bash
# Install NPM Dependencies
npm install

# Build assets for development
npm run build

# Build and minify assets for production
npm run production

# Build for dev (With sourcemaps) and watch for changes
npm run dev
```

Easy Wiki has many integration tests that use Laravel's built-in testing capabilities which makes use of PHPUnit. There is a `mysql_testing` database defined within the app config which is what is used by PHPUnit. This database is set with the database name, user name and password all defined as `easywiki-test`. You will have to create that database and that set of credentials before testing.

The testing database will also need migrating and seeding beforehand. This can be done with the following commands:

``` bash
php artisan migrate --database=mysql_testing
php artisan db:seed --class=DummyContentSeeder --database=mysql_testing
```

Once done you can run `php vendor/bin/phpunit` in the application root directory to run all tests.

### 📜 Code Standards

PHP code style is enforced automatically [using StyleCI](https://github.styleci.io/repos/41589337). 

### 🐋 Development using Docker

This repository ships with a Docker Compose configuration intended for development purposes. It'll build a PHP image with all needed extensions installed and start up a MySQL server and a Node image watching the UI assets.

To get started, make sure you meet the following requirements:

- Docker and Docker Compose are installed
- Your user is part of the `docker` group

If all the conditions are met, you can proceed with the following steps:

1. **Copy `.env.example` to `.env`**, change `APP_KEY` to a random 32 char string and set `APP_ENV` to `local`.
2. Make sure **port 8080 is unused** *or else* change `DEV_PORT` to a free port on your host.
3. **Run `chgrp -R docker storage`**. The development container will chown the `storage` directory to the `www-data` user inside the container so BookStack can write to it. You need to change the group to your host's `docker` group here to not lose access to the `storage` directory.
4. **Run `docker-compose up`** and wait until the image is built and all database migrations have been done.
5. You can now login with `admin@admin.com` and `password` as password on `localhost:8080` (or another port if specified).

If needed, You'll be able to run any artisan commands via docker-compose like so:

```bash
docker-compose run app php artisan list
```

#### Running tests

After starting the general development Docker, migrate & seed the testing database:

 ```bash
# This only needs to be done once
docker-compose run app php artisan migrate --database=mysql_testing
docker-compose run app php artisan db:seed --class=DummyContentSeeder --database=mysql_testing
```

Once the database has been migrated & seeded, you can run the tests like so:

 ```bash
docker-compose run app php vendor/bin/phpunit
```

#### Debugging

The docker-compose setup ships with Xdebug, which you can listen to on port 9090.
NB : For some editors like Visual Studio Code, you might need to map your workspace folder to the /app folder within the docker container for this to work.
