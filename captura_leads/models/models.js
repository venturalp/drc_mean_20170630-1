var db = require('mongoose');

exports.Lead = db.model("leads", {
	nome: String,
	email: String,
	telefone: String,
	empresa: String,
	aceito: Boolean,
	campanha: String
}, "leads");