function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;

    this.abracar = function () {
        console.log(`${this.nome} abraçou`);
    };
}

var objeto = {
    nome: 'Ryan',
    idade: 19,
};

Pessoa.prototype.andar = function () {
    return `${this.nome} andou`;
};

Pessoa.prototype.nadar = function () {
    return `${this.nome} nadou`;
};

const ryan = new Pessoa('Ryan', 19);

// console.log(Pessoa.prototype) // função
// console.log(ryan.prototype) // objeto

const pais = 'Brasil';

const cidade = new String('Rio de Janeiro');

const listaAnimais = ['Cachorro', 'Gato', 'Cavalo'];

const lista = document.querySelectorAll('li');

// transforma em Array

const listaArray1 = Array.prototype.slice.call(lista);
const listaArray2 = Array.from(lista);

console.log(lista, listaArray1, listaArray2);

const Carro = {
    marca: 'Ford',
    preco: 2000,

    andar() {
        return 'true';
    },
};
