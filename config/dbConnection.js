var mysql = require('mysql');
        //conexão com o servidor
var connyMySQL = function(){
    console.log('Conexao com bd foi estabelecida');
    return mysql.createConnection({
     host  : 'localhost',
     user : 'root',
     password : '1234',
     database : 'portal_noticias'

    });
}

module.exports = function (){
    console.log('O autoload carregou o módulo de conexão com o db')
    return connyMySQL;
   
}