import React from 'react';
import {LogoWay} from '../../styles/logo-principal-styles'
import { Link, useLocation } from "react-router-dom";
// import React from 'react'
import imgagemEscolhida from '../imagens/logo-retrorama.svg';

// export default () => <img src={imgagemEscolhida}/>


const Logo = ()=>{
    return (
        <LogoWay> 
          <Link to={'/'}><img src={imgagemEscolhida}/> </Link>
        </LogoWay>
       
       
    );
}
export default Logo;