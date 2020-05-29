<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDocumentosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('documentos', function (Blueprint $table) {
            $table->id();
            $table->string('name', 100);    
            $table->bigInteger('cliente_id')->unsigned();
            $table->bigInteger('doctype_id')->unsigned();
            $table->string('file')->nullable();      
            $table->timestamps();

            //RELACIONES
            $table->foreign('cliente_id')->references('id')->on('clientes');
            $table->foreign('doctype_id')->references('id')->on('doctypes');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('documentos');
    }
}
