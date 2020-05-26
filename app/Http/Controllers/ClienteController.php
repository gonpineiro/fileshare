<?php

namespace App\Http\Controllers;

use App\Cliente;
use Illuminate\Http\Request;
use App\Http\Requests\ClientesRequest;

class ClienteController extends Controller
{
    public function index()
    {
        $data = Cliente::with('user')
        ->with('empresa')
        ->get();
        return response()->json($data, 200);
    }

    public function edit($id){
        $data = Cliente::where('id', $id)->firstOrFail();
        return response()->json($data, 200);
    }

    public function update($id, ClientesRequest $request){

        $data = Cliente::where('id', $id)->firstOrFail();
        $data->rs = $request->get('rs');
        $data->cuil = $request->get('cuil');
        $data->domicilio = $request->get('domicilio');
        $data->telefono = $request->get('telefono');
        $data->user_id = $request->get('user_id');
        $data->empresa_id = $request->get('empresa_id');
        $data->save();
        return response()->json($data, 200);
    }

    public function store(ClientesRequest $request)
    {
        $data = Cliente::create([
            'rs' => $request->input('rs'),
            'cuil' => $request->input('cuil'),
            'domicilio' => $request->input('domicilio'),
            'telefono' => $request->input('telefono'),
            'user_id' => $request->input('user_id'),
            'empresa_id' => $request->input('empresa_id'),
            'estado' => 1
        ]);
    }

    public function destroy($id) {
        $data = Cliente::where('id', $id)->firstOrFail();
        $data->delete();
    }
}
