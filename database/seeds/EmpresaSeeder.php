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
        DB::table('empresas')->insert([
            'rs' => 'SAB-5',
            'cuil' => '11111111111',
            'domicilio' => 'Moldes 4451',
            'telefono' => '47854524',
            'estado' => 1
        ]);       

        DB::table('empresas')->insert([
            'rs' => 'CONSISA',
            'cuil' => '11111111122',
            'domicilio' => 'Moldes 4451',
            'telefono' => '47854524',
            'estado' => 1
        ]);    

        DB::table('empresas')->insert([
            'rs' => 'BROU CLEAN',
            'cuil' => '11111111133',
            'domicilio' => 'Moldes 4451',
            'telefono' => '47854524',
            'estado' => 1
        ]);    
    }
}
