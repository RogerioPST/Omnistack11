const connection = require('../database/connection');

module.exports ={
    async index (request, response){
        //traz os query parameter
        //vou buscar o page. caso n exista , coloco o valor 1
        //vai ser usado na paginacao com o offset usado abaixo
        const{ page = 1}= request.query;

        const [count] = await connection('incidents').count();

        console.log(count);

        const incidents = await connection('incidents')
            .join('ong', 'ong.id', '=', 'incidents.ong_id')
            .limit(5)
            .offset((page-1)*5)
            .select([
                'incidents.*', 'ong.name', 'ong.email', 
                'ong.whatsapp', 'ong.city', 'ong.uf'
            ]);
        //passando o total de casos para o front-end
        //pelo header da resposta
        response.header('X-Total-Count', count['count(*)']);

        return response.json(incidents);
    },

    async create(request, response){
        const {title, description, value} = request.body;

        //de acordo com o nome q foi dado para o header da requisicao no postman/imsonia etc.        
        //normalmente a info de quem esta logado na app fica aqui
        //dados da autenticação, dados de localização, qdo a gente quer mostrar uma msg em ingles p quem mora nos EUA, em port, p quem mora no Brasil
        //entao, td q caracteriza o contexto daquela requisição.
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title, 
            description,
            value,
            ong_id,
        });

        return response.json({ id});
    },
    async delete( request, response){
        //esse id vem dos parametros das rotas
        const { id} = request.params;

        const ong_id = request.headers.authorization;

        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();
        
            //verificando se a ong q esta tentando deletar, pode realmente deletar!
        if (incident.ong_id != ong_id){
            return response.status(401).json({
                error: 'Operation not permitted.'
            });
        }

        await connection('incidents').where('id', id).delete();

        //deu sucesso, mas n tem conteudo p enviar.
        return response.status(204).send();
    }
};