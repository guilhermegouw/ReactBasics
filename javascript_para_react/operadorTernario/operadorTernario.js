/**
 * Operador Ternário
 * O Operador ternário fornece uma sintaxe abreviada para a condicional if-else.
 * Tal sintaxe abreviada é mostrada a seguir.
 * 
 * let resultado = (condição) ? (retorno se verdadeira) : (retorno se falsa);
 * 
 * O valor de retorno é amazenado na variável resultado. A condição é a clausula if (falsa ou verdadeira)
 * é o valor da variável resultado se a condição for verdadeira. A parte que declara : (retorno se falsa)
 * é o valor da variável resultado se a condição for falsa.
 * 
 * vale lembrar que é facultativo o uso do parêntense na condição e nos retornos mostrados na sintaxe.
 * Se necessário, use-o para aumentar a legibilidade do código.
 */

function modoTradicional(preco) {
    if (preco < 40) {
        return "Livro barato";
    } else {
        return "Livro não é barato";
    }
}

function modoTernario(preco) {
    let ehBarato = (preco < 40) ? "Livro barato" : "Livro não é barato";
    return ehBarato;
}

console.log(modoTradicional(29.90));
console.log(modoTernario(29.90));
console.log(modoTradicional(49.90));
console.log(modoTernario(49.90));