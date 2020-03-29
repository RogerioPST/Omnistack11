const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () =>{
    //antes dos testes, vou criar as tabelas na base de test
    beforeEach(async () =>{
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async() =>{
        await connection.destroy();
    });

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            //qdo quiser enviar parametros no header, usar o set
            //.set('Authorization', '0464aa1f')
            .send({
                name: "APAD2",
                email: "contato@apad.com.br",
                whatsapp: "4700000000",
                city: "Rio do Sul",
                uf: "SC"
        

        });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});