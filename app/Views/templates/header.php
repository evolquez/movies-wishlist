<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <link rel="stylesheet" href="/assets/css/style.css">
    
    <title>Movies Whishlist</title>
</head>
<body>
<header>
      <div class="collapse bg-dark" id="navbarHeader">
        <div class="container">
          <div class="row">
          </div>
        </div>
      </div>
      <div class="navbar navbar-dark bg-dark box-shadow">
        <div class="container d-flex justify-content-between"></div>
      </div>
    </header>
    <main role="main">
    
    <input type="hidden" id="apikey" value="bf50c4bf803e0598cc44f4cbd4fe3da9">

    <section class="jumbotron text-center">
        <div class="container">
          <h1 class="jumbotron-heading">Movies Wishlist</h1>
          <p class="lead text-muted">Your top 10 movies</p>
          <p>
            <a href="<?php echo base_url('movie')?>" class="btn <?php echo ($list == 'moviedb') ? 'btn-primary' : 'btn-secondary'?> my-2">See movies from TheMovieDb</a>
            <a href="<?php echo base_url('movie/saved')?>" class="btn <?php echo ($list == 'saved') ? 'btn-primary' : 'btn-secondary'?> my-2">See saved movies</a>
          </p>
        </div>
      </section>