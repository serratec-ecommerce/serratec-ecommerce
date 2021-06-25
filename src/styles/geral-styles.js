import styled from "styled-components";
export const DivGrupo2 = styled.div`

 display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  width: 90%;
  max-width: 400px;
  margin: 4% auto;
  padding: 15px;
  border: solid 2px #481ed6;
  box-shadow: 0 0 10px 0 rgb(50 50 50 / 82%)`;

  
export const DivGrupo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 760px;
  margin: 3% auto;
  padding: 6%;
  height:930px;
  border: solid 2px #481ed6;
  box-shadow: 0 0 10px 0 rgb(50 50 50 / 82%);
  
  

  h1 {
    color: #481ed6;
    margin-bottom: 5px;
  }

  label {
    font-size: 14px;
  }

  .dados {
    flex: 1 1 100%;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    padding: 10px;
    

    input {
      width: 100%;
      padding: 7px;
      outline: none;
      overflow: hidden;
      border-radius: 6px;
      color:gray;
  }

      input[type="date"] {
      color:gray
        
      }
    

      &:focus {
        border-color: #481ed6;
        box-shadow: 0 0 10px 0 rgb(50 50 50 / 82%);
      }
    }
  }
  .senha,
  .cep {
    flex: 1 1 40%;
  }

  .cpf {
    flex: 1 1 40%;
  }
  .username,
  .nascimento {
    flex: 1 1 40%;
  }
  .telefone,
  .rua {
    flex: 1 1 40%;
  }
  .numero,
  .bairro,
  .cidade {
    flex: 1 1 40%;
  }
  .butons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      text-align: center;
      padding-top: 20px;
    }

    a {
      text-decoration: none;
      color: #481ed6;
    }
  
  `;

  export const DivPag = styled(DivGrupo)`
    display:flex;
    flex-direction:column;
    align-items: flex-start;
    width: 90%;
    max-width: 600px;
    

    h2{
      padding-left:200px;
      color: #481ed6;
    }


   
    .radios{
      
    }
    
  `;

  export const Botao1 = styled.button `
  border-radius: 10px;
  border: none;
  margin: 10px;
  width: 180px;
  padding: 6px;
  margin-left:50px;
  text-align: center;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 18px;
  font-weight: 450;
  cursor: pointer;
  background-color: ${({ background }) => background || "#481ed6"};
  color: #fff;
  transition: 0.4s;

`;
