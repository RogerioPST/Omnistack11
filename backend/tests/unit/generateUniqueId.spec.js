const generateUniqueId = require('../../src/utils/generateUniqueId');

//para executar os testes: npm test
describe('Generate Unique ID', () =>{
    it('should generate an unique ID', () =>{
        //expect(2+2).toBe(4);
        const id = generateUniqueId();

        expect(id).toHaveLength(8);
    });
});