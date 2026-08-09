const comida = 'Pizza';

const agua = new String('agua');

console.log(agua);
console.log(comida);
console.log(agua.length); // quantidade de letras que agua tem // 4

const frase = 'A melhor comida';

console.log(comida[0]); // primeira letra de comida // P
console.log(frase[0]); // primeira letra de frase // A

console.log(frase[frase.length - 1]); // ultima letra de frase // a

console.log('====================================');

// - - / / - - / / - - / / - - / / - - / / - - / / - - / / - - / / - -

const linguagem = 'JavaScript';

console.log(linguagem.charAt(0)); // J
console.log(linguagem.charAt(linguagem.length - 1)); // t

console.log('====================================');

// - - / / - - / / - - / / - - / / - - / / - - / / - - / / - - / / - -

const fraseFinal = frase.concat(linguagem, '!!', 'oie teste');

console.log(fraseFinal);

console.log('====================================');

// - - / / - - / / - - / / - - / / - - / / - - / / - - / / - - / / - -

// str.includes() retorna true ou false

const fruta = 'Banana';

const listaFrutas = 'Melancia, Banana, Laranja';

// o numero é o index(M, e, l, a, n, c, i, a)
//                    0, 1, 2, 3, 4, 5, 6, 7...

if (listaFrutas.includes(fruta, 10)) {
    console.log(`Tem ${fruta} dentro de ${listaFrutas}`);
} else {
    console.log(`Não tem ${fruta} dentro de ${listaFrutas}`);
}

console.log('====================================');

// - - / / - - / / - - / / - - / / - - / / - - / / - - / / - - / / - -

console.log(fruta.startsWith('Ba')); // true // começa com 'Ba'

console.log(fruta.endsWith('nana')); // true // termina com 'nana'

console.log('====================================');

// - - / / - - / / - - / / - - / / - - / / - - / / - - / / - - / / - -

const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

console.log(transacao1.slice(0, 3)); // Dep
console.log(transacao2.slice(0, 3)); // Dep
console.log(transacao3.slice(0, 3)); // Tax

console.log(transacao1.slice(12)); // cliente // corta os primeiros 12 caracteres
console.log(transacao1.slice(-4)); // ente // pega os ultimos 4 caracteres
console.log(transacao1.slice(3, 6)); // ósi

console.log('====================================');

// - - / / - - / / - - / / - - / / - - / / - - / / - - / / - - / / - -

console.log(linguagem.substring(3, 5)); // aS
console.log(linguagem.substring(0, 4)); // Java
console.log(linguagem.substring(4)); // Script
console.log(linguagem.substring(-3)); // retorna JavaScript pois não funciona com numeros negativos

console.log('====================================');

// - - / / - - / / - - / / - - / / - - / / - - / / - - / / - - / / - -

// Banana
// 012345
console.log(fruta.indexOf('B')); // 0
console.log(fruta.indexOf('a')); // 1
console.log(fruta.indexOf(2)); // se for valor invalido retorna - 1

console.log(fruta.lastIndexOf('a')); // retorna o ultimo a que aparece '5'

console.log('====================================');

// - - / / - - / / - - / / - - / / - - / / - - / / - - / / - - / / - -

const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

listaPrecos.forEach((preco) => {
    console.log(preco.padStart(8, '-'));
});

