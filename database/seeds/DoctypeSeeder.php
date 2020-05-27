<?php

use Illuminate\Database\Seeder;

class DoctypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('doctypes')->insert(['name' => 'F931','tipo' => 1,'obligatorio' => false,'estado' => true]);
        DB::table('doctypes')->insert(['name' => 'Recibo de Sueldo','tipo' => 1,'obligatorio' => true,'estado' => true]);
        DB::table('doctypes')->insert(['name' => 'Alta Temprana','tipo' => 1,'obligatorio' => true,'estado' => true]);
    }
}
