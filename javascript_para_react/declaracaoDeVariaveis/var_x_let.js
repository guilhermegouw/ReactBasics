/**
 * var A maneira mais antiga:
 * A grande peculiaridade no uso da keyword var é o seu escopo de atuação.
 * Uma variável declarada com var possui escopo de função. Isso significa que se criamos uma 
 * variável desse tipo dentro de uma função, sua referência poderá ser identificada e modificada
 * em qualquer parte dessa função, mesmo que criemos outros escopos dentro dela, como um bloco if,
 * switch ou for.Isso pode implicar alguns problemas. Como na função returnCarVar() abaixo: podemos
 * observar que a variável car foi declarada no escopo mais externo da função e em seguida alterada
 * no escopo dentro do if e ao ser chamada novamente já agora fora do escopo if(), a variável
 * manteve o novo valor recebido dentro do escopo do if.
*/
function returnCarVar() {
    var car = 'Land Rover';
    if (car === 'Land Rover') {
        var car = 'Ferrari';
        console.log('(var) Dentro do if: ' + car);
    }
    console.log('(var) Fora do if: ' + car);
}

returnCarVar()


/**
 * let - Levando em conta o escopo de cada bloco de código
 * Um variável declarada com let leva em conta, não a função onde foi criada, mas sim o bloco de 
 * código de sua origem. Isso significa que se a declararmos dentro de um if(), switch() ou for(), 
 * ela será “enxergada” apenas dentro desta parte do código, dentro deste escopo específico.
 * 
 * O que podemos ver nesse exemplo, é que ao declarar a variável car com let no escopo mais externo 
 * da função. Quando a variável foi declarada dentro do bloco if, mesmo que utilizando o mesmo nome
 * a variável car ao ser chamado no escopo mais exteno da função manteve seu valor original. O valor 
 * Ferrari valeu apenas dentro do bloco if, o valor 'Land Rover' continuou valendo no escopo mais
 * externo onde foi originalmente declarada.
*/
function returnCarLet() {
    let car = 'Land Rover';
    if (car === 'Land Rover') {
        let car = 'Ferrari';
        console.log('(let) Dentro do if: ' + car);
    }
    console.log('(let) Fora do if: ' + car);
}

returnCarLet()


/**
 * Exemplo de laços de repetição:
 * 
 * var: O indice fora do laço é impresso sem problema algum.
 * let: O indice existe somente dentro do laço.
 */

function lacoVar() {
    for (var i = 2000; i < 2022; i++) {
        console.log('var: ' + i);
    }
    console.log('Indice fora do laço: ' + i)
}

function lacoLet() {
    for (let i = 2000; i < 2022; i++) {
        console.log('let: ' + i);
    }
    // console.log('Indice fora do laço: ' + i)
}

lacoVar()
lacoLet()

/**
 * Outra diferença marcante entre var e let é que quando uma variável declarada com var essa variável é
 * elevada para o início do nosso código quando ele é executado.
 * Por exemplo:
 */
variavelElevada = 23;
var variavelElevada;
console.log(variavelElevada);
// esse código irá rodar sem problemas.

/** 
 * Por outro lado se a variável for declarada com let da mesma maneira que a anterior, nós 
 * receberiamos um erro dizendo que a variável variavelElevada não pode ser acessada antes de 
 * inicializada.
 */
