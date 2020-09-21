import React from 'react';
import './style.css';
export default function Footer(){
    return(
        <div className="footer">
                <div className="column-footer">
                    <h2 className="h2-footer">
                        Conheça-nos
                    </h2>

                    <ul className="lista-footer">
                        <li>Informações corporativas</li>
                        <li>Carreiras</li>
                        <li>Comunicados à imprensa</li>
                        <li>Comunidades</li>

                    </ul>
                </div>
                <div className="column-footer">
                    <h2 className="h2-footer">
                        Ganhe dinheiro conosco
                    </h2>

                    <ul className="lista-footer">
                        <li>Publique seus livros</li>
                        <li>Seja um associado</li>
                        <li>Venda na amazon</li>
                    </ul>
                </div>

                <div className="column-footer">
                    <h2 className="h2-footer">
                        Deixe-nos ajudá-lo
                    </h2>

                    <ul className="lista-footer">
                        <li>Sua conta</li>
                        <li>Frete e prazo de entrega</li>
                        <li>Devoluções e reembolsos</li>
                        <li>Gerencie seu conteúdo e dispositivos</li>
                        <li>Ajuda</li>
                    </ul>
                </div>

                <div className="column-footer">
                    <h2 className="h2-footer">
                        Pagamento
                    </h2>

                    <ul className="lista-footer">
                        <li>Amazon e Covid-19</li>
                        <li>Cartões de crédito, de débito e Boleto</li>
                    </ul>
                </div>
            </div>
    );
}