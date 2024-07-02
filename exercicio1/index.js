const prompt = require("prompt-sync")();
const calculos = require("./modulo1");

let baseRetang = prompt("Informe a base do retângulo: ");
let alturaRetang = prompt("Informe a altura do retângulo: ");
console.log(calculos.areaRetang(baseRetang, alturaRetang));

let raioCirc = +prompt("Informe o raio do circulo: ");

console.log(calculos.areaCirculo(raioCirc));

let baseTriang = prompt("Informe a base do triângulo: ");
let alturaTriang = prompt("Informe a altura do triângulo: ");

console.log(calculos.areaTriang(baseTriang, alturaTriang));
