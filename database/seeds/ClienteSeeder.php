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
        DB::table('clientes')->insert([
            'rs' => 'COTO',
            'cuil' => '11111111111',
            'domicilio' => 'Moldes 4451',
            'telefono' => '47854524',
            'empresa_id' => 1,
            'user_id' => 1,
            'estado' => 1
        ]);     
    }
}
