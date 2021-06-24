import styled from "styled-components";

export const MeuCardWay = styled.div`

width: 200px;
height: auto;
border: 1px solid #481ed6;
display: flex;
flex-direction:column;
/* margin-top:10px; */
text-align: center;
cursor: pointer;
    h3{
        margin-top: 5px;
        color:#481ed6;
    }

    .descricaoCard {
        padding: 5px;
        margin:auto;

        color: rgb(41,56,69);
        font-size:13px;
        text-align: left;
    }

    .precoCard{
        text-align: right;
      margin-bottom: 2px;
      margin-right: 2px;
        font-weight:bold;
        color: #2cbfc6;

    }

   :hover{
    width: 205px;
    height: auto;
    box-shadow: 5px 5px 3px rgb(228,224,243);
    border: 1px solid #ddd;
   }

   img{
       height:140px;
   }

`;

// roxo: #481ed6
//  agua: #2cbfc6