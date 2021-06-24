import React from 'react';
import {MeuCardWay} from '../../styles/meu-card-styles';
import { Link } from 'react-router-dom';
const MeuCard = (props) => {
    // let str = props.descricao;
    // let desc = str.slice(1, 13)

   return (
        
        // <Link to={'/produtos/+{id}'}> 
        <MeuCardWay>
            
            <img src={props.img} alt="" />
            <h3>{props.nome}</h3>
            <p className="descricaoCard">{props.descricao}</p>
            <p className="precoCard">R$ {props.preco}</p>
        </MeuCardWay>
        // </Link>
    )
}

function chamaDetalhe(){};

export default MeuCard;
