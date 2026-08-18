console.log('Utilizando o .apply()');

const numeros = [33, 53, 632, 23, 2, 6, 71];

console.log(Math.max.apply(null, numeros));

const li = document.querySelectorAll('li');

function itemPossuiAtivo(item) {
    return item.classList.contains('ativo');
}

const filtro1 = Array.prototype.filter.call(li, itemPossuiAtivo);
const filtro2 = Array.prototype.filter.apply(li, [itemPossuiAtivo]);

// -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / /
console.log('==============================================');

console.log('Utilizando o .bind()');

const arrayLi = Array.from(li);

const filtro = Array.prototype.filter.bind(li, (item) => {
    return item.classList.contains('ativo');
});

console.log(filtro());

const $ = document.querySelectorAll.bind(document);

console.log($('ul'));

const carro = {
    marca: 'Ford',
    ano: 2018,
    acelerar: function (aceleracao, tempo) {
        return `${this.marca} acelerou ${aceleracao}km/h em ${tempo}s`;
    },
    arrancar: function (arrancou, segundos) {
        return `O ${this.marca} arrancou ${arrancou}km/h em ${segundos}s`;
    },
};

const honda = {
    marca: 'Honda',
};

const fiat = {
    marca: 'Fiat',
};

// pega a função acelerar do carro
// e cria outra função onde this = honda.

// this.marca = 'Honda'
const acelerarHonda = carro.acelerar.bind(honda);

// this.marca = 'Fiat'
const arrancarFiat = carro.arrancar.bind(fiat);

console.log(carro.acelerar(100, 30));
console.log(acelerarHonda(100, 30));
console.log(arrancarFiat(20, 6));

function imc(altura, peso) {
    return peso / (altura * altura);
}

// como o função imc nao tem um this
// nao precisa passar nada, nesse caso se usa null

const imc170 = imc.bind(null, 1.8);
console.log(+imc170(45).toFixed(2));
