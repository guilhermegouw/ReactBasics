/**
 * Método filter()
 * 
 * Esse método adimite 3 parâmetros.
 * 1- Obrigatório, é uma função callback.
 * 2- Opcional, o índice do item.
 * 3- O objeto original.
 * 
 * Esse método percorre cada item de um objeto iterável e crea um novo objeto no qual cada item
 * satisfaz uma condição de filtragem expressa na função callback aplicada sobre cada item do objeto
 * original. 
 */

const livros = [
    {titulo: "Construindo Sites com HTML", autor: "Mauricio Samy Silva"},
    {titulo: "Web Scraping com Python", autor: "Ryan Mitchell"},
    {titulo: "CSS3", autor: "Mauricio Samy Silva"},
];

let livros1 = livros.filter((livro) => livro.titulo === "CSS3");
let livros2 = livros.filter((livro) => livro.autor === "Mauricio Samy Silva");
let livros3 = livros.filter((livro) => livro.titulo.includes("com"));

console.log(livros1);
console.log(livros2);
console.log(livros3);