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