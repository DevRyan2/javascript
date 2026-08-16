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
