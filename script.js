$( document ).ready( function() {
    $('#orb').click( function(){
        if ($('#sky').hasClass('day')) {
            $('#sky').removeClass('day').addClass('night');
        }
        else {
            $('#sky').removeClass('night').addClass('day');
        }
    });
});