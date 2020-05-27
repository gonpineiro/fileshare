<?php

use Illuminate\Database\Seeder;

class ClienteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();
        
        for ($i=0; $i < 5; $i++) {
            DB::table('clientes')->insert([
            'rs' => $faker->lastName(),
            'cuil' => rand(20100000000, 21000000000),
            'domicilio' => $faker->secondaryAddress(),
            'telefono' => $faker->tollFreePhoneNumber(),
            'empresa_id' => rand(1, 3),
            'user_id' => rand(1, 5),
            'estado' => 1            
            ]);
        }
    }
}
