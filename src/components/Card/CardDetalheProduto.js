import React from 'react';
import {CardeDetalheProdutoWay} from '../../styles/card-detalhe-produto-styled';
import IncluiProduto from '../../components/IncluiProduto/IncluiProduto'

const CardeDetalheProduto = (props)=>{
    return(
        <CardeDetalheProdutoWay>
             <div className='cardLeft'>
                 <img src={props.img} alt="" />
             </div> 

             <div className='carMed'>
                
                  <h3>{props.nome}</h3>
                  <p className="descricaoCard">{props.descricao}</p>
                  <p className="precoCard">R$ {props.preco}</p>
                 
             </div> 

             <div className='cardRigth'>
                <IncluiProduto/>
            </div> 

           
            {/* <h3>{props.nome}</h3>
            <p className="descricaoCard">{props.descricao}</p>
            <p className="precoCard">R$ {props.preco}</p> */}

        </CardeDetalheProdutoWay>

    )
}

export default CardeDetalheProduto