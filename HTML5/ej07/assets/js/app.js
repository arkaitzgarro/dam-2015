window.onload = function() {
    var input  = document.getElementById('number'),
        btn    = document.getElementById('calculate'),
        result = document.getElementById('result');

    var worker = new Worker('assets/js/primes.js');

    btn.addEventListener('click', function(e){
        e.preventDefault();

        var num = input.value;

        worker.postMessage(num);
    });

    worker.addEventListener('message', function(e){
        var primes = e.data;

        result.innerHTML = primes.join(" ");
    });
};