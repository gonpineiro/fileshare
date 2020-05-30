<?php

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert(['name' => 'Gonzalo','email' => 'gon.pineiro@gmail.com','type' => 'admin','password' => Hash::make('admin'),'api_token' => 'XRyK4IaqEeCVvmS4aQBtz5AaI2nrh06YdYrgZ8FSyoE0Kl88099sBmZUjHCX']);
        DB::table('users')->insert(['name' => 'Roberto','email' => 'roberto@gmail.com','type' => 'cliente','password' => Hash::make('admin'),'api_token' => Str::random(60)]);
        DB::table('users')->insert(['name' => 'Matias','email' => 'matias@gmail.com','type' => 'cliente','password' => Hash::make('admin'),'api_token' => Str::random(60)]);
        DB::table('users')->insert(['name' => 'Cecilia','email' => 'cecilia@gmail.com','type' => 'cliente','password' => Hash::make('admin'),'api_token' => Str::random(60)]);
        DB::table('users')->insert(['name' => 'Maria','email' => 'Maria@gmail.com','type' => 'cliente','password' => Hash::make('admin'),'api_token' => Str::random(60)]);
        
    }
}
