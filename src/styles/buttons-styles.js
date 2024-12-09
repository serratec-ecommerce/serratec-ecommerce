import styled from "styled-components";

export const Botao = styled.button`
  border-radius: 10px;
  border: none;
  margin: 12px;
  width: 500px;
  padding: 9px;
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
