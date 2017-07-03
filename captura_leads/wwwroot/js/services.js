(function () {
	angular.module("appLeads").factory('ServiceLeads', ['$http', '$rootScope', function ($http, $root) {
		function getLeads(){
			$http.get(URL_API + "Lead").then(function(data){
				$root.$broadcast('GetLeads', data);
			}, function(err){
				$root.$broadcast('ErrorAPI', 'Erro ao consultar leads!');
			});
		}

		return {
			getLeads: getLeads
		}
	}])
})();
