//importando o framework do express
const express = require('express');
//instanciando o app com base no express
const app = express();
//Quando uma requisição get vazia for feita vazia, será retornado um hello world
app.get('/', function(req, res){
	res.send("Hello, it's me");
});

app.listen(3000, function(){
	console.log("Serve ON");
});