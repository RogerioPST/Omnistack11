const express = require('express');

const {celebrate, Segments, Joi } = require('celebrate');


const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');

const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//faltou validar se no login, o id esta sendo enviado
routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);

/*
TIPOS DE PARAMETROS:
-QUERY PARAMS: PARAMETROS NOMEADOS ENVIADOS NA ROTA APOS O PONTO  DE INTERROGAÇÃO (FILTROS, PAGINAS)
  -> COMO BUSCAR: request.query  
-ROUTE PARAMS: PARAMETROS UTILIZADOS PARA IDENTIFICAR RECURSOS
  -> COMO BUSCAR: request.params  
-REQUEST BODY: CORPO DA REQUISIÇÃO, UTILIZADO PARA CRIAR OU ALTERAR RECURSOS 
  -> COMO BUSCAR: request.body  
*/

//celebrate eh usado para validação no backend
//celebrate usa por baixo dos Panos o Joi
//dentro de Segments, tem body, params, query, cookies etc
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), OngController.create);


//vai converter Authorization p minuscula, sem problemas.
//o unknown eh necessario p n validar outras propriedades como host
routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), ProfileController.index);


routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}) ,IncidentController.index);

//faltou validar os campos vindos do body e do header (authorization)
routes.post('/incidents', IncidentController.create);

routes.delete('/incidents/:id',celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}) , IncidentController.delete);

module.exports = routes;