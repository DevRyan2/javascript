// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrao desses links

const linksInternos = document.querySelectorAll('a[href^="#"]');

function handleLink(event) {
    event.preventDefault();
    linksInternos.forEach((link) => {
        link.classList.remove('ativo');
    });

    event.currentTarget.classList.add('ativo');
}

linksInternos.forEach((link) => {
    link.addEventListener('click', handleLink);
});

// selecione todos os elementos do site começando a partir do body
// ao clique mostre exatamente quais elementos estão sendo clicados

function mostrarElemento(event) {
    console.log(event.target, event.target.innerText);
}

document.body.addEventListener('click', mostrarElemento);

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

/* 
function removerElemento(event) {

    console.log('Você removeu', event.target)
    const remover = event.target.remove()

}

window.addEventListener('click', removerElemento)
*/

// se o usuário clicar na tecla (t), aumente todo o texto do site

function aumentarFonte(event) {
    if (event.key === 't') {
        document.documentElement.classList.toggle('font-size');
    }
}

window.addEventListener('keydown', aumentarFonte);
