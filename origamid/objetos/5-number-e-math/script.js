// Retorne um número aleatório
// entre 1050 e 2000

const max = 2000;
const min = 1050;

const random = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(random);

// Retorne o maior número da lista abaixo
let numeros = '4, 5, 20, 8, 9';

const numerosArray = numeros.split(', ');

const numeroMaximo = Math.max(...numerosArray);

console.log(numeroMaximo);

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222', 'R$ 230  ', 'r$  200'];

let precoTotal = 0;

function limparPreco(preco) {
    preco = preco.toUpperCase();
    preco = preco.replace('R$ ', '');
    preco = preco.trim();
    preco = preco.replace(',', '.');
    preco = Number(preco);
    preco = preco.toFixed(2);

    return Number(preco);
}

listaPrecos.forEach((preco) => {
    precoTotal += limparPreco(preco);
});

const precoReal = precoTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

console.log(`A soma total de todos os valores é: ${precoReal}`);

// function randomInt(max, min) {

//     return Math.floor(Math.random() * (max - min + 1)) + min

// }

// console.log(randomInt(0, 10))
