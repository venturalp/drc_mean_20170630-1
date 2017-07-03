const URL_API = "http://localhost:3000/api/";

(function(){
	var app = angular.module("appLeads", []);

	app.controller('LeadsCtrl', ['$scope', 'ServiceLeads', function($scope, srvLeads){

		$scope.leads;
		$scope.busca = "";

		$scope.$on('GetLeads', function(ev, data){
			if (data.result)
				$scope.leads = data.dados;
			else
				alert("Erro ao buscar dados");
			console.log(data);
		});

		$scope.$on('ErrorAPI', function(ev, msg){
			alert(msg);
		})

		$scope.getDados = function(){
			srvLeads.getLeads();
		};

		$scope.getDados();
	}]);
})();
