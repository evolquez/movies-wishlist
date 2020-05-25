<?php namespace App\Controllers;

class Movie extends BaseController
{
	public function index()
	{
        echo view('/templates/header', ['list' => 'moviedb']);
        echo view('/movies');
        echo view('/templates/footer');
    }
    
    public function savedlist(){
        echo view('/templates/header', ['list' => 'saved']);
        echo view('/movies', ['movies' => array()]);
        echo view('/templates/footer');
    }
}