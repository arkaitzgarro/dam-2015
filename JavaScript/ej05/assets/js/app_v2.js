(function(){
    var palindromo = function(str) {
        if (typeof str === 'string') {
            var tmp = str
                    .trim()
                    .toLowerCase()
                    .replace(/\s/g, '');

            return tmp.split('').reverse().join('') === tmp;
        }
        
        return false;
    };

    console.log(palindromo(' radar  ') === true);
    console.log(palindromo('JavaScript mola mazo') === false);
    console.log(palindromo('La ruta nos aporto otro paso natural') === true);    
    console.log(palindromo());
    console.log(palindromo(0));
    console.log(palindromo({}));
    console.log(palindromo(null));
    console.log(palindromo(function(){}));
})();