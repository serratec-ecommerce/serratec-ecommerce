class Produto{
    constructor(obj){
        obj = obj || {}
        this.nome = obj.nome;
        this.descricao = obj.descricao;
        this.preco = obj.preco;
        this.categoria = obj.idCategoria;
        this.imagem = obj.url;
    }
}

export default Produto;