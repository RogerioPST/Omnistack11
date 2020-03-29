import React, {useState} from 'react';


export default function Header(props){
//CONCEITO: - ESTADO:
//uma informação que vai ser mantida pelo componente
//imagina q o componente precisa armazenar algum tipo de informação 
// que seja um input de usuario, listagem externa e precisa modificar, lidar com ela, adicionar, excluir.
//entao, no react, a gente n pode utilizar variaveis convencionais.
//precisamos usar ESTADO.
//toda vez o estado eh alterado, o componente vai remontar/renderizar novamente
//exibindo as novas informações em tela.
const [counter, setCounter] = useState(0);
//quando usamos esse metodo useState, ele retorna um array com duas posições:
//a primeira eh o valor da variavel, a segunda posicao eh uma funcao de atualizacao desse valor
//funcao q consegue trocar esse valor
//por conta do CONCEITO DA IMUTABILIDADE!!
function increment(){
    setCounter(counter +1);
}

//CONCEITO: -PROPRIEDADES:
//posso receber props ou fazer a desestruturação colocando o nome da propriedade    
// e no html, coloco <h1>{title}</h1>
//export default function Header({title}){
    //se for uma linha, posso retornar o HTML com uma linha assim
    //return <h1>Header</h1>
    //se for mais de uma linha, retornar como abaixo
    return (        
        <header>
            <h1>{props.title}</h1>    
            <p>Contador: {counter}</p>
            <button onClick={increment}>Incrementar</button>        
        </header>        
    );
}

//caso n queira exportar nessa linha adicional, podemos 
//colocar o export default antes da declaração da function acima.
//export default Header;