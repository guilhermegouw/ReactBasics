/**
 * Método map()
 * 
 * Esse método adimite 3 parâmetros.
 * - O primeiro, obrigatório, é uma função callback.
 * - O segundo, opcional, o índice do item.
 * - O terceiro, o objeto original.
 * 
 * Esse método percorre cada item de um objeto iterável e cria um novo objeto no qual cada item é
 * o retorno da função callback aplicada sobre cada item do objeto original.
 * 
 * Exemplos:
 */

const livros = [ 'CSS3', 'Javascript', 'PHP', 'HTML5', 'React' ];

let livros1 = livros.map((livro) => "Livro " + livro);
let livros2 = livros.map((livro, index) => "Livro" + " " + index + " " + livro);

console.log(livros);
console.log(livros1);
console.log(livros2);
// Nesse exemplos utilizamos a função map para criarmos 2 novos arrays.


const livrosA = [
    {titulo: "Construindo Sites com HTML", autor: "Mauricio Samy Silva"},
    {titulo: "Web Scraping com Python", autor: "Ryan Mitchell"},
    {titulo: "CSS3", autor: "Mauricio Samy Silva"},
];

let livrosx = livrosA.map((livro) => "Livro: " + livro.titulo);
let livrosy = livrosA.map((livro) => "Livro: " + livro.autor);
console.log(livrosA);
console.log(livrosx);
console.log(livrosy);
/**
 * No exemplomostrado acima, criamos dois arrays, livrosx e livrosy, que foram mapeados do array de
 * objectos original livrosA.
 */