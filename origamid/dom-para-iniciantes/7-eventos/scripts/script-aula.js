// const img = document.querySelector('img');

// img.addEventListener('click', () => {

//     console.log('Clicou');

// });

// ==============================================

// separando a função do EventListener

// function clicar(event) {
//     console.log('clicou 2', event)
// }

// img.addEventListener('click', clicar)

// ==============================================

const animaisLista = document.querySelector('.animais-lista');

function executarCallback(event) {
    const currentTarget = event.currentTarget; // this
    const target = event.target; // onde o clique ocorreu
    const type = event.type; // tipo de evento
    const path = event.path;

    console.log(currentTarget, target, type, path);
}

// animaisLista.addEventListener('click', executarCallback);

// ==============================================

const linkExterno = document.querySelector('a[href^="http"]');

function handleLinkExterno(event) {
    event.preventDefault();
    console.log(event);
    console.log(this.getAttribute('href'));
    console.log(event.currentTarget);
}

linkExterno.addEventListener('click', handleLinkExterno);

// ==============================================

const h1 = document.querySelector('h1');

function handleEvent(event) {
    console.log(event.type, event);
}

// h1.addEventListener('click', handleEvent);
// h1.addEventListener('mouseenter', handleEvent);
// h1.addEventListener('mouseout', handleEvent);
// h1.addEventListener('mousemove', handleEvent);

// window.addEventListener('scroll', handleEvent)
// window.addEventListener('resize', handleEvent)
// window.addEventListener('keydown', handleEvent)

// ==============================================

function handleKeyboard(event) {
    if (event.key === 'a') {
        document.body.classList.toggle('azul');
    }

    console.log(event.key);
}

window.addEventListener('keydown', handleKeyboard);

// ==============================================

const imgs = document.querySelectorAll('img');

function handleImg(event) {
    console.log(event.currentTarget.getAttribute('src'));
}

imgs.forEach((img) => {
    img.addEventListener('click', handleImg);
});
