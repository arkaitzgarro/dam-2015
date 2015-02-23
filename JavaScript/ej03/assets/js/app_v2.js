(function(){
    var esPar = function(num) {
        if (typeof num === 'number') {
            return (num % 2) === 0;
        } else {
            return NaN;
        }
    };

    console.log(parImpar(1) === 'impar');
    console.log(parImpar(2) === 'par');
    console.log(parImpar(5) === 'impar');
    console.log(parImpar(-5) === 'impar');
    console.log(parImpar(0) === 'par');
    console.log(parImpar() === false);
    console.log(parImpar("texto") === NaN);
    console.log(parImpar() === NaN);
    console.log(parImpar({}) === NaN);
    console.log(parImpar(null) === NaN);
    console.log(parImpar(function(){}) === NaN);
})();