import styled from 'styled-components';

export const Botao = styled.button `
    border-radius: 10px;
    border: none;
    margin:10px;
    padding:8px 15px;
    font-size: 18px;
    font-weight: 450;
    cursor: pointer;
    background-color: #235DF3;
    color:#fff;
    transition: 0.4s;

    &:hover{
        background-color: rgb(16,52,145); 
       
    }

`;

export const BotaoSecundario = styled.button`
    border-radius: 8px;
    border: none;
    margin:10px;
    padding:15px 45px;
    font-weight: 450;
    font-size: 16px;
    cursor: pointer;
    background-color: #E7F3FF;
    color: #1543B7;
`;

export const Button =styled.button`
    font-size: 16px;
    margin:10px;
    padding:5px 10px;
    border:2px solid crimson;
    border-radius:3px;
    color:crimson;
    cursor: pointer;

    color: ${props => props.primary ? "#fff" : "crimson"};
    background-color:${props => props.primary ? "crimson" : "#fff"};

    // ou só :hover sem o &
    &:hover{
        color: ${props => props.primary ? "#fff" : "#FF2E58"}; 
        background-color:${props => props.primary ? "#FF2E58" : "#fff"};
    }
`;