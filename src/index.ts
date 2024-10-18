import { Prioridade } from "./prioridade";
import { Tarefa, criarTarefa, exibirTarefa, concluirTarefa } from "./tarefas";


const novaTarefa:Tarefa = criarTarefa("Concluir exercícios", "Fazer todos os exercícios", Prioridade.Alta)
exibirTarefa(novaTarefa)
console.log('------------------')
concluirTarefa(novaTarefa)
exibirTarefa(novaTarefa)
