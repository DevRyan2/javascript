console.log('Verificando o constructor do obj');

const frutas = ['Bananas', 'Maça', 'Pera'];

console.log(frutas.constructor); // Array

// -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / /
console.log('==============================================');

console.log(`Utilizando {}.hasOwnProperty('prop') e {}.propertyIsEnumerable()`);

console.log(frutas.hasOwnProperty('map')); // false

console.log(Array.hasOwnProperty('map')); // false

console.log(Array.prototype.hasOwnProperty('map')); // true

// ==============================================

console.log(Array.propertyIsEnumerable('map')); // false
console.log(window.propertyIsEnumerable('innerHeight')); // true

// -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / /
console.log('==============================================');

console.log('Utilizando {}.isPrototypeOf(valor)');
// verifica se é o protótipo do valor passado;

const frutas2 = ['Banana', 'Uva'];

// array prototype é protótipo de frutas? sim porque frutas é uma array
Array.prototype.isPrototypeOf(frutas2); // true

// -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / /
console.log('==============================================');

console.log('Utilizando {}.toString()');

// retorna o tipo do objeto. o problema é toString() ser uma função dos protótipos
// de array, string e mais. por isso é comum utilizarmos a função direto do
// Object.prototype.toString.call(valor)

const frase = 'Oi frase';

const funcao = function (a, b) {
    return a + b;
};

const carro = {
    marca: 'Honda',
    ano: 2010,
};

console.log(frutas.toString());
console.log(frase.toString());
console.log(funcao.toString());
console.log(carro.toString());

console.log(Object.prototype.toString.call(frutas)); // object array
console.log(Object.prototype.toString.call(frase)); // object string
console.log(Object.prototype.toString.call(funcao)); // object function
