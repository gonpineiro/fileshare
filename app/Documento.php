<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Documento extends Model
{
    protected $fillable = [
        'cliente_id'
    ];

    public function cliente(){
        return $this->belongsTo('App\Cliente');
    }
}
