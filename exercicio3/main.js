const prompt = require("prompt-sync")();
const perfeito = require("./modulo");


let numUsuario = +prompt("Informe um número para verificar se ele é perfeito ou não: ");

perfeito.numPerfeito(numUsuario);
