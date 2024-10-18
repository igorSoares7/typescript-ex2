"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.criarTarefa = criarTarefa;
exports.exibirTarefa = exibirTarefa;
exports.concluirTarefa = concluirTarefa;
function criarTarefa(titulo, descricao, prioridade) {
    const criaTarefa = {
        titulo: titulo,
        descricao: descricao,
        concluida: false,
        prioridade: prioridade
    };
    return criaTarefa;
}
function exibirTarefa(objeto) {
    let status;
    if (objeto.concluida == false) {
        status = "Não concluída";
    }
    else {
        status = "Concluída";
    }
    const string = `O título da Tarefa é: ${objeto.titulo}. 
A prioridade é: ${objeto.prioridade}.
O status é: ${status}`;
    return console.log(string);
}
function concluirTarefa(tarefaAConcluir) {
    tarefaAConcluir.concluida = true;
    return tarefaAConcluir;
}
