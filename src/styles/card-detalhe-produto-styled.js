import styled from "styled-components";

export const CardeDetalheProdutoWay = styled.div`

margin: auto;
width: 80%;
height: 400px;
border: 1px solid #481ed6;
display: flex;
/* grid-template-columns: 30% 30% 40%; */
/* flex-direction: row; */
flex-wrap: wrap;

.cardLeft{
    display: flex;
    justify-content: center;
    
    img{
      margin: auto;
      width: 100%;
      height: 100%;
       
    }

}

.carMed{
    box-sizing: border-box;
     margin: 10%;
     display:flex;
     flex-direction: column;
     align-items: flex-start;
   

            h3{
                margin-top: 5px;
                color:#481ed6;
            }

            .descricaoCard {
                padding: 5px;
                padding-bottom: 0px;
                /* margin:auto; */
                color: rgb(41,56,69);
                font-size:15px;
                text-align: left;
               
            }
            .precoCard{
                 
                margin-bottom: 2px;
                padding-left:60%;
                font-weight:bold;
                color: #2cbfc6;
                font-size: 20px;

            }
   

}

.cardRigth{
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;

}



`;