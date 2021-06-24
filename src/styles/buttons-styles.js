import styled from "styled-components";

export const Botao = styled.button`
  border-radius: 10px;
  border: none;
  margin: 10px;
  width: 180px;
  padding: 6px;
  text-align: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 450;
  cursor: pointer;
  background-color: ${({ background }) => background || "#481ed6"};
  color: #fff;
  transition: 0.4s;

  &:hover {
    filter: brightness(0.8);
  }
`;

export const BotaoSecundario = styled(Botao)`
  background-color: #fff;
  a {
    text-decoration: none;
    color: #481ed6;
  }
`;
