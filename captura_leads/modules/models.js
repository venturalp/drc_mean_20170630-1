module.exports = function (db) {

    var lead = db.model("leads", {
        nome: String,
        email: String,
        telefone: String,
        empresa: String,
        aceito: Boolean
    }, "leads");

    var models = {
        Lead: lead
    }
    return models;
}