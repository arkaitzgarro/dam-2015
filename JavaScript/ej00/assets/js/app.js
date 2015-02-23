window.onload = function() {
    'use strict';

    var alumnos = [
        'Unai Amuchastegi',
        'Miren',
        'Aitor',
        'Aritz',
        'Javier',
        'Carolina',
        'Jaione',
        'Gaizka',
        'José Luis',
        'Usua',
        'Amaia',
        'Marcos',
        'Markel',
        'Igor',
        'Unai Idiaquez'
    ];

    var btn = document.getElementById('btn'),
        agraciado = document.getElementById('agraciado');

    btn.addEventListener('click', function(e) {
        var idx = Math.floor(Math.random() * (16 - 1)) + 1;

        agraciado.innerText = alumnos[idx];
    });
};