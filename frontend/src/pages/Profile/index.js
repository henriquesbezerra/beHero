import React, {useEffect, useState} from 'react';
import { Link, useHistory } from 'react-router-dom';

import {FiPower, FiTrash2} from 'react-icons/fi';

import './styles.css';
import logoImg from '../../assets/logo.svg';

import api  from '../../services/api';

export default function Profile() {
    const history = useHistory();
  const ongName = localStorage.getItem('ongName');
  const ongId = localStorage.getItem('ongId');

  const [incidents, setIncidents] = useState([]);

  useEffect(()=>{
    api.get('/profile',{
        headers:{
            authorization: ongId
        }
    }).then(response =>{
        setIncidents(response.data);
    });
  },[ongId]);

  async function handleDeleteIncident(id){

    try {
        await api.delete(`/incidents/${id}`,{
            headers:{
                authorization: ongId
            }
        });

        setIncidents(incidents.filter(item=>item.id !== id));
    } catch (e) {
        console.log('Erro ao deletar incident',e);
        
    }

  }

  function handleLogout(){
      localStorage.clear();

      history.push('/');
      
  }

  return (
    <div className="profile-container">
        <header>
            <img src={logoImg} alt="Be The Hero" />
            <span>Bem vinda, {ongName}</span>

            <Link to='/incidents/new' className="button">
                Cadastrar novo caso
            </Link>

            <button type="button" onClick={()=>handleLogout()}>
                <FiPower size={18} color="#E02041"/>
            </button>
        </header>

        <h1>Casos cadastrados</h1>

        <ul>
            {incidents.map((item,index)=>(
            <li key={item.id}>
                <strong>CASO:</strong>
                <p>{item.title}</p>

                <strong>Descrição:</strong>
                <p>{item.description}</p>

                <strong>Valor:</strong>
                <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(item.value)}</p>

                <button type="button" onClick={()=>handleDeleteIncident(item.id)}>
                    <FiTrash2 size={20} color="#A8A8B3" />
                </button>
            </li>))}
            
        </ul>
    </div>
  );
}
