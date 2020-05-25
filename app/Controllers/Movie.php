<?php namespace App\Controllers;

use App\Models\MovieModel;

class Movie extends BaseController
{
	public function index()
	{
        echo view('/templates/header', ['list' => 'moviedb']);
        echo view('/movies');
        echo view('/templates/footer');
    }
    
    public function save(){
        
        $model = new MovieModel();

        $movie = json_decode(file_get_contents('php://input'), true);
        
        $response = $model->saveMovie($movie);

        echo json_encode($response);

    }

    public function listToJson(){

        $model = new MovieModel();

        $movies = $model->getMovies();

        echo json_encode($movies);
    }

    public function savedlist(){
        $model = new MovieModel();

        $movies = $model->getMovies();
        
        echo view('/templates/header', ['list' => 'saved']);
        echo view('/movies', ['movies' => $movies]);
        echo view('/templates/footer');
    }

    public function remove(int $id){
        $model = new MovieModel();

        $model->deleteMovie($id);
        
        echo json_encode([
            'removed' => true
        ]);
        
    }
}