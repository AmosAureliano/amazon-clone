import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { Search, ShoppingCartOutlined }  from '@material-ui/icons';
export default function Header(){
    return(
        <nav className="header">
            <Link to="/">
                <img 
                src="https://jordantravers.com/wp-content/uploads/2018/10/Amazon-Logo-1024x373.png" 
                alt="Logo Amazon" 
                className="header-logo"/>
            </Link>
            <div className="search">
                <select className="departaments-options">
                    <option>Todos</option>
                    <option>Todos os departamentos</option>
                    <option>Alexa Skills</option>
                    <option>Alimentos e Bebidas</option>
                    <option>Apps e Jogos</option>
                    <option>Automotivo</option>
                    <option>Bebês</option>
                    <option>Beleza</option>
                    <option>Bolsas, Malas e Mochilas</option>
                    <option>Brinquedos e Jogos</option>
                    <option>Casa</option>
                    <option>CD e Vinil</option>
                    <option>Computadores e Informática</option>
                    <option>Cozinha</option>
                    <option>Dispositivos Amazon</option>
                    <option>DVD e Blu-Ray</option>
                    <option>Eletrodomésticos</option>
                    <option>Eletrônicos</option>
                    <option>Esportes e Aventuras</option>
                    <option>Ferramentas e Materiais de Construção</option>
                    <option>Games</option>
                    <option>Jardim e Piscina</option>
                    <option>Livros</option>
                    <option>Loja Kindle</option>
                    <option>Material para Escritório e Papelaria</option>
                    <option>Moveis e Decoração</option>
                    <option>Pet Shop</option>
                    <option>Prime Video</option>
                    <option>Roupas, Calçados e Jóias</option>
                    <option>Saúde e Cuidados Pessoais</option>


                </select>
                <input className="search-box-input" type="text" />
                <Search className="search-icon"/>
            </div>

            <div className="header-navigation">
                
                <Link className="header-link" to="/login">
                    <div className="header-option">
                        <span className="header-option-1">Olá, Faça Seu Login</span>
                        <span className="header-option-2">Contas e Listas</span>
                    </div>
                </Link>
                <Link className="header-link" to="/login">
                    <div className="header-option">
                        <span className="header-option-1" >Devoluções</span>
                        <span className="header-option-2">e Pedidos</span>
                    </div>
                </Link>
                <Link className="header-link" to="/login">
                    <div className="header-option">
                        <span className="header-option-1" >Experimente</span>
                        <span className="header-option-2">Prime</span>
                    </div>
                </Link>

                <Link to="checkout" className="header-link">
                    <div className="header-car">
                        <div className="header-checkout-cart">
                            <span>0</span>
                            <ShoppingCartOutlined/>
                        </div>
                        <span className="header-option-2">Carrinho</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}