import React from 'react';
import './styles.css';
import { FiArrowLeft } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className="register-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="Be The Heroe" />
                <h1>Cadastro</h1>
                <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os cados da sua ONG.</p>

                <Link className="back-link" to="/">
                    <FiArrowLeft size={16} color="#E02041"/>
                    Já tenho cadastro
                </Link>
            </section>

            <form>
                <input placeholder="Nome da ONG" />
                <input type="email" placeholder="E-mail" />
                <input placeholder="WhatsApp" />

                <div className="input-group">
                    <input placeholder="Cidade"/>
                    <input placeholder="UF" style={{width:80}}/>
                </div>

                <button className="button" type="submit">
                    Cadastrar
                </button>

            </form>
        </div>
    </div>
  );
}
