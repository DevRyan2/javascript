const perimetroQuadrado = new Function('lado', 'return lado * 4');

console.log(perimetroQuadrado(5));

function somar(n1, n2, n3) {
    return n1 + n2;
}

console.log(somar.name.toUpperCase());

// -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / /
console.log('==============================================');

console.log('Utilizando o .call()');

function darOi(nome, idade) {
    console.log(`Oi para voê ${nome} ${idade}`);
}

// o primeiro argumento é referencia do this
darOi.call(null, 'Ryan', 19);

// window.marca = 'Carro';
// window.ano = 2010;

function descricaoCarro(velocidade) {
    console.log(this);
    console.log(this.marca + ' ' + this.ano + ' ' + velocidade);
}

descricaoCarro.call({ marca: 'Honda', ano: 2015 }, 100);

const carros = ['Ford', 'Fiat', 'VW'];
const frutas = ['Banana', 'Uva', 'Pera'];

frutas.forEach.call(carros, (item) => {
    console.log(item);
});

function Dom(seletor) {
    this.element = document.querySelector(seletor);
}

Dom.prototype.ativo = function (classe) {
    console.log(this);
    this.element.classList.add(classe);
};

const li = {
    element: document.querySelector('li'),
};

Dom.prototype.ativo.call(li, 'ativar');

// const ul = new Dom('ul')
// ul.ativo.call(li, 'ativo')
// ul.ativo('ativar')

const frutas2 = ['Uva', 'Maça', 'Banana'];

Array.prototype.pop.call(frutas2);
// frutas2.pop()

const arrayLike = {
    0: 'item 1',
    1: 'item 2',
    2: 'item 3',
    length: 3,
};

const li2 = document.querySelectorAll('li');
const liArray = Array.from(li2);

const filtro = liArray.filter((item) => {
    return item.classList.contains('ativo');
});
console.log(filtro);

console.log(liArray);
console.log(arrayLike);
