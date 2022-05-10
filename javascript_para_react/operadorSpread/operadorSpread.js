/**
 * Operador Spread
 * 
 * Destina-se a expandir um array, um objeto ou uma string.
 * Seu simbolo é constituído por (...).
 * 
 * Exemplos:
 */

const livros1 = ['CSS3', 'Javascript', 'PHP'];
const livros2 = ['HTML5', 'React'];
const precos = [70, 30, 90, 100, 10];

let exe1Livros = livros1 + livros2;
//  O resultado não é um array com 5 livros mas, uma string.

let exe2livros = [livros1] + [livros2];
// Ao invés de um array com 5 livros recebemos um array com dois arrays.

let exe3livros = [...livros1, ...livros2];
// Finalmente recebemos um array com os 5 livros desejados!

console.log(exe1Livros);
console.log(exe2livros);
console.log(exe3livros);

/**
 * Aqui temos outro caso de uso do operador spread.
 * se tentarmos passar um array de numeros como parâmetro da função Math.max().
 * 
 * let precoMaximo = Math.max(preco);
 * 
 * Isso não é permitido. O resultado é uma mensagem informando que o parâmetro preco não é um 
 * numero, NaN.
 * 
 * Para conseguir o esperado utilizamos o operador spread.
 */
let precoMaximo = Math.max(...precos);
console.log(precoMaximo);