import React from 'react';
import {LogoCarrinhoWay} from'../../styles/logo-carrinho-styles';
import { Link, useLocation } from "react-router-dom";
const LogoCarrinho = ()=>{
    return(
        <LogoCarrinhoWay>
            <span><Link to={'/carrinho'}>Carrinho</Link></span>
            
            <img alt="logo carrinho" src="https://media.istockphoto.com/vectors/shopping-cart-icon-shopping-cart-illustration-for-web-mobile-apps-vector-id1225957022?k=6&m=1225957022&s=170667a&w=0&h=02qD1vXuFcAGTlRgnDGGToARBcxbR7NOxkxJ1tFov34="/>
            
        </LogoCarrinhoWay>
    );
}
export default LogoCarrinho

