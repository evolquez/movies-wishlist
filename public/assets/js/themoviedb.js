$(document).ready(function(){

    let apikey = $("#apikey").val();
    
    loadMovies();

    // Load movies from the movie db server
    function loadMovies(){
        
        let url = 'https://api.themoviedb.org/3/movie/upcoming?api_key='+apikey+'&language=en-US&page=1';

        $('body').addClass('loading');        
        
        $.ajax({
            method: "GET",
            url: url
        }).done(function( response ) {
            console.log('response', response);
            $('body').removeClass('loading');
        }).fail(function(err){
            $('body').removeClass('loading');
        });
    }

});