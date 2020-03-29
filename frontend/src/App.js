// importar React eh essencial em todo lugar q for usar JSX
import React from 'react';
import './global.css';

import Routes from './routes';

//JSX Javascript XML
//o componente no react nada eh mais do q uma função q retorna HTML
//porem, qdo esse html está escrito do javascript = JSX.
//REact eh uma SPA (SIngle Page Application) com Live Reload!

function App() {  
  return (    
    <Routes /> 

  );
}

export default App;
