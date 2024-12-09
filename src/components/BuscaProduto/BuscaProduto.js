import React from 'react';
import {BuscadorWay} from '../../styles/buscador-styles';
import imagem from '../imagens/lupa.png';
const Buscador = ()=>{
    return(
        <div>
            <BuscadorWay >
                <input id="numero" type="text" placeholder="Pesquisar" />
                <img alt="lupa" src={imagem}></img>
            </BuscadorWay>
        </div>
    );
}
export default Buscador;