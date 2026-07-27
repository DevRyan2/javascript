var pessoa = {
    nome: 'Ryan',
    idade: 19,
};

console.log(pessoa.nome);

// =============================================

var quadrado = {
    lados: 4,
    area(lado) {
        return lado * lado;
    },

    perimetro(lado) {
        return this.lados * lado;
    },

    cinco() {
        return 5;
    },
};

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

// =============================================

console.log(typeof console);

// =============================================

var menu = {
    width: 800,
    height: 100,
    backgroundColor: '#84E',
    metadeHeight() {
        return this.height / 2;
    },
};

menu.backgroundColor = '#000';
menu.color = 'blue';

menu.esconder = function () {
    console.log('Escondi');
};

var bg = menu.backgroundColor;
