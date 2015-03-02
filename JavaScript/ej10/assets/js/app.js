window.onload = function() {
    var ul  = document.getElementById('lista'),
        btn = document.getElementById('add');

    var add = function(e) {
        e.stopPropagation();

        if (ul) {
            var li = document.createElement('li');
            li.innerText = 'Elemento ' + (ul.children.length + 1);

            ul.appendChild(li);
        }
    };

    var log = function(e) {
        console.log("Click on " + e.target + ' on ' + new Date());
    };

    var remove = function(e) {
        if (confirm('¿Seguro que desea eliminar este elemento?')) {
            this.removeChild(e.target);
        }
    };


    if (btn) {
        btn.addEventListener('click', add, false);
    }

    if (ul) {
        ul.addEventListener('click', remove, false);
    }

    document.addEventListener('click', log, false);    
};