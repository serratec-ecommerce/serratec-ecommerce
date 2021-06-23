import React, { useState } from 'react';
import http from '../../service/Api';
import { Botao,BotaoSecundario } from "../../styles/buttons-styles";
import { DivGrupo} from "../../styles/geral-styles";
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
            <DivGrupo>
                <h1> Cadastro</h1>
                <div className="dados">
                    <label htmlFor="username"> Username* </label><br/>
                    <input itemID="username" type="text" placeholder="Username" 
                    value={username} onChange={handleUsername}/>
                </div>
                <div className="dados senha">
                    <label htmlFor="senha"> Senha* </label><br/>
                    <input itemID="senha" type="password" placeholder="Senha" 
                    value={senha} onChange={handleSenha} />
                </div>
                <div className="butons">
                    <Botao> Continuar </Botao>
                    <p> Ao continuar você concorda com as Condições de Uso Do Serra-ECommerce</p>
                </div>
                <div className="butons">
                    <Link to ={"/cadastro"}> Esqueci minha senha</Link>
                    <BotaoSecundario> <Link to ={"/cadastro"}> Crie sua conta grátis
                    </Link>
                    </BotaoSecundario>
                </div>
            </DivGrupo>
            </form>
        </div>
    );
}

export default Login;