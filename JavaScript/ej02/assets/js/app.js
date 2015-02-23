(function(){
    'use strict';

    var factorial = function(num) {
        if (typeof num === 'number' || typeof num === 'string') {
            num = parseInt(num);

            if (!isNaN(num)) {
                if (num < 0) {
                    throw new Error(num + " should be greater than 0");
                }

                if (num === 0) {
                    return 1;
                } else {
                    return num * factorial(num - 1);
                }
            }
        }

        return NaN;
    };

    console.log(factorial(0) === 1);
    console.log(factorial(1) === 1);
    console.log(factorial(2) === 2);
    console.log(factorial(3) === 6);
    console.log(factorial(4) === 24);
    console.log(isNaN(factorial({})));
    console.log(isNaN(factorial(function(){})));
    console.log(isNaN(factorial(null)));

    try {
        console.log(factorial(-1));
    } catch(e) {
        console.log(e.message);
    }
    
})();