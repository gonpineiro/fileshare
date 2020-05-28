<?php

namespace App\Http\Controllers;

use App\Documento;
use Illuminate\Http\Request;

class DocumentoController extends Controller
{
    public function index()
    {
        $data = Documento::all();
        return response()->json($data, 200);
    }
    
    public function edit($id)
    {
        $data = Documento::where('id', $id)->firstOrFail();
        return response()->json($data, 200);
    }
    
    public function update($id, Request $request)
    {
        $data = Documento::where('id', $id)->firstOrFail();
        $data->cliente_id = $request->get('cliente_id');
        $data->save();
        return response()->json($data, 200);
    }
    
    public function store(Request $request)
    {
        $data = Documento::create([
                'cliente_id' => $request->input('cliente_id'),
            ]);
    }
    
    public function destroy($id)
    {
        $data = Documento::where('id', $id)->firstOrFail();
        $data->delete();
    }
}
