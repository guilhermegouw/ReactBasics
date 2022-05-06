/**
 * Arrow Functions
 */

function saudacaoTradicional() {
    return "Olá visitante";
}

let saudacaoArrow = () => "Olá visitante";
let saudacaoArrow2 = () => (
    "Olá visitante"
);

console.log(saudacaoTradicional());
console.log(saudacaoArrow());
console.log(saudacaoArrow2());

let dobrar = (x) => x*2;
console.log(dobrar(2));

function avaliarTradicional(x, y, z) {
    if(x < 10) {
        return y + z;
    } else {
        return y * z;
    }
};

let avaliarArrowTernario = (x, y, z) => x < 10 ? y + z : y * z;
let avaliarArrowTernarioMultiplasLinhas = (x, y, z) => (
    x < 10  // condição
    ? y + z // linha começa com ?
    : y * z // linha começa com :
);

console.log(avaliarTradicional(11, 2, 3));
console.log(avaliarArrowTernario(11, 2, 3));
console.log(avaliarArrowTernarioMultiplasLinhas(11, 2, 3));