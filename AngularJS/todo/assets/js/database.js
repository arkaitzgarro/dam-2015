angular.module('todoApp.services', [])
.factory('todoRepository', function(){

    var findAll = function() {
        var todos = [];

        todos.push({ done : true, task : 'Aprender Ionic'});
        todos.push({ done : false, task : 'Aprender AngularJS'});
        todos.push({ done : false, task : 'Adorar JavaScript'});

        return todos;
    };

    return {
        findAll : findAll
    };
});