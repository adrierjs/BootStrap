var http = require('http'); // acrencentar algo coisa, criando a biblioteca

var server = http.createServer(function(req, res){

    var categoria = req.url;
    if (categoria == '/tecnologia'){
        res.end("<html><body>Noticias de tecnologias</body><\html>");
    } else if (categoria == '/moda'){
        res.end("<html><body>Noticias de moda</body><\html>");
    } else if (categoria == '/beleza'){
        res.end("<html><body>Noticias de beleza</body><\html>");
    } else{
         res.end("<html><body>Portal de noticia</body><\html>");
    }
}); //criar servidor 
server.listen(3000); //escutar em uma porta
//Ctrl + Alt + N para executar na porta 3000
//npm init : comando para iniciar o npm, no caso o packege.json

//npm install express -save : instalar o express para quando for para outro computador e baixar todos os arquivos necessários

//o node é uma plataforma que executa códigos javascript e o express é um framework 

//comando para instalar o EJS: npm install ejs --save