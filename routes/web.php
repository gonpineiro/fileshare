<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Auth::routes();

Route::group(['middleware' => 'auth'], function () {
    
    Route::get('/home', function () {return view('home');});

    Route::get('/users', function () {return view('home');});

    Route::get('/empresas', function () {return view('home');});

    Route::get('/clientes', function () {return view('home');});

    Route::get('/doctypes', function () {return view('home');});

    Route::get('/documentos', function () {return view('home');});

    Route::get('/documento/download/{id}', 'DocumentoController@download');

    Route::get('/', function () {return view('home');});
});