window.onload = function() {

    var enlace = document.querySelectorAll('.enlace'),
        span = document.querySelectorAll('.adicional.oculto');

    var muestra = function(e) {
        e.preventDefault();

        if (span.length) {
            span[0].classList.remove('oculto');
        }

        if (enlace.length) {
            enlace[0].classList.add('oculto');
        }
    };

    if (enlace.length) {
        enlace[0].addEventListener('click', muestra, false);
    }
};