const express = require('express');
const cors = require('cors');
//a linha abaixo serve p q o erro seja retornado de forma mais semantica c JSON
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
//serve p q o erro seja retornado de forma mais semantica c JSON
app.use(errors());

/*para retornar json na tela:
app.get('/', (request, response) => {
    return response.json({
        evento: 'Semana Omnistack11', 
        aluno: 'Rogerio'
    });
});
*/


module.exports = app;

/*
estudos daqui p frente

padroes de codigo: eslint, prettier
autenticacao jwt
styled components

*/
