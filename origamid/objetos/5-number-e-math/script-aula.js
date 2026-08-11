console.log('Utilizando isNaN() e isInteger()');

console.log(Number.isNaN(NaN)); // é um valor NaN? // true
console.log(Number.isNaN(5)); // o valor 5 é NaN?? // false
console.log(Number.isNaN('NaN')); // string é NaN? // false

console.log(Number.isInteger(10)); // 10 é um valor integral? // true
console.log(Number.isInteger(10.53)); // 10.53 é um valor integral? // false

console.log('==================================');
// -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / /

console.log('Utilizando parseFloat(), Number.parseFloat() e Number.parseInt()');

console.log(parseFloat('99.50'));
console.log(Number.parseFloat('100 reais')); // se o caracter for depois do numero ele consegue retornar
console.log(Number.parseFloat('reais 100')); // se o caracter for antes do numero ele retorna NaN

console.log(Number.parseInt('136.6')); // retorna o número inteiro
console.log(Number.parseInt('100.75 reais', 10)); // 100 // , 10 significa casa decimal
console.log(Number.parseInt('reais 100')); // NaN
console.log(Number.parseInt(230.235)); // 230 // passar um número direto também funciona

console.log('==================================');
// -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / /

console.log('Utilizando toFixed()');

const preco = 10.323232;

// to fixed retorna uma string

console.log(preco.toFixed()); // arredondou sem casa decimal
console.log(preco.toFixed(1)); // arrendondou com 1 casa decimal
console.log(preco.toFixed(2)); // arrendondou com 2 casas decimais...

console.log((99.99).toFixed(2));

console.log('==================================');
// -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / /

console.log('Utilizando toString()');

const valor = 55.5;

console.log(valor.toString(10)); // 55.5 // retorna o número em string, usando casa decimal

console.log('==================================');
// -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / /

console.log('Utilizando toLocaleString()');

const valor2 = 59.35;

const valorBr = valor2.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

const valorUs = valor2.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

console.log(valorBr);
console.log(valorUs);

console.log('==================================');
// -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / /

console.log('Utilizando Math');

console.log(Math.PI); // 3.14159 // valor de PI
console.log(Math.E); // 2.718
console.log(Math.LN10); // 2.302

console.log('==================================');
// -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / /

console.log('Utilizando Math.abs(), Math.ceil(), Math.floor() e Math.round()');

console.log(Math.abs(-3.5)); // 3.5 // transforma negativo em positivo

console.log(Math.ceil(4.8334)); // arrendonda para cima

console.log(Math.floor(4.8384)); // arredonda para baixo

console.log(Math.round(4.737)); // 5 //arredonda para o valor mais proximo
console.log(Math.round(4.384)); // 4

console.log('==================================');
// -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / /

console.log('Utilizando Math.max(), Math.min() e Math.random()');

console.log(Math.max(10, 20, 30, 40, 50)); // retorna o maior número

console.log(Math.min(10, 20, 30, 40, 50)); // retorna o menor número

console.log(Math.random()); // retorna um número float aleatório entre 0 e 1

const aleatorio = Math.floor(Math.random() * 10); // número aleatorio entre 0 e 10

console.log(aleatorio);

// número random entre 50 e 100

const max = 100;
const min = 30;

const randomEntre = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomEntre);

const randomEntre2 = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
console.log(randomEntre2);
