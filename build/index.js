"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prioridade_1 = require("./prioridade");
const tarefas_1 = require("./tarefas");
const novaTarefa = (0, tarefas_1.criarTarefa)("Concluir exercícios", "Fazer todos os exercícios", prioridade_1.Prioridade.Alta);
(0, tarefas_1.exibirTarefa)(novaTarefa);
console.log('------------------');
(0, tarefas_1.concluirTarefa)(novaTarefa);
(0, tarefas_1.exibirTarefa)(novaTarefa);
