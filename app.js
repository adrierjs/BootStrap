var express = require('express'); //recuperando a biblioteca do express
var msg = require('./mod_test');

var app = express();

app.set('view engine','ejs');

app.get('/',function(req,res){
    res.render("home/index");
});

app.get('/formulario_inclusao_noticia', function(req,res){
    res.render("admin/form_add_noticia")
});

app.get('/noticias/noticias', function(req,res){
    res.render("admin/form_add_noticias")
});


app.listen(3000, function(){
    console.log(msg());
});

//painstalra iniciar, apertar control+alt+n
//npm install -g nodemon // utilitário para salvar automaticamente as alterações sem precisar resetar o servidor 