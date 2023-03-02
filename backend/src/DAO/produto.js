import AplicaçãoModel from "./AplicaçãoModel.js"

export default class Produto extends AplicaçãoModel {
    id; doador; item;

    static configurar() {
        Produto.associar('id', 'ID')
        Produto.associar('doador', 'TITLE')
        Produto.associar('item', 'DESCRIPTION')
    }
}