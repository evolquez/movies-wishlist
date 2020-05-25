$(document).ready(function(){

    let apikey = $("#apikey").val();
    let movies = [];
    let savedMovies = [];

    loadSavedMovies();

    function loadSavedMovies(){

        $('body').addClass('loading');

        let url = $('#base_url').val();
        $.ajax({
            method: "GET",
            url: url + '/listToJson'
        }).done(function( response ) {
            
            //$('body').removeClass('loading');
            
            savedMovies = JSON.parse(response);
            loadMovies();

        }).fail(function(err){
            loadMovies();
        });
    }
    // Load movies from the movie db server
    function loadMovies(){
        
        let url = 'https://api.themoviedb.org/3/movie/upcoming?api_key='+apikey+'&language=en-US&page=1';

        //$('body').addClass('loading');        
        
        $.ajax({
            method: "GET",
            url: url
        }).done(function( response ) {
            
            $('body').removeClass('loading');
            
            movies = response.results;

            let elements = setMovieContent(movies, savedMovies);

            $('#movie_content').append(elements.childNodes);

        }).fail(function(err){
            $('body').removeClass('loading');
        });
    }

    $('body').on('click', 'button.event-handler', function(){

        let elementId = $(this)[0].id;

        save(elementId);
    });

    function save(elementId){
        
        toggleButtonLoading(1, elementId);

        let movie = movies[elementId];
        let url = $('#base_url').val();

        $.ajax({
            method: "POST",
            url: url+'/save',
            data: JSON.stringify(movie)
        }).done(function( response ) {
            response = JSON.parse(response);
            if(response.saved){
                toggleButtonLoading(2, elementId);
            }else{
                toggleButtonLoading(0, elementId);
                alert('Movie no saved!');
            }

        }).fail(function(err){
            toggleButtonLoading(0, elementId);
            alert('Movie no saved!');
        });
    }

    function toggleButtonLoading(state, elementId){
        
        let buttonDoc = document.getElementById(elementId);

        switch(state){
            case 0:
                
                buttonDoc.removeAttribute('disabled');
                buttonDoc.innerHTML = 'Save';

                break;
            case 1:
                
                buttonDoc.setAttribute('disabled', 'disabled');
                buttonDoc.innerText = 'Saving...';
                buttonDoc.appendChild(getSpanLoading());

                break;
            case 2:
                
                buttonDoc.classList.remove('btn-primary');
                buttonDoc.classList.add('btn-outline-secondary');
                buttonDoc.innerHTML = 'Saved';

                break;
        }
    }
});