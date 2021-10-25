module.exports = function(app){
    app.get('/noticias', function(req,res){
        var mysql = require('mysql');
    //conexão com o servidor
        var connection = mysql.createConnection({
            host  : 'localhost',
            user : 'root',
            password : '1234',
            database : 'portal_noticias'
        });
        
        connection.query('select *from noticias', function(error, result) {
            res.render("noticias/noticias", {noticias : result});
        });
     });

    };
