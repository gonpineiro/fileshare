<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\UsersRequest;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use App\User;

class UserController extends Controller
{
    public function index()
    {
        $data = User::all();
        return response()->json($data, 200);
    }

    public function edit($id){
        $data = User::where('id', $id)->firstOrFail();
        return response()->json($data, 200);
    }

    public function update($id, UsersRequest $request){

        $data = User::where('id', $id)->firstOrFail();
        $data->name = $request->get('name');
        $data->email = $request->get('email');
        $data->type = $request->get('type');
        if (!is_null($request->get('password'))) {            
            $data->password = Hash::make($request->get('password'));
        }
        $data->save();
        return response()->json($data, 200);
    }

    public function store(UsersRequest $request)
    {
        $data = User::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'type' => $request->input('type'),
            'password' => Hash::make($request->input('password')),
            'api_token' => Str::random(60)
        ]);
    }

    public function destroy($id) {
        $data = User::where('id', $id)->firstOrFail();
        $data->delete();
    }    

    //REQUERIDO PARA VALIDAR TIPO DE CUENTAS EN LA APP
    public function loginApp($id){
        $data = User::where('api_token', $id)->firstOrFail();
        return response()->json($data, 200);
    }
}
