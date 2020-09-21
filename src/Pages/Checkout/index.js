import React from 'react';
import './style.css';
import Header from '../../Components/Header/Header'

export default function Checkout(){
    return(
        <div>
            <Header/>
            <h4>Seu carrinho de compras está vazio</h4>
        </div>
    );
}