<?php

namespace App\Http\Controllers;

use App\Doctype;
use Illuminate\Http\Request;
use App\Http\Requests\DoctypesRequest;

class DoctypeController extends Controller
{
    public function index()
    {
        $data = Doctype::all();
        return response()->json($data, 200);
    }

    public function edit($id)
    {
        $data = Doctype::where('id', $id)
        ->with('clientes')->firstOrFail();
        return response()->json($data, 200);
    }

    public function update($id, DoctypesRequest $request)
    {
        $data = Doctype::where('id', $id)->firstOrFail();
        $data->name = $request->get('name');
        $data->tipo = $request->get('tipo');
        $data->obligatorio = $request->get('obligatorio');
        $data->estado = $request->get('estado');
        $data->save();
        return response()->json($data, 200);
    }

    public function store(DoctypesRequest $request)
    {
        $data = Doctype::create([
            'name' => $request->input('name'),
            'tipo' => $request->input('tipo'),
            'obligatorio' => $request->input('obligatorio'),
            'telefono' => $request->input('telefono'),
            'estado' => 1
        ]);
    }

    public function destroy($id)
    {
        $data = Doctype::where('id', $id)->firstOrFail();
        $data->delete();
    }
}
