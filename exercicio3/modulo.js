function verificaPerfeito(numero, divisao){
    resultado = 0;
    for(let i = 0; i < divisao.length; i++){
        resultado += divisao[i];
    }
    if(resultado == numero){
        console.log("Este número é perfeito!");
    }else{
        console.log("Este número não é perfeito!")
    }
}
function numPerfeito(num){
let divisores = [];
    for(let i = 1;i < num; i++){
        if(num % i == 0){
            divisores.push(i);
        }
    }
    verificaPerfeito(num,divisores);
}

module.exports = {
    numPerfeito,
}