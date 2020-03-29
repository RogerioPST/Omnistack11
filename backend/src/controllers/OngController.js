const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');

module.exports ={
    //lista todas as ongs
    async index (request, response) {
    const ongs = await connection('ong').select('*');

    return response.json(ongs);
    }, 
    
    /*
    TIPOS DE PARAMETROS:
    -QUERY PARAMS: PARAMETROS NOMEADOS ENVIADOS NA ROTA APOS O PONTO  DE INTERROGAÇÃO (FILTROS, PAGINAS)
    -> COMO BUSCAR: request.query  
    -ROUTE PARAMS: PARAMETROS UTILIZADOS PARA IDENTIFICAR RECURSOS
    -> COMO BUSCAR: request.params  
    -REQUEST BODY: CORPO DA REQUISIÇÃO, UTILIZADO PARA CRIAR OU ALTERAR RECURSOS 
    -> COMO BUSCAR: request.body  

    PARA TESTAR ROTAS, USAR O PROGRAMA INSOMNIA
    */

    //cria uma ong
    async create(request, response){
        const {name, email, whatsapp, city, uf } = request.body;

        const id = generateUniqueId();
    
        //qdo o node chegar nesse codigo, ele vai aguardar p soh depois enviar a resposta (chamar o return)
        //funciona junto com o async usado acima no retorno da funcao
        await connection('ong').insert({
            id,
            name, 
            email, 
            whatsapp,
            city, 
            uf,
        })
    
    
        //console.log(data);
        //soh posso retornar depois q gerar o id.
        //por isso o async, await
        return response.json({ id});
    }
};