(function(){
    var app = angular.module('customServiceApp', []);
    
    app.controller('Secao1Ctrl', ['$scope', '$rootScope', function($scope, $root){
        $scope.total = 0;
        
        $scope.incrementarValorTotalEm = function(qtd){
            $scope.total += qtd;
            $root.$broadcast('Incrementa', {
                total: $scope.total
            }) ;  
        }
        
        $scope.$on('Incrementa', function(e, data){
            console.log('Incrementou no sender ' + data.total);
        });
        
    }]);
    
    app.controller('Secao2Ctrl', ['$scope', function($scope){
        $scope.total = 0;
        
        $scope.$on('Incrementa', function(e, data){
           $scope.total = data.total;
            console.log('Controller recebeu broadcast ' + data.total );
        });
    }])
    
    
})();