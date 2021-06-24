import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cadastro from "./pages/cadastro";
import Carrinho from "./pages/carrinho";
import DetalhesProduto from "./pages/detalhesProduto";
import Home from "./pages/home";
import Login from "./pages/login";
import Pagamento from "./pages/pagamento";
import Pesquisa from "./pages/home";
import Header from "./components/Header";
import Topo from '../src/components/Header/index'

const Routes = () => (
  //Dizer que vai fazer as rotas atras de um browser
  <BrowserRouter>
    <Topo/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/produtos/:id" component={DetalhesProduto} />
      <Route path="/produtos/pesquisa" component={Pesquisa} />
      <Route path="/cadastro" component={Cadastro} />
      <Route path="/carrinho" component={Carrinho} />
    </Switch>
    <Route path="/login" component={Login} />
    <Route path="/pagamento" component={Pagamento} />
  </BrowserRouter>
);

export default Routes;
