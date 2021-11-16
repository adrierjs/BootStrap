module.exports = function(application){
	application.get('/', function(req, res){
		application.app.controllers.index.index(application, req, res);
	});
	
	application.post('/autenticar', function(req, res){
		res.send("Chegando aqui");
		//application.app.controllers.index.index(application, req, res);
	});
}