//importando o framework do express
const express = require('express');
//instanciando o app com base no express
const app = express();

//Definimos o local da pasta publica
app.use(express.static(__dirname + "/wwwroot"));

//Quando uma requisição get vazia for feita vazia, será retornado um hello world
app.get('/', function(req, res){
	res.send("Hello, it's me");
    console.log("req get");
});

app.get('/api/alunos/:id', function(req, res){
    console.log(req.params.id);
    var id  = req.params.id;
    if (id>10){
        res.json({nome:"Guilherme"});
    }else
        res.json({nome:"Outros"});
});

app.get('/api/professor/:id/:disciplina', function(req, res){
    console.log(req.params.id);
    var id  = req.params.id;
    if (id>10){
        res.json({nome:"Maurício", disciplina: req.params.disciplina});
    }else
        res.json({nome:"Outros", disciplina: req.params.disciplina});
});

app.listen(3000, function(){
	console.log("Serve ON");
});