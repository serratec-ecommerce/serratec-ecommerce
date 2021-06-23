import React,{useState} from 'react';
import{Botao} from '../../styles/buttons-styles';
import { Link } from "react-router-dom";
import http from '../../service/Api';
import apiViaCep from '../../service/ViaCepApi';

const Cadastro = () => {

    const [email,setEmail] = useState("")
    const [senha,setSenha] = useState("")
    const [celular,setCelular] = useState("")
    const [cep,setCep] = useState("")
    const [rua,setRua] = useState("")
    const [numero,setNumero] = useState("")
    const [bairro,setBairro] = useState("")
    const [cidade,setCidade] = useState("")
    const [complemento,setComplemento] = useState("")


    const obterCep = (e) =>{
        if(!e.target.value){
            return
        }
        apiViaCep.get(`${e.target.value}/json`)
        .then(response =>{
            if(!response.data.erro){
                setRua(response.data.logradouro)
                setBairro(response.data.bairro)
                setCidade(response.data.localidade)
            }
        })
        .catch(erro =>{
            console.log("Erro")
        })
    }

    const realizarCadastro=(e) =>{
        e.preventDefault()
        const usuario ={
            email:email,
            senha:senha,
            celular:celular,
            cep:cep,
            rua:rua,
            numero:numero,
            bairro:bairro,
            cidade:cidade,
            complemento:complemento
        }
        http.post('/cadastro',usuario)
        .then(response=>(response.data))

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

    return(
        <div>
        <form onSubmit={realizarCadastro}>
            <div>
                <label htmlFor="email"> E-mail </label>
                <input itemID="email" type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div>
                <label htmlFor="senha"> Senha </label>
                <input itemID="senha" type="password" value={senha} onChange={(e)=>setSenha(e.target.value)} />
            </div>
            <div>
                <label htmlFor="celular"> Celular </label>
                <input itemID="celular" type="number" value={celular} onChange={(e)=>setCelular(e.target.value)} />
            </div>
            <div>
                <label htmlFor="cep"> Cep </label>
                <input itemID="cep" type="text" onBlur={obterCep} value={cep} onChange={(e)=>setCep(e.target.value)} />
            </div>
            <div>
                <label htmlFor="rua"> Rua </label>
                <input itemID="rua" type="text" value={rua} onChange={(e)=>setRua(e.target.value)} />
            </div>
            <div>
                <label htmlFor="numero"> Numero </label>
                <input itemID="numero" type="text" value={numero} onChange={(e)=>setNumero(e.target.value)} />
            </div>
            <div>
                <label htmlFor="bairro"> Bairro </label>
                <input itemID="bairro" type="text" value={bairro} onChange={(e)=>setBairro(e.target.value)} />
            </div>
            <div>
                <label htmlFor="cidade"> Cidade </label>
                <input itemID="cidade" type="text" value={cidade} onChange={(e)=>setCidade(e.target.value)} />
            </div>
            <div>
                <label htmlFor="complemento"> Referência </label>
                <input itemID="complemento" type="text" value={complemento} onChange={(e)=>setComplemento(e.target.value)} />
            </div>
            <div>
                <Botao>Cadastrar</Botao>
                <Botao> <Link to ={"/login"}> Voltar</Link></Botao>
            </div>
        </form>
    </div>
    );
}

export default Cadastro;