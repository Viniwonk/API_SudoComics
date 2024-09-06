import { listaQuadrinhoDTO } from "src/quadrinho/dto/listaQuadrinho.dto";

export class ListaEditoraDTO{
    readonly id: string;
    readonly nome: string;
    readonly logo: string;
    readonly quadrinho: listaQuadrinhoDTO[];
}
