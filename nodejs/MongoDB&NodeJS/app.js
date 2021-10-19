var express = require('express'); //recuperando a biblioteca do express
var app = express();

app.get('/', function(req,res){
    res.send("<html><body>Portal de noticias</body></html>")
});
app.get('/tecnologia',function(req,res){
    res.send("<html><body>Portal de tecnologia</body></html>")
})
app.listen(3000, function(){
    console.log("Servidor rodando com Express");
});

//para iniciar, apertar control+alt+n