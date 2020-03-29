import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import{FiPower, FiTrash2} from 'react-icons/fi'
import logoImg from '../../assets/logo.svg';

import './styles.css';

import api from '../../services/api';


export default function Profile(){
    const [incidents, setIncidents] = useState([]);
    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();

    //essa funcao serve p disparar alguma funcao em algum determinado 
    //momento, por ex, assim q ele eh mostrado em tela;
    //o useEffect recebe dois parametros:
    //useEffect(() => {}, [])
    //1- qual funcao q eu quero q seja executada (funcao p carregar os casos)
    //2 - qdo q a funcao vai ser executada -//o [] eh um array de dependencias. toda vez q as info q estiverem nessa 
    //array mudarem, ele vai executar a funcao de novo
    //se eu deixar o [] (vazio), vai executar apenas uma vez.
    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId,
            }
        }).then(response =>{
            setIncidents(response.data);

        })
    }, [ongId]);
    async function handleDeleteIncident(id){
        try{
            await api.delete(`incidents/${id}`, {
                headers:{
                    Authorization: ongId,

                }
            });
        //manter apenas os incidentes q forem diferentes do deletado. 
        setIncidents(incidents.filter(incident => incident.id !== id));    
        }catch(err){
            alert('erro ao deletar. tente novamente ');
        }
    }

    function handleLogout(){
        //limpa todo local storage
        localStorage.clear();
        history.push('/');

    }
    /*passar assim qdo precisar passar parametros para a funcao
    <button onClick={() => handleDeleteIncident(incident.id)} type="button">
    */
    return(
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the hero" />
                <span>Bem vinda, {ongName}</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#e02041" />
                </button>

            </header>

            <h1>Casos cadastrados</h1>
            <ul>
               {incidents.map(incident =>(
                   //react precisa desse key p ter um id unico
                    <li key={incident.id}>
                    <strong>CASO:</strong>
                    <p>{incident.title}</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>{incident.description}</p>

                    <strong>VALOR:</strong>
                    <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}</p>
                    
                    <button onClick={() => handleDeleteIncident(incident.id)} type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
               ))}
               
            </ul>
        </div>
    );
}