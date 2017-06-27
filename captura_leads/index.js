const express = require('express');
const app = express();
const db = require('mongoose');
const bodyParser = require('body-parser');
const faker = require('faker');
const models = require("./modules/models.js")(db);


db.connect("mongodb://localhost:27017/leads");

app.use(express.static(__dirname + "/wwwwroot"));

app.use(bodyParser.json());

app.post('/api/cadastraBase', function (req, res) {
    var qtd = req.body.qtde;
//    console.log(req);
    //    res.send("ok");
    var dados = [];
    for (i = 0; i < qtd; i++) {
        var aux = new models.Lead({
            nome: faker.name.firstName(),
            email: faker.internet.email(),
            telefone: faker.phone.phoneNumber(),
            empresa: faker.company.companyName(),
            aceito: faker.random.boolean()
        });


        dados.push(aux);
    }

    models.Lead.insertMany(dados, function (err) {
        if (err)
            res.send("lead não foi inserido! ");

        models.Lead.find(function (err, doc) {
            if (err)
                res.send(err);

            res.json(doc);
        });
    });


});

app.listen(3000, function () {
    console.log('SERVER RODANDO');
});