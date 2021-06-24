import React from 'react';

const MeuCard = (props) => {

   return (
        <div>
            <img src={props.img} alt="" />
            <h2>{props.nome}</h2>
            <p>{props.descricao}</p>
            <p>{props.preco}</p>
        </div>
    )
}

export default MeuCard;
