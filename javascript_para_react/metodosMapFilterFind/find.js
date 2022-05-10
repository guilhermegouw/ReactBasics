/**
 * Método find()
 * 
 * Esse método admite 3 parâmetros.
 * 
 * 1- Obrigatório, é uma função callback.
 * 2- Opcional, é o índice do item.
 * 3- O objeto original.
 * 
 * Esse método percorre cada item de um objeto iterável e cria um novo objeto no qual cada item
 * satisfaz a condição expressa no retorno da função callback aplicada sobre cada item do objeto
 * original.
 */

const livros = [
    {id:1, titulo: "Construindo Sites com HTML"},
    {id:2, titulo: "Web Scraping com Python"},
    {id:3, titulo: "CSS3"}
];

let livros1 = livros.find((livro) => livro.id === 3);

console.log(livros1);
console.log(livros1.titulo);
