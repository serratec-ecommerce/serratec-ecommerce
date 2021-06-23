import React, { useState } from "react";
import { Botao,BotaoSecundario } from "../../styles/buttons-styles";
import { DivGrupo } from "../../styles/geral-styles";
import { Link } from "react-router-dom";
import http from "../../service/Api";
import apiViaCep from "../../service/ViaCepApi";
import '../../index.css';

const Cadastro = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [celular, setCelular] = useState("");
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [complemento, setComplemento] = useState("");

  const obterCep = (e) => {
    if (!e.target.value) {
      return;
    }
    apiViaCep
      .get(`${e.target.value}/json`)
      .then((response) => {
        if (!response.data.erro) {
          setRua(response.data.logradouro);
          setBairro(response.data.bairro);
          setCidade(response.data.localidade);
        }
      })
      .catch((erro) => {
        console.log("Erro");
      });
  };

  const realizarCadastro = (event) => {
    event.preventDefault();
    console.log(event.target.celular.value);

    const usuario = {
      email: email,
      senha: senha,
      celular: celular,
      cep: cep,
      rua: rua,
      numero: numero,
      bairro: bairro,
      cidade: cidade,
      complemento: complemento,
    };
    http.post("/cadastro", usuario).then((response) => response.data);

    setEmail("");
    setSenha("");
    setCelular("");
    setCep("");
    setRua("");
    setNumero("");
    setBairro("");
    setCidade("");
    setComplemento("");
  };

  return (
    <div>
      <form onSubmit={realizarCadastro}>
        <DivGrupo>
        <h1>Login</h1>
          <div className="dados">
            <label htmlFor="email"> E-mail* </label>
            <br />
            <input
              itemID="email"
              type="text"
              placeholder="exemplo@exemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="dados senha">
            <label htmlFor="senha"> Senha* </label>
            <br />
            <input
              itemID="senha"
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>

          <div className="dados celular">
            <label htmlFor="celular"> Celular* </label>
            <br />
            <input
              name="celular"
              itemID="celular"
              type="text"
              placeholder="(DDD) 999-999999"
              value={celular}
              onChange={(e) => setCelular(e.target.value)}
            />
          </div>

          <div className="dados cep">
            <label htmlFor="cep"> Cep* </label>
            <br />
            <input
              itemID="cep"
              type="text"
              placeholder="00000-000"
              onBlur={obterCep}
              value={cep}
              onChange={(e) => setCep(e.target.value)}
            />
          </div>

          <div className="dados rua">
            <label htmlFor="rua"> Rua </label>
            <br />
            <input
              itemID="rua"
              type="text"
              value={rua}
              onChange={(e) => setRua(e.target.value)}
            />
          </div>
          <div className="dados numero">
            <label htmlFor="numero"> Numero* </label>
            <br />
            <input
              itemID="numero"
              type="text"
              placeholder="Numero"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
            />
          </div>

          <div className="dados bairro">
            <label htmlFor="bairro"> Bairro </label>
            <br />
            <input
              itemID="bairro"
              type="text"
              value={bairro}
              onChange={(e) => setBairro(e.target.value)}
            />
          </div>

          <div className="dados cidade">
            <label htmlFor="cidade"> Cidade </label>
            <br />
            <input
              itemID="cidade"
              type="text"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
            />
          </div>
          <div className="dados">
            <label htmlFor="complemento"> Complemento </label>
            <br />
            <input
              itemID="complemento"
              type="text"
              placeholder="Complemento"
              value={complemento}
              onChange={(e) => setComplemento(e.target.value)}
            />
          </div>
          <div className="butons">
            <Botao type="submit">Cadastrar</Botao>
            <BotaoSecundario >
              {" "}
              <Link to={"/login"}> Voltar</Link>
            </BotaoSecundario>
          </div>
        </DivGrupo>
      </form>
    </div>
  );
};

export default Cadastro;
