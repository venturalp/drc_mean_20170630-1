//circle.js
var PI = Math.PI;

//o EXPORT permite a utilização destes métodos
exports.area = function(r){
	return PI * r * r;
};

exports.circumference = function(r){
	return 2 * PI * r;
}
