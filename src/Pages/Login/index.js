import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function Login(){
    return(
        <div className="body-login">
            <Link to="/">
                <img src="https://logodownload.org/wp-content/uploads/2014/04/amazon-logo-4.png" id="logo" alt="amazon logo"/>
            </Link>
            
            <div className="container">
                <h1>Fazer Login</h1>
                <label>Email ou número de telefone celular</label>
                <input type="email"/>
                <label>Senha</label>
                <input type="password"/>
                <button>Continuar</button>
                <p>Ao continuar, você concorda com as Condições de Uso da Amazon. Por favor verifique a Notificação de Privacidade, Notificação de Cookies e a Notificação de Anúncios Baseados em Interesse.</p>
            </div>

            <p id="new-client-text">
                Novo na Amazon?
            </p>

            <button id="to-sign-up">Crie sua conta na Amazon</button>
        </div>
    )
}