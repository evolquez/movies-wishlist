$(document).ready(function(){
    let elementId = 0;
    $('body').on('click', 'button.event-handler', function(){

        elementId = $(this)[0].id;

    });

    $('#modal_btn_yes').click(function(){
        console.log('hi', elementId);
        
        //$(this).attr('disabled', 'disabled');
        
        button = document.getElementById($(this)[0].id);

        button.setAttribute('disabled', 'disabled');
        button.innerText = 'Removing...';
        button.appendChild(getSpanLoading());
        
        let url = $('#base_url').val();

        $.ajax({
            method: "GET",
            url: url + '/remove/'+elementId
        }).done(function( response ) {
            
            location.reload();

        }).fail(function(err){
            location.reload();
        });

    });
});