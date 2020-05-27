<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Doctype extends Model
{
    public function clientes(){
        return $this->belongsToMany('App\Cliente');
    }
}
