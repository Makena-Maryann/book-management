# Book Management System

#### By **Maryann Makena**

## Description

This a [Laravel](https://laravel.com/)-[React](https://reactjs.org/)([Inertia.js](https://inertiajs.com/)) application that aids in management of books.

## Setup/Installation Requirements

Please check the official laravel installation guide for server requirements before you start. [Official Documentation](https://laravel.com/docs/7.x#installation)

Clone the repository

    git clone https://github.com/Makena-Maryann/book-management.git

Switch to the repo folder

    cd book-management

Install PHP dependencies:

    composer install

Install NPM dependencies:

    npm install

Build assets

    npm run dev

Copy the example env file and make the required configuration changes in the .env file

    cp .env.example .env

Generate application key

    php artisan key:generate

Run the database migrations (**Set the database connection in .env before migrating**)

    php artisan migrate

Run database seeder

    php artisan db:seed

Start the local development server

    php artisan serve

You can now access the server at http://localhost:8000

**TL;DR command list**

    git clone https://github.com/Makena-Maryann/book-management.git
    cd book-management
    composer install
    npm install
    npm run dev
    cp .env.example .env
    php artisan key:generate
    php artisan migrate
    php artisan db:seed
    php artisan serve

## License

The Book Management Project is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

Copyright (c) 2021 **Maryann Makena**
