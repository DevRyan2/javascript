console.log('Utilizando o [].splice()');

const carros = ['Kia', 'Ferrari', 'Ford', 'Fiat', 'Parati', 'Gol', 'Honda'];

console.log(carros);
console.log(carros.splice(2, 4, 'Fusca'));
console.log(carros);

console.log('=======================================');
// -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / /

console.log('Utilizando [].copyWithin()');
/* 

copyWithin(2, 0, 2)
           │  │  │
           │  │  └─ até onde copiar (NÃO inclui o índice 2)
           │  └──── de onde começar a copiar
           └─────── onde colar

*/

let listaItens = ['Item1', 'Item2', 'Item3', 'Item4', 'Item5'].copyWithin(2, 0, 2); // (destino, inicio, fim)

console.log(listaItens);

listaItens.copyWithin(-1);
console.log(listaItens);

console.log('=======================================');
// -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / /

console.log('Utilizando o [].fill()');

console.log(['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 0, 3));

console.log('=======================================');
// -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / /

console.log('Utilizando [].concat()');

const transporte1 = ['Barco', 'Avião'];
const transporte2 = ['Carro', 'Moto'];
const transportes = transporte1.concat(transporte2);

console.log(transportes);

const maisTranportes = [].concat(transporte1, transporte2, 'Van');

console.log(maisTranportes);

console.log('=======================================');
// -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / /

console.log('Utilizando [].includes(), [].indexOf() e [].lastIndexOf()');

const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];

console.log(linguagens.includes('css')); // true
console.log(linguagens.includes('ruby')); // false
console.log(linguagens.indexOf('python'));
console.log(linguagens.indexOf('js')); // 2
console.log(linguagens.lastIndexOf('js')); // 5

console.log('=======================================');
// -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / /

console.log('Utilizando [].join()');

console.log(linguagens);

console.log(linguagens.join(''));

let htmlString = '<h2>Título Principal </h2>';
htmlString = htmlString.split('h2');
htmlString = htmlString.join('h1');

console.log(htmlString);

console.log('=======================================');
// -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / /

console.log('Utilizando o [].slice()');

const linguagens2 = ['0 html', '1 css', '2 js', '3 php', '4 python', '5 js'];

console.log(linguagens2);

console.log(linguagens2.slice(3)); // pega tudo a partir do index 3
console.log(linguagens2.slice(1, 4)); // pega tudo entre o index 1 e 4 (não conta o 4)

const cloneLinguagens = linguagens2.slice(); // clona a Array

console.log(cloneLinguagens);
