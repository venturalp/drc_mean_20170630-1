//importando o framework do express
const express = require('express');
//instanciando o app com base no express
const app = express();
//carregando framework mongoose
const mongoose = require("mongoose");

const alunos = require('./api/alunos');

//importando body-parser
const bodyParser = require("body-parser");

mongoose.connect("mongodb://localhost:27017/MeuPrimeiroDB");

//const vo = require("./meus_modulos/models.js");

//Definimos o local da pasta publica
app.use(express.static(__dirname + "/wwwroot"));

//configurando o body parser para aceitar json
app.use(bodyParser.json());

app.use('/api', alunos);

app.listen(3000, function () {
    console.log("Serve ON");
});