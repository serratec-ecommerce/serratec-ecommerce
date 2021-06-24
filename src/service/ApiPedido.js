import api from "./Api";

const ApiPedido = () =>{
    function criar(pedido){
        return new Promise((resolve, reject) => {
            return api.post('/pedido', {username, senha})
            .then(response => resolve(response))
            .catch(error => reject(error))
        });
    }

    function atulizar(id, pedido){
        return new Promise((resolve, reject) => {
            return api.put('/pedido', {username, senha})
            .then(response => resolve(response))
            .catch(error => reject(error))
        });
    }


}

export default {
    criar
}

/*
{
  "idCliente": 0,
  "produtosDoPedido": [
    {
      "idPedido": 0,
      "idProduto": 0,
      "quantidade": 0
    }
  ]
}



*/