window.onload = function() {
    console.log('Window loaded');

    var input = document.getElementById('name'),
        span  = document.getElementById('target');

    input.addEventListener('keyup', function(e){
        console.log('Change event');
        
        span.innerText = this.value;
    }, false);
};