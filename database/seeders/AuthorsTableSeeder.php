<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AuthorsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        DB::table('authors')->delete();
        
        DB::table('authors')->insert(array (
            0 => 
            array (
                'id' => 1,
                'full_name' => 'John Doe',
                'city' => 'Nairobi',
                'country' => 'Kenya',
                'website' => 'https://loremipsum.io/',
                'created_at' => '2022-02-10 11:14:44',
                'updated_at' => '2022-02-16 06:27:09',
                'deleted_at' => NULL,
            ),
            1 => 
            array (
                'id' => 2,
                'full_name' => 'Nalini Singh',
                'city' => 'Chicago',
                'country' => 'United States',
                'website' => 'https://loremipsum.io/',
                'created_at' => '2022-02-16 06:05:55',
                'updated_at' => '2022-02-16 06:28:44',
                'deleted_at' => NULL,
            ),
        ));
        
        
    }
}