import React, { useState, useEffect } from "react";
import utilStorage from '../../utils/storage'
import apiUsuario from "../../service/ApiUsuario";

import { Botao1, DivGrupo2 } from "../../styles/geral-styles";
import { Link } from "react-router-dom";
import ApiPedido from '../../service/ApiPedido'
import utilsStorage from '../../utils/storage'

const IncluiProduto = (props) => {

  const CriaPedido = (e) => {

    

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
     <DivGrupo2>
        <h1>Carrinho</h1>
          <div className="dados">
            <label htmlFor="text"> Quantidade </label>
            <br />
            <input
              itemID="text"
              type="text"
           
            />
          </div>
          <div className="butons">
            <Botao1 to={'/carrinho'} type="submit">Criar Pedido</Botao1>
              <Link to={"/pagamento"}>
                <Botao1>
                Comprar agora
                </Botao1>
              </Link>
            <Botao1 background={"#fff"}>
              <Link to={"/"}>Voltar</Link>
            </Botao1>
          </div>
        </DivGrupo2>
    </div>
  );
};

export default IncluiProduto;
