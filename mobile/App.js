//import 'intl';
//import 'intl/locale-data/jsonp/pt-BR';

//baixar o expo-cli com
//"npm install -g expo-cli"
//para criar um novo projeto mobile, fazer
//"expo init nome_projeto"
//escolher a opção de template e aguardar criar!

//para executar o projeto, fazer "expo start" ou "npm start"
//vai abrir uma url onde vai ser possivel scanear um qrcode com
// o app EXPO e pronto.

import React from 'react';

import Routes from './src/routes';

export default function App() {
  return (
    <Routes />
  );
}

