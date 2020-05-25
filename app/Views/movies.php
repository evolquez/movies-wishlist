<div class="d-flex justify-content-center">
    <div id="loading_spinner" class="spinner-border spinner" role="status">
        <span class="sr-only hidden">Loading...</span>
    </div>
</div>

<div class="album py-5 bg-light">
    <div class="container">
    
        <div id="movie_content" class="row">
            <?php if($list == 'saved'):?>
                <?php if(count($movies) > 0):?>
                    <?php foreach($movies as $movie):?>
                        <div class="col-md-4">
                            <div class="card mb-4 box-shadow">
                                <img class="card-img-top" src="<?php echo 'https://image.tmdb.org/t/p/w500/'.$movie['backdrop_path']?>" >
                                <div class="card-body">
                                <p class="card-text title"><?php echo $movie['title']?></p>
                                <p class="card-text"><?php echo $movie['overview']?></p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                    <button id="<?php echo $movie['id']?>" type="button" data-toggle="modal" data-target="#deleteConfirmationModal" class="btn btn-sm btn-danger event-handler">Remove</button>
                                    </div>
                                    <small class="text-muted"><?php echo $movie['release_date']?></small>
                                </div>
                                </div>
                            </div>
                            </div>
                    <?php endforeach;?>
                <?php else:?>       
                    <div class="col-md-4"></div>
                    <div class="col-md-4">
                        <div class="alert alert-primary justify-content-center" role="alert">
                            No movies saved!
                        </div>
                    </div>
                    <div class="col-md-4"></div>
                <?php endif;?>    
            <?php endif;?>
        </div>
    </div>
</div>

<div class="modal fade" id="deleteConfirmationModal" tabindex="-1" role="dialog" aria-labelledby="deleteConfirmationModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="deleteConfirmationModalLabel">Movies Wishlist</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Want to remove the selected movie from your list?</p>
      </div>
      <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
        <button id="modal_btn_yes" type="button" class="btn btn-primary">Yes</button>
      </div>
    </div>
  </div>
</div>