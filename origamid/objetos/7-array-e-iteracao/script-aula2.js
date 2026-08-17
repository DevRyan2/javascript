console.log('Utilizando reduce()');

const aulas2 = [10, 25, 30];

const reduceAulas = aulas2.reduce((acumulador, item) => {
    console.log(acumulador, item);

    return acumulador + item;
}, 0); // retorna a soma dos valores da array

console.log(reduceAulas);

/*

const aulas3 = [10, 25, 30];

// 1
aulas3.reduce((0, 10) => {
    return 0 + 10
}, 0) // retorna 10

// 2
aulas.reduce((10, 25) => {

    return 10 + 25
}, 0) // retorna 35

// 3
aulas.reduce((35, 30) => {

    return 35 + 30
    
}, 0) // retorna 65

*/

const numeros2 = [10, 25, 30, 3, 54, 33, 22];

const maiorNumero = numeros2.reduce((anterior, atual) => {
    return anterior > atual ? anterior : atual;
}, 0);

console.log(maiorNumero); // descobrir o maior valor dentro da array

const aulas3 = [
    {
        nome: 'HTML1',
        min: 15,
    },
    {
        nome: 'HTML2',
        min: 10,
    },
    {
        nome: 'CSS 1',
        min: 20,
    },
    {
        nome: 'JS 1',
        min: 25,
    },
];

// var acumulador = {}
// acumulador[0] = 'teste'

const listaAulas = aulas3.reduce((acumulador, aula, index) => {
    acumulador[index] = aula.nome;
    return acumulador;
}, {});

console.log(listaAulas);

/*
// 1
aulas.reduce(({}, {nome: 'HTML 1', min: 15}, 0) => {
  {}[0] = 'HTML 1';
  return {0: 'HTML 1'};
}, {})

// 2
aulas.reduce(({0: 'HTML 1'}, {nome: 'HTML 2', min: 10}, 1) => {
  {0: 'HTML 1'}[1] = 'HTML 2';
  return {0: 'HTML 1', 1: 'HTML 2'};
}, {})

// 3
aulas.reduce(({0: 'HTML 1', 1: 'HTML 2'}, {nome: 'CSS 1', min: 20}, 2) => {
  {0: 'HTML 1', 1: 'HTML 2'}[2] = 'CSS 1';
  return {0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1'};
}, {})

// 4
aulas.reduce(({0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1'}, {nome: 'JS 1', min: 25}, 3) => {
  {0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1'}[3] = 'JS 1';
  return {0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1', 3: 'JS 1'};
}, {})
*/

console.log('===================================');
// -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / /

console.log('Utilizando o [].reduceRight()');

const frutas = ['Banana', 'Pera', 'Uva'];

const frutasRight = frutas.reduceRight((acc, fruta) => {
    return acc + ' ' + fruta;
});

const frutasLeft = frutas.reduce((acc, fruta) => acc + ' ' + fruta);

console.log(frutasRight);
console.log(frutasLeft);

console.log('===================================');
// -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / /

console.log('Utilizando o [].some()');

// retorna true se algum for verdadeiro, se for falso retorna false

const temUva = frutas.some((fruta) => {
    return fruta === 'Uva';
}); // retorna true

console.log(temUva);

console.log('===================================');
// -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / /

console.log('Utilizando [].every()');

// retorna true se todos forem verdadeiros, se tiver um false retorna false

const every = frutas.every((fruta) => {
    return fruta === 'Uva';
}); // retorna false

console.log(every);

const numeros3 = [10, 25, 30, 4, 54, 33, 22];

const maiorQue3 = numeros3.every((n) => n > 3);

console.log(maiorQue3);

console.log('===================================');
// -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / /
