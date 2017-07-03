const express = require('express');
const app = express();
const db = require('mongoose');
const bodyParser = require('body-parser');
const Leads = require("./api/Lead");

db.connect("mongodb://localhost:27017/ColetaLeads");

app.use(express.static(__dirname + "/wwwroot"));

app.use(bodyParser.json());
app.use('/api', Leads);

app.listen(3000, function () {
    console.log('SERVER RODANDO');
});
