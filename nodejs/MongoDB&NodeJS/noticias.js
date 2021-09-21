var http = require('http'); // acrencentar algo coisa

var server = http.createServer(function(req, res){
    res.end("<html><body>Portal de notícias</body><\html>");
}); //criar servidor 
server.listen(3000); //escutar em uma porta