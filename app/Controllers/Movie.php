<?php namespace App\Controllers;

class Movie extends BaseController
{
	public function index()
	{
		echo view('/templates/header', ['list' => 'moviedb']);
        echo view('/templates/footer');
    }
    
    public function saved(){
        echo view('/templates/header', ['list' => 'saved']);
        echo view('/templates/footer');
    }
}