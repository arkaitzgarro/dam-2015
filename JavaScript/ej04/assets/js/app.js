(function(){
    'use strict';

    var info = function(str) {
        if (typeof str === 'string') {
            var tmp = str;

            if (tmp.trim().toLowerCase() === str) {
                console.log('Solo minúsculas');
            } else if(tmp.trim().toUpperCase() === str) {
                console.log('Solo mayúsculas');
            } else {
                console.log('Mayúsculas y minúsculas');
            }
        }

        return;
    };

    console.log(info('solo minúsculas'));
    console.log(info('SOLO MAYÚSCULAS'));
    console.log(info('Mix de Mayúsculas y Minúsculas'));    
})();