<?php

use Illuminate\Contracts\View\View;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Js;
use Nette\Utils\Json;

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

Route::get('/', function () {
    return view('welcome');
});


Route::get('/test',function(){
    // return response()->json([
    //     '1'=>'ayo',
    //     '2'=>'ya'
    // ]);
    return "ff";
});

Route::post('/test',function(){
    return response()->json([
        "name" => Request()->post('name'),
        "age" => Request()->post('age')
    ]);
});
