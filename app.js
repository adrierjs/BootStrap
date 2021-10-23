var app = require('./config/server');

var rotaNoticias = require ('./app/routes/noticias');
rotaNoticias(app);

var rotaHome = require('./app/routes/home');
rotaHome(app);

var rotaFormulario = require('./app/routes/formulario_inclusao_noticia');
rotaFormulario(app);

app.listen(3000, function(){
    console.log('Servidor ON');
});

//painstalra iniciar, apertar control+alt+n
//npm install -g nodemon // utilitário para salvar automaticamente as alterações sem precisar resetar o servidor 