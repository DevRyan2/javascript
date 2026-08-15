console.log('Utilizando arrow Function');

const carros = ['Ford', 'Fiat', 'Honda'];

// modificar "array", também modifica a array original

carros.forEach(function (item, index, array) {
    array[index] = 'teste';
    console.log(item.toUpperCase(), index, array);
});

console.log(carros);

console.log('===================================');
// -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / /

console.log('Utilizando Arrow Function');

const li = document.querySelectorAll('li');

li.forEach((i, index) => {
    i.classList.add('ativa' + index);
});

console.log('===================================');
// -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / /

console.log('Utilizando o .map()');

const carros2 = ['Ford', 'Fiat', 'Honda'];

const carrosMap = carros2.map((item, index, array) => {
    console.log(item.toUpperCase(), index, array);
    return item.toUpperCase();
});

console.log(carrosMap);
console.log(carros2);

const numeros = [2, 4, 6, 8, 10, 12];
const numerosX2 = numeros.map((n) => n * 2);

console.log(numeros);
console.log(numerosX2);

console.log('===================================');
// -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / /

const aulas = [
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

const nomeAulas = (aula) => aula.nome;

const tempoAulas = aulas.map((aula) => aula.min);

const arrayNomeAula = aulas.map(nomeAulas);

console.log(tempoAulas);
console.log(arrayNomeAula);

console.log('===================================');
// -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / /

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
}, 0) // retorna 25


// 3
aulas.reduce((35, 30) => {

    return 35 + 30
    
}, 0)

*/