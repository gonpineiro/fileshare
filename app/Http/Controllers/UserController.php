<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
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

    public function update($id, Request $request){

        $data = User::where('id', $id)->firstOrFail();
        $data->name = $request->get('name');
        $data->email = $request->get('email');
        if (!is_null($request->get('password'))) {            
            $data->password = Hash::make($request->get('password'));
        }
        $data->save();
        return response()->json($data, 200);
    }

    public function store(Request $request)
    {
        $data = User::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('password')),
            'api_token' => Str::random(60)
        ]);
    }

    public function destroy($id) {
        $data = User::where('id', $id)->firstOrFail();
        $data->delete();
    }
}
