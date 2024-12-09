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
  const [telefone, setTelefone] = useState("");
  const [cpf,setCpf] = useState("");
  const [username,setUsername] = useState("");
  const [nascimento,setNascimento] = useState("");
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

    /*
    "email": "lucascs201826@gmail.com",
    "username": "luke2",
    "senha": "senhaluke1",
    "nome": "Luke Silva",
    "cpf": "19767965046",
    "telefone": "21912341231",
    "dataNascimento": "1997-06-01",
    "enderecosDoCliente": [
        {
            "cep": "25965690",
            "numero": 151,
            "complemento": "algum complemento aqui"
        }
    ]
    */
    
    const usuario = {
      email: email,
      senha: senha,
      telefone: telefone,
      cpf:cpf,
      username:username,
      dataNascimento:nascimento,
      enderecosDoCliente:[{
          cep: cep,
          numero:numero,
          complemento: complemento
        }
      ]
      
      // cep: cep,
      // rua: rua,
      // numero: numero,
      // bairro: bairro,
      // cidade: cidade,
      // complemento: complemento,
    };
    http.post("/create", usuario)
    .then((response) => {
      console.log(response)
      setEmail("");
      setSenha("");
      setTelefone("");
      setCpf("");
      setUsername("");
      setNascimento("");
      setCep("");
      setRua("");
      setNumero("");
      setBairro("");
      setCidade("");
      setComplemento("");
    })
    .catch(error => {
      console.log(error)
    })
    console.log(usuario.enderecosDoCliente)
  };

  return (
    <div>
      <form onSubmit={realizarCadastro}>
        <DivGrupo>
        <h1>Cadastro</h1>
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

          <div className="dados telefone">
            <label htmlFor="telefone"> Telefone* </label>
            <br />
            <input
              name="telefone"
              itemID="telefone"
              type="text"
              placeholder="(DDD) 999-999999"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
          </div>
          <div className="dados cpf">
            <label htmlFor="cpf"> CPF* </label>
            <br />
            <input
              name="cpf"
              itemID="cpf"
              type="text"
              placeholder="00000000000"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
          </div>
          <div className="dados username">
            <label htmlFor="username"> Username* </label>
            <br />
            <input
              name="username"
              itemID="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="dados nascimento">
            <label htmlFor="nascimento"> Nascimento* </label>
            <br />
            <input
              name="nascimento"
              itemID="nascimento"
              type="date"
              value={nascimento}
              onChange={(e) => setNascimento(e.target.value)}
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
            <Botao background={"#fff"}>
              <Link to={"/login"}> Voltar</Link>
            </Botao>
          </div>
        </DivGrupo>
      </form>
    </div>
  );
};

export default Cadastro;
