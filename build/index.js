"use strict";
var Prioridade;
(function (Prioridade) {
    Prioridade[Prioridade["Baixa"] = 0] = "Baixa";
    Prioridade[Prioridade["Media"] = 1] = "Media";
    Prioridade[Prioridade["Alta"] = 3] = "Alta";
})(Prioridade || (Prioridade = {}));
console.log(Prioridade.Alta);
function criarTarefa(titulo, descricao, prioridade) {
}
