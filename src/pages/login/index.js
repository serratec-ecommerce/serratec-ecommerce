import React, { useState } from 'react';
import http from '../../service/Api';
import{Botao, BotaoSecundario} from '../../styles/buttons-styles';
import { Link } from "react-router-dom";

const Login = () => {

    const [username, setUsername] = useState('')
    const [senha, setSenha] = useState('')

    const handleUsername = (e) => {
        setUsername(e.target.value);
    }
    const handleSenha = (e) => {
        setSenha(e.target.value);
    }

    const realizarLogin = (e) => {
        e.preventDefault()
        const usuario = {
            username: username,
            senha: senha
        }
        http.post('/login', usuario)
            .then(response => {
                localStorage.setItem('token', response.data.access_token)
                console.log(localStorage.getItem('token'))
            })
            .catch(erro => {
                console.log('Algo deu errado')
                console.log(erro);
            })

            setUsername('')
            setSenha('')

    }

    return (
        <div>
            <form onSubmit={realizarLogin}>
                <div>
                    <label htmlFor="username"> Digite seu username </label>
                    <input itemID="username" type="text" value={username} onChange={handleUsername} />
                </div>
                <div>
                    <label htmlFor="senha"> Digite sua senha </label>
                    <input itemID="senha" type="password" value={senha} onChange={handleSenha} />
                </div>
                <div>
                    <Botao> Continuar </Botao>
                    <p> Ao continuar você concorda com as Condições de Uso Da Serratec-Commerce</p>
                </div>
                <div>
                    <Link to ={"/cadastro"}> Esqueci minha senha</Link>
                    <BotaoSecundario> <Link to ={"/cadastro"}> Crie sua conta grátis</Link></BotaoSecundario>
                </div>

            </form>
        </div>
    );
}

export default Login;