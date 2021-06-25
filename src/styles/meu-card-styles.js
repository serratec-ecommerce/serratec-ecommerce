import styled from "styled-components";

export const MeuCardWay = styled.div`

padding: 35px;
  width: 350px;
  height: 540px;
  box-shadow: 0 0 3px 0 gray;
  display: flex;
  flex-direction: column;
  text-align: center;
  cursor: pointer;
  background-color: white;
  margin: 10px;
  border-radius: 20px;
  transition: transform 0.3s, box-shadow 0.3s;
  
  
  h3 {
    margin-top: 5px;
    color: #481ed6;
  }

  .descricaoCard {
    padding: 0;
    margin: auto;

    color: rgb(41, 56, 69);
    font-size: 13px;
    text-align: left;
  }

  .precoCard {
    text-align: right;
    margin-bottom: 2px;
    margin-right: 2px;
    font-weight: bold;
    color: #2cbfc6;
  }

  :hover {
    box-shadow: 0 0 8px 0 #481ed6;
    transform: scale(1.05);
  }

  img {
    padding: 0;
    margin: 0;
    height: auto;
  }
  a {
      text-decoration: none;
  }
`;

// roxo: #481ed6
//  agua: #2cbfc6
