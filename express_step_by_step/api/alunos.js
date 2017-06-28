//importando o framework do express
const express = require('express');
//carregando framework mongoose
const mongoose = require("mongoose");
var router = express.Router();

var Aluno = mongoose.model("Alunos", {
    nome: String,
    idade: Number,
    profissao: String,
    cursando: String,
    notas: [Number],
    faltas: [Number],
    email: String
}, "Alunos");

//Aluno.collectionName = "Alunos";


//CONSULTA LISTA
router.get("/alunos", function (req, res) {
    Aluno.find(function (err, doc) {
        if (err)
            res.send(err);
        res.json(doc);
    });
});


//CONSULTA COM PARÂMETRO
router.get('/alunos/:id', function (req, res) {
    Aluno.find({
        _id: req.params.id
    }, "nome idade", function (err, doc) {
        if (err)
            res.send(err);

        res.json(doc);
    });
});


//Deletando registro
router.delete('/aluno/:id', function (req, res) {
    Aluno.remove({
        _id: req.params.id
    }, function (err) {
        if (err)
            res.json({result:false, message:"Erro ao tentar remover registro!"});

        res.json({result:true, message:"Removido com sucesso!"});
    });
});

//INSERINDO
router.post('/aluno', function (req, res) {
//    console.log(req);
//    console.log(req.body.Nome);
//    console.log(req.body.Idade);
//    console.log(req.body.Email);
    
    var dados = new Aluno({
        nome: req.body.Nome,
        email: req.body.Email,
        idade: req.body.Idade
    });
    
    dados.save(function(err){
       if (err)
           res.json({result:false, message:"Erro ao inserir aluno!"});
        
        res.json({result:true, message:"Inserido com sucesso!"});
    });
    
});


//UPDATE
router.put('/aluno', function (req, res) {
//    console.log(req);
//    console.log(req.body.Nome);
//    console.log(req.body.Idade);
//    console.log(req.body.Email);
    
    Aluno.findOne({_id:req.body._id}, function(err, doc){
        if (err)
            res.send(err);
        
        doc.nome = req.body.Nome;
        doc.email = req.body.Email;
        doc.idade = req.body.Idade;
        
        doc.save(function(err){
           if (err)
               res.json({result:false, message:"Erro ao alterar aluno!"});

            res.json({result:true, message:"Alterado com sucesso!"});
        });
    });    
});

router.get('/professor/:id/:disciplina', function (req, res) {
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

module.exports = router;