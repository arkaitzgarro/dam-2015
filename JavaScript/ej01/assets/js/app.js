(function() {
    // var validarDNI = function(dni) {

    //     var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'],
    //         ok = false;

    //     if (dni && (typeof dni === "string")) {
    //         if (dni.length === 9) {
    //             var num = parseInt(dni);

    //             if (!isNaN(num) && num >= 0 && num <= 999999999) {
    //                 var char = dni.charAt(dni.length - 1);

    //                 if (typeof char === "string") {
    //                     ok = (char === letras[num % 23]);
    //                 }
    //             }
    //         }
    //     }

    //     return ok;
    // };

    var validarDNI = function(dni) {
        var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'],
            ok = false;

        if (dni && typeof dni === "string" && dni.length === 9) {
            var num = parseInt(dni);

            if (num >= 0 && num <= 99999999) {
                var char = dni.charAt(dni.length - 1).toUpperCase();

                ok = char === letras[num%23];
            }
        }

        return ok;
    };

    console.log(validarDNI("44153570X") === true);
    console.log(validarDNI("44153570x") === true);
    console.log(validarDNI("00000013J") === true);
    console.log(validarDNI("013T0000J") === false);
    console.log(validarDNI("99999999A") === false);
    console.log(validarDNI("AAAAAAA1T") === false);
    console.log(validarDNI("A") === false);
    console.log(validarDNI(undefined) === false);
    console.log(validarDNI(false) === false);
    console.log(validarDNI() === false);
    console.log(validarDNI({}) === false);
})();
