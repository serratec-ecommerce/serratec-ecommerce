import React, { useState, useEffect } from "react";
import utilStorage from '../../utils/storage'
import apiUsuario from "../../service/ApiUsuario";
import { Botao, BotaoSecundario } from "../../styles/buttons-styles";
import { DivGrupo } from "../../styles/geral-styles";
import { Link } from "react-router-dom";
import ApiPedido from '../../service/ApiPedido'
import utilsStorage from '../../utils/storage'

const IncluiProduto = (props) => {

  const CriaPedido = (e) => {

    // {
    //   "idCliente": 0,
    //   "produtosDoPedido": [
    //     {
    //       "idPedido": 0,
    //       "idProduto": 0,
    //       "quantidade": 0
    //     }
    //   ]
    // }

    const id = props.id
    const pedido = {
      idCliente: utilStorage.getId(),
      produtosDoPedido: {
        idProduto: id,
        quantidade: e.target.getAttribute('itemID').value
      }
    }
    ApiPedido.criar(pedido)

  }
 
  return (
    <div>
     <DivGrupo>
        <h1>Carrinho</h1>
          <div className="dados">
            <label htmlFor="text"> Quantidade </label>
            <br />
            <input
              itemID="text"
              type="text"
            //   placeholder="exemplo@exemplo.com"
            //   value={email}
            //   onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="butons">
            <Botao to={'/carrinho'} type="submit">Criar Pedido</Botao>
              <Link to={"/pagamento"}>
                <Botao>
                Comprar agora
                </Botao>
              </Link>
            <Botao background={"#fff"}>
              <Link to={"/"}>Voltar</Link>
            </Botao>
          </div>
        </DivGrupo>
    </div>
  );
};

export default IncluiProduto;
