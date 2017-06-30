(function(){
    angular.module('customServiceApp')
        .factory('msgService', function(){
            var msg = "";
            
            function pegarMensagem(){
                return msg;
            }
        
            function setarMensagem(_msg){
                msg = _msg;
            }
        
            return {
                get: pegarMensagem,
                set: setarMensagem
            };
    });
})();