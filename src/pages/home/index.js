import React, { useState, useEffect } from 'react';
import ApiProduto from '../../service/ApiProduto'
import MeuCard from '../../components/Card/MeuCard';


const Home = () => {

    const [produtos, setProdutos] = useState([])

    const obterProdutos = () => {
        ApiProduto.getProduto()
            .then((resposta => {
                setProdutos(resposta.data);
                console.log(resposta);
            }))
            .catch((erro => {
                console.log(erro)
            }));
    }

    useEffect(() => {
        obterProdutos();
    }, "batinha")

    return (
        <div className='container-produtos'>
            <h1>Home</h1>
            {/* <h1>{this.state.mensagem}</h1> */}
            {produtos.map(produto => (
                <MeuCard 
                    img={produto.url}
                    nome={produto.nome}
                    descricao={produto.descricao}
                    preco={produto.preco}
                />
                // <div className='produtos'>
                //     {/* <img src={produto.urlImagem} /> */}
                //     <p>Nome: {produto.nome}</p>
                //     <p>Valor: {produto.preco}</p>
                //     <img src={produto.url} alt="" />
                // </div>
            ))
            }
        </div>
    );
}

export default Home;
