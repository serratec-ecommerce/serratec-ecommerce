import Api from '../service/Api';

function obterPorNumero(numero){
    return new Promise((resolve, reject) => {
        return Api.get(`pedido/busca/${numero}`)
        .then(response => resolve(response))
        .catch(error => reject(error))
    });
}
export default obterPorNumero;