const knex = require('knex');

const configuration = require('../../knexfile');

//buscando a variavel de ambiente definida no package.json
//a partir do cross-env baixado pelo npm 
const config = process.env.NODE_ENV == 'test' ? configuration.test : configuration.development;

const connection = knex(config);

module.exports = connection;

/*
KNEX EH UM QUERY BUILDER (N USA COMANDOS SQL)
npm install knex
npm install sqlite3
//npx executa um comando
// vai criar o arquivo 'knexfile.js'
npx knex init 
// vai criar o arquivo para gerar a migration/tabela no banco de dados
npx knex migrate:make creta_ongs
//vai executar as migrations para efetivamente criar no banco de dados
npx knex migrate:latest
//vai executar um rollback para desfazer o ultimo comando
npx knex migrate:rollback
//para ver o status das migrations
npx knex migrate:status
*/