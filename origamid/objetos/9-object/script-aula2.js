const innerHeightConfig = Object.getOwnPropertyDescriptor(window, 'innerHeight');
console.log(innerHeightConfig);

// -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / /
console.log('==============================================');

console.log('Utilizando Object.keys(obj), Object.values(obj) e Object.entries(obj)');

// console.log(Object.keys(moto2));
// console.log(Object.entries(moto2));
// console.log(Object.values(moto2));

// -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / /
console.log('==============================================');

console.log('Utilizando Object.getOwnPropertyNames(obj)');

console.log(Object.getOwnPropertyNames(Array.prototype));

// -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / /
console.log('==============================================');

console.log('Utilizando o Object.getPrototypeOf() e Object.is()');

const frutas = ['Banana'];

console.log(Object.getPrototypeOf(frutas)); // ve o prototype dos objetos
console.log(Array.prototype);

const frutas1 = ['Banana', 'Pera'];
const frutas2 = ['Banana', 'Pera'];
const novaFruta = frutas1;

console.log(Object.getOwnPropertyNames(Array.prototype))

console.log(Object.is(frutas1, frutas2)); // verifica se os objetos sao iguais //false
console.log(Object.is(frutas1, novaFruta)); // true

// -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / /
console.log('==============================================');

console.log('Utilizando o Object.freeze(), Object.seal(), Object.preventExtensions()');

// Object.freeze() impede qualquer mudança nas propriedades
// Object.seal() previne a edição de novas propriedades e impede que as atuais sejam deletadas
// Object.preventExtensions() previne a adição de novas propriedades.

const carro = {
    marca: 'Ford',
    ano: 2018,
};

// ======================================
carro.marca = 'Honda';

console.log(Object.preventExtensions(carro));

// ======================================
carro.marca = 'Honda';

console.log(Object.seal(carro));

// ======================================

carro.ano = 2010; // troco o ano do carro

console.log(carro);

Object.freeze(carro); // congelo as propriedades

carro.marca = 'Fiat'; // tento trocar a marca, so que as propriedades estão congeladas
console.log(carro); // não troca

// ======================================

console.log(Object.isFrozen(carro)); // está congelado? // verdadeiro
