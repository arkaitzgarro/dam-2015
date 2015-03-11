$(function(){
    var $ticker = $('#ticker'),
        $detener = $('#detener');

    var peticionAJAX = function(){
        $.get('../servidor/generaContenidos.php', null, function(data){
            $ticker.text(data);
        });
    };
    
    var interval = setInterval(peticionAJAX, 1000);

    $detener.on('click', function(e){
        clearInterval(interval);
    });
});