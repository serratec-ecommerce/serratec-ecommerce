import React,{useState,useEffect} from 'react';
//import ApiCarrinho from '../../service/ApiCarrinho';
import ApiUsuario from '../../service/ApiUsuario';
//import utilSotorage from '../../utils/storage'
import MeuCard from '../../components/Card/MeuCard';
import ApiProduto from '../../service/ApiProduto';


const Carrinho = () => {
    
    const [pedidos, setPedidos] = useState([]);
    const [produtos,setProdutos] = useState([])

    const obterPedidos =() =>{
        ApiUsuario.obterPedido()
        .then(response =>{
            let produtos= 
            setPedidos(response.data)
            .map(produto => obterProdutos(produto.produtosDoPedido.idDoProduto));
            setProdutos(produtos)

            console.log(produtos)
            
        })
        .catch(erro =>{
            console.log(erro);
        })
    }

    const obterProdutos =(id) =>{
        ApiProduto.obterPorId(id)
        .then(response =>{
            setProdutos(response.data)
        })
    }

    useEffect(() => {
        obterPedidos();
    },[])

    return(
        <div className='container-produtos'>
        <h1>Carrinho</h1>
        {pedidos.map(pedidos=> (
            <MeuCard 
                valorTotal={pedidos.valorTotal}
                produtosDoPedido={produtos.nome}
                descricao={produtos.descricao}
                preco={produtos.preco}
            />
        ))
        }
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