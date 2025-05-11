// Importar módulo express
const express = require('express');


// importar modulo express-handlebars
const { engine } = require('express-handlebars');


// importar mómudo mySQL
const mysql = require('mysql2');


// APP
const app = express();


// add bootstrap
app.use('/bootstrap', express.static('./node_modules/bootstrap/dist'));


// add css
app.use('/css', express.static('./css'));


// configuracao do express-handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');


// manipulcao de dados via rotas
app.use(express.json());
app.use(express.urlencoded({extended:false}));


const conexao = mysql.createConnection({
    host:'localhost',
    user:'root',
    password: '',
    database:'projeto'
});


// treste de conexao
conexao.connect(function(erro){
    if(erro) throw erro;
    console.log('Conexao executada com sucesso!');
});


// rota principal
app.get('/', function(req, res){
    res.render('formulario'); // nao preciso especificar o .handlebars pq ja foi definido na config. acima
});


// rota de cadastro
app.post('/cadastrar', function(req, res){
    console.log(req.body);
    res.end();
});


// servidor
app.listen(8080);

