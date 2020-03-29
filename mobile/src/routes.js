import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
//esse createStack vai permitir ter o comportamento de clicar 
//e ser direcionado para outra tela do app
import {createStackNavigator} from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Incidents from './pages/Incidents';
import Detail from './pages/Detail';
/*
faz com q n apareça a tab da pagina por padrao
<AppStack.Navigator screenOptions={{headerShown: false}}>
*/

export default function Routes(){
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}}>
                <AppStack.Screen name="Incidents" component={Incidents} />
                <AppStack.Screen name="Detail" component={Detail} />
            </AppStack.Navigator>        
        </NavigationContainer>
    );
}