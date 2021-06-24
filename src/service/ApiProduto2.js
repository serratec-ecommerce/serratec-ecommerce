/**
    "nome": "string",
    "descricao": "string",
    "preco": 0,
    "idCategoria": 0,
    "url": "string",
 */

import api from './Api';

function getProduto(){
    return new Promise((resolve, reject) => {
        return api.get('/produto')
        .then(response => resolve(response))
        .catch(error => reject(error))
    });
}


function obterProdutoPorId(id){
    return new Promise((resolve, reject) => {
        return api.get(`/produto/${id}`)
        .then(response => resolve(response))
        .catch(error => reject(error))
    });
}


export default {
    getProduto,
    obterProdutoPorId

}