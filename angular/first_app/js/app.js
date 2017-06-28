var app = angular.module('firstApp', []);

app.controller("MainCtrl", ['$scope', function($scope){
    $scope.mensagem = "Hello World!";
    
    $scope.showMessage = function(){
        alert($scope.mensagem);
    }
}]);