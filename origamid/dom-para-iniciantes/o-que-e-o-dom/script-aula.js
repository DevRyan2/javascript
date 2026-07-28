// window.alert('Isso mesmo');

const href = window.location.href;

console.log(href);

// ===============================================

if (
    href === 'http://127.0.0.1:5500/origamid/dom-para-iniciantes/o-que-e-o-dom/'
) {
    console.log('É igual');
}

// ===============================================

const h1Selecionado = document.querySelector('h1');

const h1Classes = h1Selecionado.classList;

const h1Height = h1Selecionado.offsetHeight;

// ===============================================

// alert('Teste')

// ===============================================

h1Selecionado.addEventListener('click', callbackH1);

// ===============================================

function callbackH1() {
    console.log('Clicou em', h1Selecionado.innerText);
}
