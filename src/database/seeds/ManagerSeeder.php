<?php
/**
 * Created by PhpStorm.
 * User: idn-lee
 * Date: 19-1-22
 * Time: 上午11:21
 */

use Illuminate\Database\Seeder;

class ManagerSeeder extends Seeder
{
    public function run()
    {
        DB::table('managers')
          ->insert([
                       'name'         => 'admin',
                       'email'        => 'admin@example.com',
                       'display_name' => '管理员',
                       'password'     => bcrypt('admin'),
                       'created_at'   => \Illuminate\Support\Carbon::now(),
                       'updated_at'   => \Illuminate\Support\Carbon::now()
                   ]);
    }
}