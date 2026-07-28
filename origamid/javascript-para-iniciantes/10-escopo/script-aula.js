'use strict';

// Variáveis declaradas no escopo pai da função, conseguem ser acessadas pelas funções.

var carro = 'Fusca';

function mostrarCarro() {
    console.log(carro);
}

mostrarCarro(); // mostra fusca no console

console.log(carro); // Erro, carro is not defined

// =============================================

if (true) {
    const mes = 'Dezembro';

    console.log(mes);
}

// console.log(mes)

// =============================================

if (true) {
    const carro2 = 'Fusca';
    console.log(carro);
}

// console.log(carro2)

// =============================================

{
    var carros = 'Ferrari';
    const ano = 2018;
}

console.log(carros); // Ferrari

// console.log(ano); // erro ano is not defined

// =============================================

var i = 50;

for (let i = 0; i < 10; i++) {
    console.log(`Número ${i}`);
}

console.log(i * 10);

// =============================================

const semana = 'Sexta';

// semana = 'Domingo' // erro, tentou modificar o valor

// const semana; erro, declarou sem valor

console.log(semana);

// =============================================

const data = {
    ano: 2018,
    mes: 'Dezembro',
};

data.ano = 2026;
data.dia = 28;
