import React from 'react';
import {LogoCarrinhoWay} from'../../styles/logo-carrinho-styles';
import { Link, useLocation } from "react-router-dom";
import imgCarrinho from "./carrinho.png"
const LogoCarrinho = ()=>{
    return(
        <LogoCarrinhoWay>
            <span><Link to={'/carrinho'}>Carrinho</Link></span>
            
            <img alt="logo carrinho" src={imgCarrinho}/>
            
        </LogoCarrinhoWay>
    );
}
export default LogoCarrinho

