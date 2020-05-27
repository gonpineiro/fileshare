<?php

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
        $this->call(UserSeeder::class);
        $this->call(EmpresaSeeder::class);
        $this->call(ClienteSeeder::class);
        $this->call(DoctypeSeeder::class);
        $this->call(ClienteDoctypeSeeder::class);
    }
}
