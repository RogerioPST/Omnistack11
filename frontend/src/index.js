import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

//o react monta a estrutura da sua pag, html, js, css a partir do javascript e o javascript soh executa depois q esse html jah esta montando em tela. 
//entao, o passo a passo do react eh jogar esse html em tela
//depois o javascript entra em ação e preenche essa div id = 'root' com o restante do seu codigo.

//o arquivo index.js eh o primeiro arquivo q vai ser lido.

ReactDOM.render(
  
    <App />
  ,
  document.getElementById('root')
);

