/**
 * Variávies const: keyword usado para declararmos constantes.
 * A princípio declarar uma variável do tipo constante parece algo completamente sem sentido, certo?
 * Na verdade não!
 * No Javascript quando declaramos variáveis do tipo constante não necessáriamente não é possível
 * mudar o seu valor. 
 * Isso é verdade, quando tentamos sobrescrever o seu identificador.
 * Por exemplo:
 */

const CONSTANTE = 'Não muda de valor';
console.log(CONSTANTE);
// CONSTANTE = 'tentando mudar o valor';
/**
 * Ao tentarmos rodar a linha comentada acima receberemos o seguinte erro
 * TypeError: Assignment to constant variable.
 */

/**
 * Mas, se nossa constante for um objeto ou um array, podemos alterar suas propriedades.
 * Por exemplo:
 */

const objeto = {
    "campo 1": "valor do campo 1",
}
console.log(objeto["campo 1"])

objeto["campo 1"] = "novo valor";
console.log(objeto["campo 1"])

/**
 * Outra propriedade interessante sobre variáveis do tipo const é que
 * Não é possível declarar uma sem seu valor.
 * Por exemplo:
 * const VARIAVEL;
 * Levantaria um erro do tipo: SyntaxError
 * Dizendo que falta um inicializador nessa variável const.
 */