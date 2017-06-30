(function () {

	//vamos declarar nosso módulo
	var app = angular.module("App",[]);

	//construção do filtro
	app.filter("underAge",function () {
		
		//retorno uma função que retorna um valor
		return function(values, flag, field) {
			//minha lista filtrada
			var output = [];

			//No JAVA-SCRIPT o array tem um método que faz a iteração com todos os itens que ele possue
			values.forEach(function (item) {

				var age = item[field];
				//se não for número retorna vazio
				if (isNaN(age)){ 
				 	return
				}

				if(flag === true && age >= 18){
					
						output.push(item)
					
				}else if(flag === false && age < 18 ){
					
						output.push(item)
					
				}
			})
			return output 
		}
	})

	//vamos adicionar a controller para este app
	app.controller("AlunosCtrl",["$scope",AlunosCtrl])

	//definição de function da controller
	function AlunosCtrl($scope) {
		$scope.teste = true;
		$scope.alunos = [{name:"Gustavo",email:"gusTavo@gmail.com",age:10},
						 {name:"Marcofa",email:"marco@gmail.com",age:20},
						 {name:"Julio",email:"julio@gmail.com",age:11},
						 {name:"Gabrielfj",email:"gabRiel@gmail.com",age:33},
						 {name:"Comrrado",email:"conrrado@gmail.com",age:03},
						 {name:"Priscila",email:"Priscila@gmail.com",age:16}];

		$scope.showBusca = function () {
			console.log($scope.busca);
		}
	}
	
})()