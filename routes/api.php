<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::get('/user', 'UserController@index');
Route::middleware('auth:api')->get('/user', 'UserController@index');
Route::middleware('auth:api')->get('/user/{id}', 'UserController@edit');
Route::middleware('auth:api')->put('/user/{id}', 'UserController@update');
Route::middleware('auth:api')->post('/user', 'UserController@store');
Route::middleware('auth:api')->delete('/user/{id}', 'UserController@destroy');

Route::middleware('auth:api')->get('/empresa', 'EmpresaController@index');
Route::middleware('auth:api')->get('/empresa/{id}', 'EmpresaController@edit');
Route::middleware('auth:api')->put('/empresa/{id}', 'EmpresaController@update');
Route::middleware('auth:api')->post('/empresa', 'EmpresaController@store');
Route::middleware('auth:api')->delete('/empresa/{id}', 'EmpresaController@destroy');

Route::middleware('auth:api')->get('/cliente', 'ClienteController@index');
Route::middleware('auth:api')->get('/cliente/{id}', 'ClienteController@edit');
Route::middleware('auth:api')->put('/cliente/{id}', 'ClienteController@update');
Route::middleware('auth:api')->post('/cliente', 'ClienteController@store');
Route::middleware('auth:api')->delete('/cliente/{id}', 'ClienteController@destroy');

Route::middleware('auth:api')->get('/doctype', 'DoctypeController@index');
Route::middleware('auth:api')->get('/doctype/{id}', 'DoctypeController@edit');
Route::middleware('auth:api')->put('/doctype/{id}', 'DoctypeController@update');
Route::middleware('auth:api')->post('/doctype', 'DoctypeController@store');
Route::middleware('auth:api')->delete('/doctype/{id}', 'DoctypeController@destroy');

/* Route::get('/empresa', 'EmpresaController@index');
Route::get('/empresa/{id}', 'EmpresaController@edit');
Route::put('/empresa/{id}', 'EmpresaController@update');
Route::post('/empresa', 'EmpresaController@store');
Route::delete('/empresa/{id}', 'EmpresaController@destroy'); */

