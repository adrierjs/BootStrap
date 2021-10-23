const htpp = require('http');
const server = htpp.createServer(function(req, res){
    res.end("<h1>Seja bem vindo ao meu site!</h1>");
});

server.listen(3000);