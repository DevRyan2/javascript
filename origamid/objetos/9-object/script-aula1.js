const pessoa = new Object({
    nome: 'Ryan',
    idade: 19,
});

console.log(pessoa);

const carro = {
    init(marca) {
        this.marca = marca;

        return this;
    },

    acelerar() {
        return this.marca + ' acelerou';
    },

    buzinar() {
        return 'buzinou';
    },
};

const honda = Object.create(carro).init('Honda');
console.log(honda.acelerar());

const ferrari = Object.create(carro).init('Ferrari');
console.log(ferrari.acelerar());

// -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / /
console.log('==============================================');

console.log('Utilizando o Object.assign()');
// (alvo, objeto, objeto, objeto...)
// modifica o objeto alvo, podendo ate substituir valores

const funcaoAutomovel = {
    acelerar() {
        return 'Acelerou';
    },

    buzinar() {
        return 'Buzinou';
    },
};

const moto = {
    rodas: 2,
    capacete: true,
};

Object.assign(moto, funcaoAutomovel, carro);

console.log(moto);
console.log(moto.acelerar());

// -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / / -- / /
console.log('==============================================');

console.log('Object.defineProperties()');
// (alvo, propriedades)

const moto2 = {
    capacete: true,
};

Object.defineProperties(moto2, {
    rodas: {
        // value: 2,
        configurable: false, // impede deletar e mudança de valor
        enumerable: true, // torna enumerável

        get() {
            // não pode ter valor utilizando get e set

            return this._rodas;
        },

        set(valor) {
            this._rodas = valor * 4 + ' Total rodas';
        },
    },
    capacete: {
        value: true,
        configurable: true,
        writable: false, // impede mudança de valor
    },
});

console.log(moto2);

