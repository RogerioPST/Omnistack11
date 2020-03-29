import React, {useState} from 'react';

import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.svg';


export default function Register(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    //sempre q usar o await, temos q usar o async
    //eh usado qdo queremos esperar a resposta assincrona p prosseguir.
    async function handleRegister(e)    {
        //por padraao toda pagina recarrega. por isso o preventDefault.
        e.preventDefault();

        const data = {
            name, email, whatsapp, city, uf,
        };

        console.log({name, email, whatsapp, city, uf});

        try{        
            const response = await api.post('ongs', data);
            alert(`Seu id de acesso: ${response.data.id}`);
            //esse history serve p redicionar atraves de uma funcao javascript, 
            //qdo n podemos usar o componente Link do react
            //vai redirecionar p a rota './'
            history.push('/');
        }catch(err){
            alert('Erro. Tente novamente.');
        }
    }
/*
    //a tag estyle do react e c ela se pode passar um obj do javascript
                    //a primeira chaves indica codigo javascript dentro do html e a 
                    //segunda chaves eh um obj e dentro pode se usar as 
                    //propriedades do css
                    <input placeholder="UF" style={{ width: 80 }} 
                    */
    return(        
        <div className="register-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="Be the hero" />

                <h1>                        Cadastro                    </h1>
                <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG</p>

                <Link className="back-link" to="/">
                    <FiArrowLeft size={16} color="#E02041" />
                    Voltar
                </Link>

            </section>
            <form onSubmit={handleRegister}> 
                <input placeholder="Nome da ONG" 
                value={name} onChange={e => setName(e.target.value)} 
                />
                <input type="email" placeholder="Email" 
                value={email} onChange={e => setEmail(e.target.value)}
                />
                <input placeholder="Whatsapp" 
                value={whatsapp} onChange={e => setWhatsapp(e.target.value)}
                />
                <div className="input-group">
                    <input placeholder="Cidade" 
                    value={city} onChange={e => setCity(e.target.value)}
                    />
                    
                    <input placeholder="UF" style={{ width: 80 }} 
                    value={uf} onChange={e => setUf(e.target.value)}
                    />
                </div>

                <button className="button" type="submit">
                Cadastrar
                </button>

            </form>
        </div>
    </div>
    );
}