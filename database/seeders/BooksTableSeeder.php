<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BooksTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        DB::table('books')->delete();
        
        DB::table('books')->insert(array (
            0 => 
            array (
                'id' => 1,
                'author_id' => 2,
                'name' => 'Good Book',
                'isbn' => '99921-58-10-7',
                'created_at' => '2022-02-16 06:09:07',
                'updated_at' => '2022-02-16 06:36:17',
                'deleted_at' => NULL,
            ),
            1 => 
            array (
                'id' => 2,
                'author_id' => 1,
                'name' => 'Awesome Book',
                'isbn' => '9971-5-0210-0',
                'created_at' => '2022-02-16 06:36:01',
                'updated_at' => '2022-02-16 06:36:34',
                'deleted_at' => NULL,
            ),
            2 => 
            array (
                'id' => 3,
                'author_id' => 1,
                'name' => 'Fantastic Book',
                'isbn' => '960-425-059-0',
                'created_at' => '2022-02-16 06:36:50',
                'updated_at' => '2022-02-16 06:36:50',
                'deleted_at' => NULL,
            ),
        ));
        
        
    }
}