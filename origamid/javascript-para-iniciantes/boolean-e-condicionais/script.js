// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

var minhaIdade = 18;
var idadePrimo = 17;

if (minhaIdade > idadePrimo) {
    console.log(`É maior`);
} else if (minhaIdade < idadePrimo) {
    console.log(`É menor`);
} else if (minhaIdade == idadePrimo) {
    console.log(`É igual`);
} else {
    console.log(`Valor inválido`);
}

// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - ' ' && 5 - 2;
console.log(expressao);
// true

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; //true
var idade = 28; //true
var possuiDoutorado = false; //false
var empregoFuturo; //false
var dinheiroNaConta = 0; //false

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta)

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
    console.log(`O brasil tem mais habitantes`)
} else if (china == brasil){
    console.log(`O brasil é a china tem a mesma quantidade de habitantes`)
} else {
    console.log(`A china tem mais habitantes`)
}

// O que irá aparecer no console?
if ('Gato' === 'gato' && 5 > 2) {
    console.log('Verdadeiro');
} else {
    console.log('Falso');
}

// O que irá aparecer no console?
if ('Gato' === 'gato' || 5 > 2) {
    console.log('Gato' && 'Cão');
} else {
    console.log('Falso');
}
