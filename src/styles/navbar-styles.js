import styled from 'styled-components';

export const NaviBarWay = styled.div`
         
        width:100%;
        height:30px;
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

          :hover{
             color:#2cbfc6;
            /* color: rgb(83,158,224); */
                       
             }


        }    

            /* width:100%;
            height:30px;
            border-top: 2px solid #ddd;
            border-bottom: 2px solid #ddd;
            display: flex;
            justify-content: center;
            align-items: center; */

        ul{
            list-style-type: none;
            margin:0;
            padding:0;
            overflow: hidden;

                li.menu{
                    font-size:18px;
                    color: rgb(41,56,69);
                    padding: 15px 17px;
                    text-decoration: none;
                    text-align:center;
                    float: left;
                    cursor: pointer;
                    
                    
                    :hover{
                       color:#2cbfc6;
                        /* color: rgb(83,158,224); */
                       
                    }
                }

                li.picle{
                    color: #ddd;
                }
              
      }
`;