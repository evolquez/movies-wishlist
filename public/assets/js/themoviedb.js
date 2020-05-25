$(document).ready(function(){

    let apikey = $("#apikey").val();
    let movies = [];

    loadMovies();

    // Load movies from the movie db server
    function loadMovies(){
        
        let url = 'https://api.themoviedb.org/3/movie/upcoming?api_key='+apikey+'&language=en-US&page=1';

        $('body').addClass('loading');        
        
        $.ajax({
            method: "GET",
            url: url
        }).done(function( response ) {
            
            $('body').removeClass('loading');
            
            movies = response.results;

            let elements = setMovieContent(movies);

            $('#movie_content').append(elements.childNodes);

        }).fail(function(err){
            $('body').removeClass('loading');
        });
    }

    $('body').on('click', 'button.event-handler', function(){

        let elementId = $(this)[0].id;

        $(this).attr('disabled', 'disabled');
        
        let buttonDoc = document.getElementById(elementId);
        
        buttonDoc.innerText = 'Saving...';
        
        $(this).append(getSpanLoading());

        setTimeout(() => {
            buttonDoc.classList.remove('btn-primary');
            buttonDoc.classList.add('btn-outline-secondary');

            buttonDoc.innerHTML = 'Saved';

        }, 4000);
    });

});