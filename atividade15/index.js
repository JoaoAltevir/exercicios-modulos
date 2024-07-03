const prompt = require("prompt-sync")();

let numUsuario = prompt("Informe um número para saber se ele é impar ou par a partir da soma de seus algarismos: ");
let soma = 0;
numUsuario = numUsuario.split("");
for(let i = 0;i < numUsuario.length;i++){
    soma += parseInt(numUsuario[i]);
    console.log(soma)
}
console.log(soma)
if(soma % 2 == 0){
    console.log("É impar!")
}else{
    console.log("É par!")
}
