<?php

namespace Database\Seeders;

use Database\Seeders\AuthorsTableSeeder;
use Database\Seeders\BooksTableSeeder;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        $this->call(AuthorsTableSeeder::class);
        $this->call(BooksTableSeeder::class);
    }
}
