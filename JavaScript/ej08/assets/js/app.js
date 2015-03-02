window.onload = function(){
    var start,
        end;

    start = new Date();
    var enlaces = document.getElementsByTagName('a');
    console.log("Numero de enlaces: " + enlaces.length);
    end = new Date();
    console.log('Time: ' + (end - start));

    start = new Date();
    enlaces = document.querySelectorAll('a');
    console.log("Numero de enlaces: " + enlaces.length);
    end = new Date();
    console.log('Time: ' + (end - start));

    console.log(enlaces[enlaces.length-2].href);

    enlaces = document.querySelectorAll('a[href="http://prueba"]');
    console.log("Numero de enlaces: " + enlaces.length);

    var count = 0;
    for (var i = enlaces.length - 1; i >= 0; i--) {
        if (enlaces.item(i).href === "http://prueba/") {
            count++;
        }
    }
    console.log("Numero de enlaces: " + count);

    var parrafos = document.querySelectorAll('p');
    if (parrafos.length > 2) {
        enlaces = parrafos[2].querySelectorAll('a');

        console.log('Numero de enlaces: ' + enlaces.length);
    }

    enlaces = document.querySelectorAll('body > p:nth-child(3) a');
    console.log('Numero de enlaces: ' + enlaces.length);
};