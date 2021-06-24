import React, { useState, useEffect } from 'react';
import ApiCarrinho from '../../service/ApiCarrinho';
import { Link } from 'react-router-dom';
import utilStorage from '../../utils/storage'

const Carrinho = () => {

    const [pedidos, setPedidos] = useState([]);
    // const [produtos,setProdutos] = useState([]);

    const obterPedidos = async () => {
        const resposta = await ApiCarrinho.obterTodos();
        setPedidos(resposta.data);
        console.log(pedidos);
    }

    useEffect(() => {
        let token = utilStorage.obterTokenNaStorage();

        if (!token) {
          window.open("/login", "_self");
        }
        obterPedidos()
    }, [])

    return (

        <div className='container-produtos'>
            <h1>Carrinho</h1>
            {pedidos.map(pedido => (
                <Link to={'/carrinho/pedido/'+ pedido.numeroPedido} key={pedido.numeroPedido}>
                    <div>
                        <h1>{pedido.numeroPedido}</h1>
                        <h1>R${pedido.valorTotal}</h1>
                    </div>
                </Link>
            ))}
        </div>
    );

    // {
    //     "id": 0,
    //     "numeroPedido": "string",
    //     "valorTotal": 0,
    //     "dataQuePedidoFoiFeito": "2021-06-24",
    //     "dataEntrega": "2021-06-24",
    //     "status": "string",
    //     "produtosDoPedido": [
    //       {
    //         "id": 0,
    //         "idPedido": 0,
    //         "idProduto": 0,
    //         "quantidadeProdutos": 0,
    //         "precoDoProduto": 0
    //       }
    //     ],
    //     "idDoClienteQueFezPedido": 0
    //   }


    //     <div className='container-produtos'>
    //     <h1>Carrinho</h1>
    //     {produtos.map(produtos => (
    //         <MeuCard 
    //             img={produtos.url}
    //             nome={produtos.nome}
    //             descricao={produtos.descricao}
    //             preco={produtos.preco}
    //         />
    //     ))
    //     }
    // </div>

}
export default Carrinho;