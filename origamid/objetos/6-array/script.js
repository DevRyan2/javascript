const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const precos = [49, 99, 69, 89];

const dados = [
    new String('Tipo 1'),
    ['Carro', 'Portas', { cor: 'Azul', preco: 2000 }],
    function andar(nome) {
        console.log(nome);
    },
];

console.log('=======================================')
// -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / /

console.log('Construção de Arrays')

const carros = new Array('Ford', 'Fiat', 'Honda')

carros[2] = 'Corola' // Substitui "Honda" por "Corola"
carros[3] = 'Ferrari' // Se nao tiver nenhum nessa posição ele adiciona
carros[20] = 'Kia' // adiciona "Kia" na posição 20 e deixa o resto vazio se nao tiver nada

console.log(carros.length) // 21

console.log('=======================================')
// -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / /

console.log('Utilizando Array.from() para transformar array-like em array')

const li = document.querySelectorAll('ul li')
const novaArray = Array.from(li)


// caso você coloque um length maior do que seria a "Array", vai aparecer um undefined na Array
const obj = {
    0: 'Ryan',
    1: 'Carlos',
    2: 'Amorim',
    length: 4
}

const objetoArray = Array.from(obj)

console.log(li)
console.log(novaArray)
console.log(objetoArray)

console.log('=======================================')
// -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / /

console.log('Utilizando o isArray() para verificar se é array')

console.log(Array.isArray(li)) // false
console.log(Array.isArray(novaArray)) // true

console.log('=======================================')
// -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / /

console.log('Utilizando Array.of(), Array() e new Array()')

console.log(Array.of(10)) // cria uma array com o valor
console.log(Array.of('Teste', 'Teste 2')) // cria uma array com o valor
console.log(Array(5)) // cria uma array vazia com 5 itens 
console.log(Array(1, 2, 3, 4)) // cria uma array com os valores passados

console.log('=======================================')
// -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / /

console.log('Utilizando [].length')

const frutas = ['Banana', 'Pera', ['Uva Roxa', 'Uva Verde']]

console.log(frutas.length)
console.log(frutas[0].length) // numeros de letras que a primeira palavra tem, que nem escrever 'Banana'.length
console.log(frutas[2].length) // itens dentro da outra array

console.log(frutas[2][0].length)

console.log('=======================================')
// -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / /

console.log('Utilizando  Métodos modificadores [].sort()')

let instrumentos2 = ['Guitarra', 'Baixo', 'Violão'];
console.log(instrumentos2)

instrumentos2 = instrumentos2.sort() // organiza pela ordem alfabetica
console.log(instrumentos2)

let idades = [10, 3, 1, 5, 2, 9, 8, 6, 7, 4] // alinha pelo primeiro caracter
console.log(idades)

idades = idades.sort()
console.log(idades)

console.log('=======================================')
// -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / /

console.log('Utilizando [].unshift() e [].push()')

const carros2 = ['Ford', 'Fiat', 'Honda']

console.log(carros2)

carros2.unshift('Kia', 'Ferrari') // adiciona o elemento ao começo da array

console.log(carros2)

carros2.push('VW', 'Mercedes')

console.log(carros2)

console.log('=======================================')
// -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / /

console.log('Utilizando [].shift() e [].pop()')

const primeiroCarro = carros2.shift()
console.log(carros2)

console.log(primeiroCarro)


