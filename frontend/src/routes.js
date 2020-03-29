import React from 'react';
//o pacote q lida com as rotas do react eh o react-router-dom.
//BrowserRouter eh um Router q precisa ficar por fora
//Switch vai garantir q apenas uma rota seja chamada por vez
import {BrowserRouter, Route, Switch} from 'react-router-dom';

//qdo importamos uma pasta, ele sempre procura pelo arquivo index.js dentro
import HeaderComPropriedades from './pages/HeaderComPropriedades';
import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

export default function Routes(){
    return(
        <BrowserRouter>
        
            <Switch>            
            //Switch vai garantir q apenas uma rota seja chamada por vez
                //precisa usar o exact, pq se n, vai sempre direcionar p esse
                //componente Logon
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
                <Route path="/incidents/new" component={NewIncident} />
                //ha uma outra forma de chamar um componente com 
                //render, passando uma arrow function com props e eu falo 
                //q essa funcao vai retornar esse componente 
                //esse props sao as propriedades q o proprio Route passa para 
                //o componente. entao, primeiro temos q injetar os props                 
                <Route path="/header" 
                    render={(props) => <HeaderComPropriedades {...props } 
                    title='Novo titulo21' /> }                                                                       
                />                
            </Switch>
        </BrowserRouter>
    );
}
