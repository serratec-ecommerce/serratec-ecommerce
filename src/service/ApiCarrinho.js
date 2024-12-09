import Api from '../service/Api';

function obterPorNumero(numero) {
    return new Promise((resolve, reject) => {
        return Api.get(`pedido/busca/${numero}`)
            .then(response => resolve(response))
            .catch(error => reject(error))
    });
}

const obterTodos = async () => {
    return new Promise((resolve, reject) => {
        return Api.get('/pedido')
            .then(response => resolve(response))
            .catch(error => reject(error))
    });
}

function obterProdutos(numeroDoPedido) {
    return new Promise((resolve, reject) => {
        return Api.get(`pedido/detalhes/${numeroDoPedido}/produtos`)
            .then(response => resolve(response))
            .catch(error => reject(error))
    });
}

export default {
    obterPorNumero,
    obterTodos,
    obterProdutos
};