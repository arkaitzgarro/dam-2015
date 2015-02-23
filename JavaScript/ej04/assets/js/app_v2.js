(function(){
    var info = function(str) {
        if (typeof str === 'string') {
            if (str === str.toLowerCase()) {
                console.log('Minúsculas');
            } else if (str === str.toUpperCase()) {
                console.log('Mayúsculas');
            } else {
                console.log('Mix');
            }
        } else {
            throw Error('No es un String');
        }
    };

    console.log(info('MAYúSCULAS'));
    console.log(info('minúsculas'));
    console.log(info('MaYúsculas y mÍnúscUlas'));

    try {
        console.log(info());
    } catch(e) {
        if (e instanceof Error) {

        } else if (e instanceof TypeError) {
            
        }
    }

    try {
        console.log(info({}));
        console.log(info(null));
        console.log(info(0));
        console.log(info(function(){}));
    } catch(e) {
        if (e instanceof Error) {

        } else if (e instanceof TypeError) {

        }
    }
})();