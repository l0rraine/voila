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
                       'display_name' => '管理员',
                       'password'     => bcrypt('admin'),
                       'api_token'    => str_random(64)
                   ]);
    }
}