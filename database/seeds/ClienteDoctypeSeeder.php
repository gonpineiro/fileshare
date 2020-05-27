<?php

use Illuminate\Database\Seeder;

class ClienteDoctypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i=1; $i < 4; $i++) {
            DB::table('cliente_doctype')->insert(['cliente_id' => 1,'doctype_id' => $i]);
            DB::table('cliente_doctype')->insert(['cliente_id' => 2,'doctype_id' => $i]);
            DB::table('cliente_doctype')->insert(['cliente_id' => 3,'doctype_id' => $i]);
        }
    }
}
