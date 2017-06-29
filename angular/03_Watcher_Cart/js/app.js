//iniciar o ng-app
var app = angular.module("app",[]);

//criando nossa controller
app.controller("CartCtrl", ["$scope",function($scope) {
	
	//definimos nossa conta como um objeto
	$scope.bill = {};

	//vamos definir os itens da nossa compra
	$scope.items = [
		{name:"Chocolate", qtd:3, value:2.99},
		{name:"Condon", qtd:10, value:0.99},
		{name:"Flower", qtd:1, value:99.99},
		{name:"Money", qtd:300, value:3.80}
	]

	//função que popula os dados da conta com base nos itens
	function updateBill() {
		
		$scope.bill.value = 0;

		$scope.items.forEach(function (item) {
			console.log(arguments);
			$scope.bill.value += (item.value * item.qtd);
		})

		//configuramos o desconto com base no valor da conta
		if($scope.bill.value > 99){
			$scope.bill.discount = 10;
		}else{
			$scope.bill.discount = 5;
		}

		//configuramos o total com base no desconto
		$scope.bill.total = $scope.bill.value - ($scope.bill.value *($scope.bill.discount / 100));
	}

	//criamos os métodos para manipular a lista
	$scope.addItem = function (item) {
		$scope.items.push(item);
	}
	$scope.removeItem = function () {
		$scope.items.pop();
	}

	//cadastramos o watcher
	/*
		no terceiro agumento informamos a profundidade de analise
		
		- false (analisa superficialmente a variavel, executa o metodo apenas se a variavel for radicalmente alterada, por exemplo caso você associe uma outra instancia para variavel)

		- true (analisa profundamente o conteúdo da variavel, e qualquer modificação resultara na chamada do método associado)
	*/
	$scope.$watch("items", updateBill, true);

	//atualizamos a conta para visualizar na tela
	updateBill();

}])
