import React, { useState } from 'react';
import { Botao } from '../../styles/buttons-styles';
import { DivGrupo } from '../../styles/geral-styles';
import { Link } from "react-router-dom";
import http from '../../service/Api';
import apiViaCep from '../../service/ViaCepApi';
import './index.css';

const Cadastro = () => {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [celular, setCelular] = useState("")
    const [cep, setCep] = useState("")
    const [rua, setRua] = useState("")
    const [numero, setNumero] = useState("")
    const [bairro, setBairro] = useState("")
    const [cidade, setCidade] = useState("")
    const [complemento, setComplemento] = useState("")


    const obterCep = (e) => {
        if (!e.target.value) {
            return
        }
        apiViaCep.get(`${e.target.value}/json`)
            .then(response => {
                if (!response.data.erro) {
                    setRua(response.data.logradouro)
                    setBairro(response.data.bairro)
                    setCidade(response.data.localidade)
                }
            })
            .catch(erro => {
                console.log("Erro")
            })
    }

    const realizarCadastro = (e) => {
        e.preventDefault()
        const usuario = {
            email: email,
            senha: senha,
            celular: celular,
            cep: cep,
            rua: rua,
            numero: numero,
            bairro: bairro,
            cidade: cidade,
            complemento: complemento
        }
        http.post('/cadastro', usuario)
            .then(response => (response.data))

        setEmail('')
        setSenha('')
        setCelular('')
        setCep('')
        setRua('')
        setNumero('')
        setBairro('')
        setCidade('')
        setComplemento('')
    }

    return (
        <div>
            <form onSubmit={realizarCadastro}>
                <DivGrupo>
                    <div className="dados">
                        <label htmlFor="email"> E-mail </label><br />
                        <input itemID="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="dados">
                        <label htmlFor="senha"> Senha </label><br />
                        <input itemID="senha" type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
                        
                        <label htmlFor="celular"> Celular </label><br />
                        <input itemID="celular" type="number" value={celular} onChange={(e) => setCelular(e.target.value)} />
                    </div>
                    <div className="dados">
                        <label htmlFor="cep"> Cep </label><br />
                        <input itemID="cep" type="text" onBlur={obterCep} value={cep} onChange={(e) => setCep(e.target.value)} />
                        
                        <label htmlFor="rua"> Rua </label><br />
                        <input itemID="rua" type="text" value={rua} onChange={(e) => setRua(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="numero"> Numero </label><br />
                        <input itemID="numero" type="text" value={numero} onChange={(e) => setNumero(e.target.value)} />
                    
                        <label htmlFor="bairro"> Bairro </label><br />
                        <input itemID="bairro" type="text" value={bairro} onChange={(e) => setBairro(e.target.value)} />
                
                        <label htmlFor="cidade"> Cidade </label><br />
                        <input itemID="cidade" type="text" value={cidade} onChange={(e) => setCidade(e.target.value)} />
                    </div>
                    <div className="dados">
                    <label htmlFor="complemento"> Complemento </label><br />
                    <input itemID="complemento" type="text" value={complemento} onChange={(e) => setComplemento(e.target.value)} />
                    </div>
                </DivGrupo>
                <div>
                    <Botao>Cadastrar</Botao>
                    <Botao> <Link to={"/login"}> Voltar</Link></Botao>
                </div>
            </form>
        </div>
    );
}

export default Cadastro;