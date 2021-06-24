
import api from './Api';

function getProduto(){
    return new Promise((resolve, reject) => {
        return api.get('/produto')
        .then(response => resolve(response))
        .catch(error => reject(error))
    });
}

function obterPorId(id){
    return new Promise((resolve, reject) => {
        return api.get(`/produto/${id}`)
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
    obterPorId,
    obterProdutoPorId
}