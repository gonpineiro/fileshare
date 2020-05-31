<?php

namespace App\Http\Controllers;

use App\Documento;
use App\Cliente;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Response as Download;
use Carbon\Carbon;

class DocumentoController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();

        if ($user->type === 'admin') {
            $data = Documento::with('cliente')->with('doctype')->get();

            return response()->json($data, 200);
        }

        if ($user->type === 'cliente') {            
            $cliente = Cliente::where('user_id', $user->id)->firstOrFail();
            $data = Documento::where('cliente_id', $cliente->id)->with('cliente')
                ->with('doctype')
                ->get();

            return response()->json($data, 200);
        }
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
        $clientPath = $request->input('cliente_id');
        $yearNow = new Carbon();
        
        $s3Request = $request->file('file')->store(
            $yearNow->format('Y') . '/' . $clientPath,
            's3'
        );
        
        $data = Documento::create([
            'name' => $request->file('file')->getClientOriginalName(),
            'cliente_id' => $request->input('cliente_id'),
            'doctype_id' => $request->input('doctype_id'),
            'file' => $s3Request
            ]);
    }

    public function download($id, Request $request)
    {
        $documento = Documento::where('id', $id)->firstOrFail();

        $headers = [
            'Content-Type'        => 'Content-Type: application/zip',
            'Content-Disposition' => 'attachment; filename="'. $documento->name .'"',
        ];

        return  Storage::disk('s3')->download($documento->file, $documento->name, $headers);
    }
    
    public function destroy($id)
    {
        $data = Documento::where('id', $id)->firstOrFail();
        $data->delete();
    }
}
