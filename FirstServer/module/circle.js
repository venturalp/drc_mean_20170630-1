// circle.js
var PI = Math.PI;

//o EXPORT permite a utilização destes métodos para quem importar este arquivo
exports.area = function(r) {
	return PI * r * r;
};

exports.circumference = function (r) {
	return 2 * PI * r; 
};