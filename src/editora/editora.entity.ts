import { listaQuadrinhoDTO } from "src/quadrinho/dto/listaQuadrinho.dto";

export class EditoraEntity{
    id: string;
    nome: string;
    logo: string;
    quadrinho: listaQuadrinhoDTO[];

    constructor(id:string, nome:string, logo:string,quadrinho: listaQuadrinhoDTO[]) {
        this.id = id;
        this.nome = nome;
        this.logo = logo;
        this.quadrinho = quadrinho;
    }
}