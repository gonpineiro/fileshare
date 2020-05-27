<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ClienteDoctype extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cliente_doctype', function (Blueprint $table) {            
            $table->bigInteger('cliente_id')->unsigned();
            $table->bigInteger('doctype_id')->unsigned();

            //RELACIONES
            $table->foreign('cliente_id')->references('id')->on('clientes')
                ->onDelete('cascade')
                ->onUpdate('cascade');
                
            $table->foreign('doctype_id')->references('id')->on('doctypes')
                ->onDelete('cascade')
                ->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cliente_doctype');
    }
}
