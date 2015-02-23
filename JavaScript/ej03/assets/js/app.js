(function(){
    'use strict';

    var parImpar = function(num) {
        var texts = [
            'Es par',
            'Es impar'
        ];

        if (typeof num === 'number' || typeof num === 'string') {
            num = parseInt(num);

            return texts[num % 2];
        }

        return NaN;
    };

    console.log(parImpar(0) === 'Es par');
    console.log(parImpar(1) === 'Es impar');
    console.log(parImpar(2) === 'Es par');
    console.log(parImpar(3) === 'Es impar');
    console.log(parImpar(4) === 'Es par');
    console.log(isNaN(parImpar({})));
    console.log(isNaN(parImpar(function(){})));
    console.log(isNaN(parImpar(null)));    
})();