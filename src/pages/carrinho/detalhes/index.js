import React, { useState, useEffect } from 'react';
import MeuCard from '../../../components/Card/MeuCard';
import ApiCarrinho from '../../../service/ApiCarrinho';
import utilStorage from '../../../utils/storage'
const Detalhes = (props) => {

    const [produtos, setProdutos] = useState([])

    function obterProdutos(numeroDoPedido) {
        ApiCarrinho.obterProdutos(numeroDoPedido)
            .then((response => {
                setProdutos(response.data);
                console.log(response)
            }))
            .catch((error => {
                console.log(error)
            }))
    }
    const { numeroDoPedido } = props.match.params;

    useEffect(() => {
        let token = utilStorage.obterTokenNaStorage();

        if (!token) {
          window.open("/login", "_self");
        }

        obterProdutos(numeroDoPedido);
    }, "batinha")

    return (
        <div className='container-produtos'>
            <div>
                <h1>Pedido: {numeroDoPedido}</h1>
                {produtos.map(produto => (
                    <MeuCard
                        img={produto.url}
                        nome={produto.nome}
                        preco={`R$ ${produto.preco}`}
                    />
                ))
                }
            </div>
        </div>
    );
}

export default Detalhes