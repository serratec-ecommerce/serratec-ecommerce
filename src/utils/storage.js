function salvarTokenNaStorage(token) {
    localStorage.setItem('token', token)
}

function obterTokenNaStorage() {
    return localStorage.getItem('token');
}

function removerAutenticacao() {
    localStorage.removeItem("token");
}

function saveId(id) {
    localStorage.setItem('id', id);
}

function getId() {
    return localStorage.getItem('id');
}

function removeId() {
    localStorage.removeItem('id')
}

function savePedido(pedido) {
    localStorage.setItem('idPedido', pedido);
}

function getPedido() {
    return localStorage.getItem('idPedido');
}

function removePedido() {
    localStorage.removeItem('idPedido')
}

export default {
    salvarTokenNaStorage,
    obterTokenNaStorage,
    removerAutenticacao,
    saveId,
    getId,
    removeId,
    savePedido,
    getPedido,
    removePedido
}