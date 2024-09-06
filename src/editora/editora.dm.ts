import { Injectable } from "@nestjs/common";
import { EditoraEntity } from "./editora.entity";

@Injectable()
   export class EditoraArmazenada {
    private editoras: EditoraEntity[] = [];

    adcionarEditora(editora: EditoraEntity){
        this.editoras.push(editora);
    }

    pesquisaID(id:string){
        const possivelQuadrinho = this.editoras.find(
            (editoraSalva) => editoraSalva.id === id
        )
        if(!possivelQuadrinho){
            throw new Error("ID da Editora não encontrado");
        }
        return possivelQuadrinho;
    }

   }
