
import Header from '../../components/Header';
import {ContainerprodutoWay} from '../../styles/container-produto-styled';
import {MeuCardWay} from '../../styles/meu-card-styles';
import ApiProduto from '../../service/ApiProduto';
import React, { useState, useEffect } from 'react';
import MeuCard from '../../components/Card/MeuCard';


// const DetalhesProduto = () => (
//     <ContainerprodutoWay>
//       <MeuCardWay>
//           <h1>Detalhe do Produto</h1>
//         </MeuCardWay>  
//     </ContainerprodutoWay>
// )

// export default DetalhesProduto

const Detalhes = (props) => {

    const [produto, setProduto] = useState({})

    function obterProdutos(IdProduto) {
        ApiProduto.obterProdutoPorId(IdProduto)
            .then((response => {
                setProduto(response.data);
                console.log(response)
            }))
            .catch((error => {
                console.log(error)
            }))
    }
    const { id } = props.match.params;
   

    useEffect(() => {
        obterProdutos(id);
        console.log(id);
    }, "batinha")

    return (
        <ContainerprodutoWay>
            <MeuCard img={produto.url} nome={produto.nome} descricao={produto.descricao} preco={produto.preco}/>
       
        </ContainerprodutoWay>
    );
}

export default Detalhes
