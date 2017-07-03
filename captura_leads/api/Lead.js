var express = require('express');
var db = require('mongoose');
var router = express.Router();
const models = require("./../models/models");
var json2csv = require('json2csv');
const faker = require('faker');
faker.locale = 'pt_BR';

router.post('/Lead', function(req, res){
	var aux = new models.Lead({
		nome: req.body.nome,
		email: String(req.body.email).toLowerCase(),
		telefone: req.body.telefone,
		empresa: req.body.empresa,
		aceito: req.body.aceito,
		campanha: req.body.campanha
	});
	
	models.Lead.count({email:String(req.body.email).toLowerCase()}, function(err, count){
		if (err)
			res.json({result:false, message:'Erro ao tentar salvar registro'});
		
		if (count == 0){		
			aux.save(function(err){
				if (err)
					res.json({result:false, message:'Erro ao tentar salvar registro'});
				else
					res.json({result:true, message:'Registro salvo com sucesso'});
			});
		}else
			res.json({result:false, message:'Email já cadastrado'});
	});
});

router.get('/Lead/Download/:campanha', function(req, res){
	var fields = ['nome', 'email', 'telefone', 'empresa', 'aceito', 'campanha'];
	var fieldNames = ['Nome', 'Email', 'Telefone', 'Empresa', 'Aceito', 'Campanha'];
	models.Lead.find({campanha: req.params.campanha}, function(err, docs){
		if (err)
			res.json({result:false, message:'Erro ao tentar gerar arquivo CSV'});
		
		var file = json2csv({data: docs, fields: fields, fieldNames: fieldNames, del: ';'});
		res.attachment('Download.csv');
		res.status(200).send(file);
	});
});

router.get('/Lead', function(req, res){
	models.Lead.find().limit(100).exec(function(err, doc){
		if (err)
			res.json({result:false, message:"Erro ao buscar dados"});
		res.json({result:true, dados: doc});
	});
});

router.post('/Lead/cadastraBase', function (req, res) {
    var qtd = req.body.qtde;
//    console.log(qtd);
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

module.exports = router;
