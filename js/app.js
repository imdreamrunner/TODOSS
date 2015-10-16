var App = angular.module('App', ['TodoHelper']);

App.controller('TodoController', function($scope, TodoList) {
    $scope.display = 'all';
    $scope.todoList = TodoList.list;
    $scope.addTodo = function () {
        if ($scope.newTodoText) {
            TodoList.add($scope.newTodoText);
            $scope.newTodoText = "";
        }
    };
    $scope.toggle = function (id) {
        TodoList.toggle(id);
    };
    $scope.itemClass = function (id) {
        if (TodoList.list[id].done) {
            return 'done';
        }
    };
    $scope.itemCountDisplay = function () {
        var count = TodoList.activeItemCount();
        if (count > 1) {
            return '' + count + ' items left.';
        } else if (count == 1) {
            return '' + count + ' item left.';
        } else {
            return 'You are awesome!';
        }
    };
    $scope.showItem = function (item) {
        if ($scope.display == 'all') {
            return !TodoList.list[item].deleted;
        } else if ($scope.display == 'active') {
            return !TodoList.list[item].deleted && !TodoList.list[item].done;
        } else {
            return !TodoList.list[item].deleted && TodoList.list[item].done;
        }
    };
    $scope.deleteItem = function (item) {
        if (!TodoList.list[item].done) TodoList.toggle(item);
        TodoList.delete(item);
    };
    $scope.setDisplay = function (opt) {
        $scope.display = opt;
    };
    $scope.displayClass = function (opt) {
        return $scope.display == opt ? 'active': '';
    };
    $scope.clear = function () {
        TodoList.clear();
    };
    //TodoList.add('test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1test 1');
    //TodoList.add('test 2');
});
