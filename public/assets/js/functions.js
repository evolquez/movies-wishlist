
function setMovieContent(movies){
    let div = document.createElement('div');

    for(var i = 0; i < movies.length; i++){
        let movie = movies[i];

        if(movie.backdrop_path == null || movie.backdrop_path == undefined)
            continue;

        div.appendChild(createMovieElement(movie));
    }

    return div;
}

function createMovieElement(movie){
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
    let summary = document.createElement('p');
    summary.classList.add('card-text');
    summary.innerHTML = movie.overview;
    
    cardBody.appendChild(summary);

    let divBottom = document.createElement('div');
    divBottom.classList.add('d-flex', 'justify-content-between', 'align-items-center');

    let divButtons = document.createElement('div');
    divButtons.classList.add('btn-group');

    let buttonView = document.createElement('button');
    buttonView.classList.add('btn', 'btn-sm', 'btn-outline-secondary');
    buttonView.innerHTML = 'View';
    
    divButtons.appendChild(buttonView);

    let buttonEdit = document.createElement('button');
    buttonEdit.classList.add('btn', 'btn-sm', 'btn-outline-secondary');
    buttonEdit.innerHTML = 'Edit';

    divButtons.appendChild(buttonEdit);

    divBottom.appendChild(divButtons);

    let time = document.createElement('small');
    time.classList.add('text-muted');
    time.innerText = '9 mins';

    divBottom.appendChild(time);

    cardBody.appendChild(divBottom);

    divCard.appendChild(cardBody);

    divCol.appendChild(divCard);

    return divCol;
}