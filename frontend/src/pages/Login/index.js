import React, {useState} from 'react';

import {Link, useHistory} from 'react-router-dom';

import './styles.css';

import { FiLogIn } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

import api from '../../services/api';

export default function Login() {

  const history = useHistory();
  
  const [id, setId] = useState('');

  async function handleLogin(e){
    e.preventDefault();

    try {
      const response = await api.post('/sessions',{ id });      
      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile'); 

    } catch (e) {
      console.log('Erro ao fazer login',e);
    }

  }

  return (
    <div className="login-container">
        <section className="form">
            <img src={logoImg} alt="Be The Heroe" />
            <form onSubmit={handleLogin}>
                <h1>Faça seu login</h1>
                <input placeholder="Sua ID" value={id} onChange={e=>setId(e.target.value)} />
                <button type="submit" className="button">Entrar</button>
                <Link className="back-link" to="/register">
                    <FiLogIn size={16} color="#E02041"/>
                    Não tenho cadastro
                </Link>
            </form>
        </section>
        <img src={heroesImg} alt="Heroes" />
    </div>
  );
}
