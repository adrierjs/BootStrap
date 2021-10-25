var mysql = require('mysql');
        //conexão com o servidor
module.exports = function (){
       return mysql.createConnection({
        host  : 'localhost',
        user : 'root',
        password : '1234',
        database : 'portal_noticias'
    });
}