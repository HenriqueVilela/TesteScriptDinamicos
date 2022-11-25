<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Response;

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

Route::get('/welcome', function () {
    return view('welcome');
});


Route::get('{angular?}', function($angular = '') {
    if (strpos($angular, '.') === false) {
        $metaTags = '<meta name="description" content="teste"><meta name="robots" content=""><meta name="author" content="teste">';
        $indexHtml = File::get(base_path().'/../front/dist/front/index.html');
        $indexHtml = str_replace("<!--meta tags-->", $metaTags , $indexHtml);
        
        return $indexHtml;
    } else {
        header('Content-Type: application/javascript; charset=UTF-8', true);
        $contents = File::get(base_path().'/../front/dist/front/'.$angular);
        $response = Response::make($contents, 200);
        $response->header ('Content-type', 'application/javascript');
        return $response;
    }
})->where('angular', '.*');