(function(){
    var factorial = function(num) {
        var resp = 1;

        if (typeof num === 'number' && num >= 0) {
            for (var i = num; i > 0; i--) {
                resp *= i;
            }
        } else {
            resp = false;
        }

        return resp;
    };

    console.log(factorial(0) === 1);
    console.log(factorial(1) === 1);
    console.log(factorial(2) === 2);
    console.log(factorial(3) === 6);
    console.log(factorial(4) === 24);
    console.log(factorial("texto") === false);
    console.log(factorial("4") === false);
    console.log(factorial(-1) === false);
    console.log(factorial() === false);
    console.log(factorial({}) === false);
    console.log(factorial(function(){}) === false);
    console.log(factorial(null) === false);
})();