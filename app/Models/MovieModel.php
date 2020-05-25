<?php namespace App\Models;
use CodeIgniter\Model;

class MovieModel extends Model
{
    protected $table            = 'movies';
    protected $primaryKey       = 'id';
    protected $allowedFields    = ['id', 'title', 'overview', 'release_date', 'backdrop_path'];

    public function saveMovie($movie){
        
        $this->insert([
                'id' => $movie['id'],
                'title' => $movie['title'],
                'overview' => $movie['overview'],
                'release_date' => $movie['release_date'],
                'backdrop_path' => $movie['backdrop_path']
        ]);

        return ['saved' => true];
    }

    public function getMovies(){
        return $this->findAll();
    }

    public function deleteMovie($id){
        $this->delete($id);
    }
}