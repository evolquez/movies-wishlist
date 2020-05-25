
function setMovieContent(movies, savedMovies){
    let div = document.createElement('div');
    
    for(var i = 0; i < movies.length; i++){
        
        let isSaved = false;
        
        let movie = movies[i];

        for(var x = 0; x < savedMovies.length; x++){
            
            if(movie.id === parseInt(savedMovies[x]['id'])){
                isSaved = true;
                break;
            }
                    
        }

        if(movie.backdrop_path == null || movie.backdrop_path == undefined)
            continue;

        div.appendChild(createMovieElement(movie, i, isSaved));
    }

    return div;
}

function createMovieElement(movie, index, isSaved){
    let divCol = document.createElement('div');

    divCol.classList.add('col-md-4');

    let divCard = document.createElement('div');
    divCard.classList.add('card', 'mb-4', 'box-shadow');
    
    let image = document.createElement('img');
    image.classList.add('card-img-top');

    image.src = 'https://image.tmdb.org/t/p/w500/'+movie.backdrop_path;

    divCard.appendChild(image);

    // Body
    let cardBody = document.createElement('card-body');
    
    cardBody.classList.add('card-body');
    
    let title = document.createElement('p');
    title.classList.add('card-text', 'title');
    title.innerText = movie.original_title;

    cardBody.appendChild(title);

    let summary = document.createElement('p');
    summary.classList.add('card-text');
    summary.innerText = movie.overview;
    
    cardBody.appendChild(summary);

    let divBottom = document.createElement('div');
    divBottom.classList.add('d-flex', 'justify-content-between', 'align-items-center');

    let divButtons = document.createElement('div');
    divButtons.classList.add('btn-group');

    let buttonView = document.createElement('button');
    if(isSaved){
        buttonView.classList.add('btn', 'btn-sm', 'btn-outline-secondary');
        buttonView.innerText = 'Saved';
        buttonView.setAttribute('disabled', 'disabled');
    }else{
        buttonView.classList.add('btn', 'btn-sm', 'btn-primary', 'event-handler');
        buttonView.id = index;

        buttonView.innerText = 'Save';
    }
    
    
    divButtons.appendChild(buttonView);

    divBottom.appendChild(divButtons);

    let time = document.createElement('small');
    time.classList.add('text-muted');
    time.innerText = movie.release_date;

    divBottom.appendChild(time);

    cardBody.appendChild(divBottom);

    divCard.appendChild(cardBody);

    divCol.appendChild(divCard);

    return divCol;
}

function getSpanLoading(){

    let span = document.createElement('span');
    span.classList.add('spinner-border', 'spinner-border-sm');
    span.setAttribute('aria-hidden', true);
    
    return span;
}