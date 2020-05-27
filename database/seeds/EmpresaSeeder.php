<?php

use Illuminate\Database\Seeder;

class EmpresaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();

        DB::table('empresas')->insert([
            'rs' => 'SAB-5',
            'cuil' => rand(20100000000, 21000000000),
            'domicilio' => $faker->secondaryAddress(),
            'telefono' => $faker->tollFreePhoneNumber(),
            'estado' => 1
        ]);       

        DB::table('empresas')->insert([
            'rs' => 'CONSISA',
            'cuil' => rand(20100000000, 21000000000),
            'domicilio' => $faker->secondaryAddress(),
            'telefono' => $faker->tollFreePhoneNumber(),
            'estado' => 1
        ]);    

        DB::table('empresas')->insert([
            'rs' => 'BROU CLEAN',
            'cuil' => rand(20100000000, 21000000000),
            'domicilio' => $faker->secondaryAddress(),
            'telefono' => $faker->tollFreePhoneNumber(),
            'estado' => 1
        ]);    
    }
}
