import { Prioridade } from "./prioridade"

export type Tarefa = {
    titulo: string,
    descricao: string,
    concluida: boolean,
    prioridade: Prioridade
}

export function criarTarefa(titulo: string, descricao: string, prioridade: Prioridade): Tarefa {
    const criaTarefa: Tarefa = {
        titulo: titulo,
        descricao: descricao,
        concluida: false,
        prioridade: prioridade
    }

    return criaTarefa

}

export function exibirTarefa(objeto: Tarefa):void {
    let status: string;
    if (objeto.concluida == false) {
        status = "Não concluída"
    } else {
        status = "Concluída"
    }
    const string =
        `O título da Tarefa é: ${objeto.titulo}. 
A prioridade é: ${objeto.prioridade}.
O status é: ${status}`
    return console.log(string)
}


export function concluirTarefa(tarefaAConcluir:Tarefa):Tarefa{
   tarefaAConcluir.concluida = true
   return tarefaAConcluir
}