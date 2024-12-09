import React from 'react';
import {Header} from '../../styles/header-styles';
import Logo from '../Logo/Logo';
import Buscador from '../BuscaProduto/BuscaProduto'
import LogoCarrinho from '../Logo/LogoCarrinho';
import NaviBarTopo from '../../components/NaviBar/NaviBar';

const Topo = () => (
    <div>
        <Header>
                  <Logo/>
                  <Buscador/>
                  <LogoCarrinho/>    
        </Header>
        <NaviBarTopo/>
           
       
            
    </div>
)

export default Topo;