//importando o framework do express
const express = require('express');
//instanciando o app com base no express
const app = express();
//carregando framework mongoose
const mongoose = require("mongoose");

//importando body-parser
const bodyParser = require("body-parser");

mongoose.connect("mongodb://localhost:27017/MeuPrimeiroDB");

//const vo = require("./meus_modulos/models.js");

//Definimos o local da pasta publica
app.use(express.static(__dirname + "/wwwroot"));

//configurando o body parser para aceitar json
app.use(bodyParser.json());

//Quando uma requisição get vazia for feita vazia, será retornado um hello world
app.get('/', function (req, res) {
    res.send("Hello, it's me");
    console.log("req get");
});

var Aluno = mongoose.model("Alunos", {
    nome: String,
    idade: Number,
    profissao: String,
    cursando: String,
    notas: [Number],
    faltas: [Number],
    email: String
}, "Alunos");

Aluno.collectionName = "Alunos";

app.get("/api/alunos", function (req, res) {
    Aluno.find(function (err, doc) {
        if (err)
            res.send(err);
        res.json(doc);
    });
});

app.get('/api/aluno/:id', function (req, res) {
    Aluno.find({
        _id: req.params.id
    }, "nome idade", function (err, doc) {
        if (err)
            res.send(err);

        res.json(doc);
    });
});

app.post('/api/aluno', function (req, res) {
//    console.log(req);
    console.log(req.body.Nome);
    console.log(req.body.Idade);
    console.log(req.body.Email);
    
    var dados = new Aluno({
        nome: req.body.Nome,
        email: req.body.Email,
        idade: req.body.Idade
    });
    
    dados.save(function(err, doc){
       if (err)
           res.json({result:false, message:"Erro ao inserir aluno!"});
        
        res.json({result:true, message:"Inserido com sucesso!"});
    });
    
});

app.get('/api/professor/:id/:disciplina', function (req, res) {
    console.log(req.params.id);
    var id = req.params.id;

    if (id > 10) {
        res.json({
            nome: "Maurício",
            disciplina: req.params.disciplina
        });
    } else
        res.json({
            nome: "Outros",
            disciplina: req.params.disciplina
        });
});

app.listen(3000, function () {
    console.log("Serve ON");
});