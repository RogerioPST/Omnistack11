import React from 'react';
//dentro vector-icons, estao os font awesome, material icons, feather icons
import {Feather} from '@expo/vector-icons';
//TouchableOpacity eh como se fosse um botao, mas n tem o estilo especifico do android ou ios
//tem efeitos de opacidade diferente do button
import {Linking, Text, View, Image, TouchableOpacity} from 'react-native';

import styles from './styles';
import logoImg from '../../assets/logo.png';
import {useNavigation, useRoute} from '@react-navigation/native';

import * as MailComposer from 'expo-mail-composer';

export default function Detail(){    
    //<Text style={[styles.incidentProperty, {marginTop: 0}]}>ONG:</Text>
    //acima - dois estilos/duas classes diferentes p o mesmo elemento

    //navega pelo app
    const navigation = useNavigation();
    //recupero os parametros
    //no ex, se eu quisesse recuperar o valor de a, faria:
    //const incident = route.params.a;
    const route = useRoute();        
    const incident = route.params.incident;
    const message= `Olá, ${incident.name}, estou entrando em contato, pois gostaria de ajudar no caso "${incident.title}" com o valor de R$ ${incident.value}`;

    function navigateBack(){
        navigation.goBack();
    }

    function sendMail(){
        MailComposer.composeAsync({
            subject: `heroi do caso: ${incident.title}`,
            //recipients: [incident.email],
            recipients: ['rogerio.pst1@gmail.com'],
            body: message,
        })
    }
    function sendWhatsapp(){
        //esse abaixo eh um deep link/linking/
        Linking.openURL(`whatsapp://send?phone=5511983752017&text=${message}`);
    }
    //n existe div, p, span etc no react-native,
    //praticamente tudo eh VIew e Text
    // a tag style eh necessaria para estilizar
    //o objeto styles foi criado para acessar os estilos especificos de cada tela
    //para pegar o icon de flech, usar como esta com a tag Feather
    return (
        <View style={styles.container}>
             <View style={styles.header}>
                <Image source={logoImg} />

                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#e02041" />
                </TouchableOpacity>
            </View>
            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, {marginTop: 0}]}>ONG:</Text>
                <Text style={styles.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>{incident.title}</Text>

                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>{incident.value}</Text>
            </View>
            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o heroi desse caso!</Text>

                <Text style={styles.heroDescription}>Entre em contato:</Text>
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View> 
    );
}