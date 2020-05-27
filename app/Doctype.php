<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Doctype extends Model
{
    protected $casts = [
        'obligatorio' => 'boolean',
        'estado' => 'boolean'
    ];

    protected $fillable = [
        'name', 'tipo', 'obligatorio', 'estado'
    ];

    public function clientes(){
        return $this->belongsToMany('App\Cliente');
    }
}
