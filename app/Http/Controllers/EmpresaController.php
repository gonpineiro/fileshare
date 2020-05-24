<?php

namespace App\Http\Controllers;

use App\Empresa;
use Illuminate\Http\Request;
use App\Http\Requests\EmpresasRequest;

class EmpresaController extends Controller
{
    public function index()
    {
        $data = Empresa::all();
        return response()->json($data, 200);
    }

    public function edit($id){
        $data = Empresa::where('id', $id)->firstOrFail();
        return response()->json($data, 200);
    }

    public function update($id, EmpresasRequest $request){

        $data = Empresa::where('id', $id)->firstOrFail();
        $data->rs = $request->get('rs');
        $data->cuil = $request->get('cuil');
        $data->domicilio = $request->get('domicilio');
        $data->telefono = $request->get('telefono');
        $data->save();
        return response()->json($data, 200);
    }

    public function store(EmpresasRequest $request)
    {
        $data = Empresa::create([
            'rs' => $request->input('rs'),
            'cuil' => $request->input('cuil'),
            'domicilio' => $request->input('domicilio'),
            'telefono' => $request->input('telefono'),
            'estado' => 1
        ]);
    }

    public function destroy($id) {
        $data = Empresa::where('id', $id)->firstOrFail();
        $data->delete();
    }
}