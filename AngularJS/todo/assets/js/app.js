angular.module('todoApp', ['todoApp.services'])
.controller('TodoController', ['$scope', 'todoRepository', function($scope, db){
    
    var todos = db.findAll();

    $scope.todos = todos;

    $scope.addTodo = function() {
        todos.push({ done: false, task: $scope.inputText });
        $scope.inputText = '';
    };
}]);