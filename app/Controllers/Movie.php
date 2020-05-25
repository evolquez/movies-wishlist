<?php namespace App\Controllers;

class Movie extends BaseController
{
	public function index()
	{
        echo view('/templates/header', ['list' => 'moviedb']);
        echo view('/movies');
        echo view('/templates/footer');
    }
    
    public function save(){

        $movie = json_decode(file_get_contents('php://input'), true);
        
        $response = [
            'saved' => true
        ];
        
        echo json_encode($response);

    }
    public function savedlist(){
        echo view('/templates/header', ['list' => 'saved']);
        echo view('/movies', ['movies' => array()]);
        echo view('/templates/footer');
    }
}