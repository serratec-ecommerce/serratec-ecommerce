import styled from "styled-components";

export const DivGrupo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;

  width: 40%;
  margin: 4% auto;
  padding: 15px;
  border: solid 5px #000;

  background-color: #fff;

  .dados {
    flex: 1 1 100%;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    input {
      width: 100%;
      padding: 4px;
      border-radius: 3px;
      border-style: solid;
    }
  }
  .senha,
  .cep {
    flex: 1 1 30%;
  }
  .celular,
  .rua {
    flex: 1 1 60%;
  }
  .numero,
  .bairro,
  .cidade {
    flex: 1 1 30%;
  }
  .butons {
    display: flex;
    flex-direction: column;
  }
`;
