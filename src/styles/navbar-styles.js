import styled from 'styled-components';

export const NaviBarWay = styled.div`
         
         background-color: #2cbfc6;
        width:100%;
        height:35px;
        border-top: 2px solid #ddd;
        border-bottom: 2px solid #ddd;
        display: grid;
        grid-template-columns: auto auto auto;

        ul{
          display: flex;
          align-items: center;
          justify-content:center
        }    

        div{
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding-right:30px;
          cursor: pointer;
          color:#481ed6;
          gap:10px;

          :hover{
             color:#2cbfc6;
                       
             }


        }    

          

        ul{
            list-style-type: none;
            margin:0;
            padding:0;
            overflow: hidden;

                li.menu{
                    font-size:18px;
                    color: white;
                    padding: 15px 17px;
                    text-decoration: none;
                    text-align:center;
                    float: left;
                    cursor: pointer;
                    
                    
                    :hover{
                       color:black;
                       
                    }
                }

                li.picle{
                    color: #ddd;
                }
              
      }
`;