<?php

namespace App\Http\Controllers;


use Illuminate\Routing\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Routing\Route;

class AppController extends Controller
{
    private function render()
    {
        // $renderer_source = File::get(base_path().'/../front/src/index.html');
        return 'teste';
    }

    public function get(Request $request)
    {
        // $ssr = $this->render();
        // return view('', ['ssr' => $ssr]);
        // echo file_get_contents(base_path().'/../front/src/index.html');
    }

}

