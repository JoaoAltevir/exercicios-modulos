function areaCirculo(r){
    let resultado = 3.14 * (r ** 2);
    return resultado;
}
const areaTriang = function(b,h){
    let resultado = (b * h)/2
    return resultado;
}
const areaRetang = (b, h) => b * h;

module.exports = {
    areaCirculo,
    areaTriang,
    areaRetang,
}