console.log('Utilizando [].find() e o [].findIndex()');

// find acha o primeiro valor desejado e retorna true, e findIndex faz o mesmo que find, so que inves do valor, ele retorna o index

const frutas = ['Banana', 'Pera', 'Uva'];

const indexUva = frutas.findIndex((item) => {
    return item === 'Uva';
}); // retorna o index de Uva // 2

console.log('Index:', indexUva);

const encontrarUva = frutas.find((item) => {
    return item === 'Uva';
});

console.log(encontrarUva);

console.log('===================================');
// -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / /

console.log('Utilizando [].filter()');

// Retorna uma nova array apenas com os valores cuja callback retorna truthy.

const frutas2 = ['Banana', undefined, null, '', 'Uva', 0, 'Maça'];
const arrayLimpa = frutas2.filter((fruta) => {
    return fruta;
}); // retorna so os valores verdadeiros... // Banana, Uva, Maça

console.log(arrayLimpa);

const numeros4 = [6, 43, 22, 88, 101, 29];
const buscaMaior45 = numeros4.filter((n) => n > 45); // retorna os numeros maiores que 45 // 88, 101

console.log(buscaMaior45);

const aula = [
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

const maiores15 = aula.filter((aula) => aula.min >= 15);
console.log(maiores15);
