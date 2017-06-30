(function () {
	var app = angular.module('customServiceApp', []);
	
    app.controller('Secao1Ctrl', ['msgService', '$scope', function(msgService, $scope){
        $scope.pegarMensagem = function(){
            return msgService.get();
        }
    }]);
    
    app.controller('Secao2Ctrl', ['msgService', '$scope', function(msgService, $scope){
        $scope.pegarMensagem = function(){
            return msgService.get();
        }
    }]);
    
    app.controller('ServicoSetterCtrl', ['msgService', '$scope', function(msgService, $scope){
        
        $scope.novaMensagem = '';
        
        $scope.setarMensagem = function(){
            msgService.set($scope.novaMensagem);
        }
    }]);
    
})();