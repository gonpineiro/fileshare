<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'rs', 'cuil', 'domicilio', 'telefono', 'estado', 'user_id', 'empresa_id'
    ];

    public function empresa(){
        return $this->belongsTo('App\Empresa');
    }

    public function user(){
        return $this->belongsTo('App\User');
    }

    public function doctypes(){
        return $this->belongsToMany('App\Doctype');
    }
    
}
