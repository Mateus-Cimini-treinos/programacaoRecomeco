$(document).ready(function(){
    $('header button').click(function() {
        alert('abrir fomulario')
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        console.log('opa');
    })


});