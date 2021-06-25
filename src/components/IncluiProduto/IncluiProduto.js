import React, { useState, useEffect } from "react";
import utilStorage from '../../utils/storage'
import apiUsuario from "../../service/ApiUsuario";
import { Botao, BotaoSecundario } from "../../styles/buttons-styles";
import { DivGrupo } from "../../styles/geral-styles";
import { Link } from "react-router-dom";

const IncluiProduto = () => {
 
  return (
    <div>
     
     <DivGrupo>
        <h1>Carrinho</h1>
          <div className="dados">
            <label htmlFor="email"> Quantidade </label>
            <br />
            <input
              itemID="email"
              type="text"
            //   placeholder="exemplo@exemplo.com"
            //   value={email}
            //   onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="butons">
            <Botao type="submit">Cadastrar</Botao>
            <Botao background={"#fff"}>
              <Link to={"/"}> Voltar</Link>
            </Botao>
          </div>
        </DivGrupo>
      
     
    </div>
  );
};

export default IncluiProduto;
