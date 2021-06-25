import React from 'react';
import {MeuCardWay} from '../../styles/meu-card-styles';
import { Link } from 'react-router-dom';
const MeuCard = (props) => {
     let str = props.descricao;
     let nom = props.nome;

   return (
        
        // <Link to={'/produtos/+{id}'}> 
        <MeuCardWay>
            
            <img src={props.img} alt="" />
            <h3>{nom.slice(0,12)}</h3>
            <p className="descricaoCard">{str.slice(0,50)}...</p>
            <p className="precoCard">R$ {props.preco}</p>
            <p>{props.categpria}</p>
            
        </MeuCardWay>
        // </Link>
    )
}

function chamaDetalhe(){};

export default MeuCard;
