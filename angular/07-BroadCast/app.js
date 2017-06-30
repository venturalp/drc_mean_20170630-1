(function () {
	
	//criando nosso modulo
	var app = angular.module("broadApp",[]);
	//agora vamos criar nossas controllers
	angular.module("broadApp")
	.controller("SendCtrl",["$scope","$rootScope",function ($scope,$root) {
		
		

		$scope.sendText = function(){
			console.log("ENVIANDO OS DADOS");
			/*
				Para enviar eventos de broadcast através de mais de um ESCOPO, 
				o que ocorre por exexemplo quando usamos duas controllers separadas
				devemos utilizar o $rootScope para enviar o $broadcast
			*/	
			$root.$broadcast("EnvioDeDados",{
				texto:$scope.texto
			})
			
		}

		//agora temos que receber esse evento
		$scope.$on("EnvioDeDados",function(event, data) {
			console.log("Sender recebeu", data);
		});

	}]);

	app.controller('ReaderCtrl', ['$scope', function($scope){

		//agora temos que receber esse evento
		$scope.$on("EnvioDeDados",function(event, data) {
			console.log("Reader recebeu", data);
			$scope.content = data.texto;
		})
		
	}]);

})();