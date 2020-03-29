const express = require('express');
const cors = require('cors');
const {errors} = require('celebrate');
const routes = require('./routes');


const app = express();

//modulo cors vai determinar quem vai poder acessar a aplicação.
//app.use(cors({
// origin: 'http://meuapp.com'
//}));
app.use(cors());
//O JSON ABAIXO SERVE PARA ENTENDER QUE EU ESTOU PASSANDO JSON NO BODY DE UMA REQUISIÇÃO.
app.use(express.json());

app.use(routes);
//incluir essa validacao abaixo faz com q n 
//tenha um status 500 vindo do servidor
app.use(errors());


module.exports = app;

/*

*/
