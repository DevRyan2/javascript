function espera(texto) {

    console.log('Passou 1 segundo');

}

const btn = document.querySelector('button');

btn.addEventListener('click', handleClick);

function handleClick() {

    setTimeout(() => {

        this.classList.add('active');

    }, 1000);

}

setTimeout(() => {

    console.log('testando');

}, 1000);

for (let i = 0; i <= 20; i++) {

    setTimeout(() => {

        console.log(i);

    }, 1000 * i);

}

function Carro(carro) {

    this.carro = carro;

    return `Seu carro é uma ${carro}`;

}

const ferrari = new Carro('ferrari');

function loop(texto) {

    console.log(texto);

}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

let i = 0;

const limparIntervalo = setInterval(() => {

    console.log(i++);

    if (i > 20) {

        clearInterval(limparIntervalo);

    }

}, 300);
