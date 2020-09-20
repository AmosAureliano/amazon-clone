import React from 'react';
import './style.css';

export default function Product({id, title, image, price, rating}){
    return(
        <div className="product">
            <img src={image} />
            <p>{title}</p>
            <p className="product-price">
                <small>R$</small>
                <strong>{price}</strong>
            </p>
            <div className="rating">
                {
                    Array(rating).fill().map((_) =>(
                        <p>⭐</p>

                    ))
                }
            </div>
            
            <button>Adicionar ao carrinho</button>
        </div>
    );
}