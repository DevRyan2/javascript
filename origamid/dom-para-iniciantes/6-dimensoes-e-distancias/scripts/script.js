// Verifique a distância da primeira imagem
// em relação ao topo da página

const primeiraImagem = document.querySelector('img');

console.log(
    `A distancia entre o topo da imagem é o topo do site é de ${primeiraImagem.offsetTop}px`,
);

// Retorne a soma da largura de todas as imagens

function somaImagens() {
    const imagens = document.querySelectorAll('img');

    let soma = 0;

    imagens.forEach((imagem) => {
        soma += imagem.offsetWidth;
    });

    console.log(`A soma de todos as imagens é de ${soma}px`);
}

window.onload = function () {
    somaImagens();
};

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('a');

links.forEach((link) => {
    const linkWidth = link.offsetWidth;
    const linkHeight = link.offsetHeight;

    if (linkWidth >= 48 && linkHeight >= 48) {
        console.log(`${link} Possui boa acessibilidade`);
    } else {
        console.log(`${link} Não possui boa acessibilidade`);
    }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const menu = document.querySelector('.menu');

const mobile = matchMedia('(max-width: 720px)');

mobile.addEventListener('change', () => {
    if (mobile.matches) {
        menu.classList.add('menu-mobile');
    } else {
        menu.classList.remove('menu-mobile');
    }
});

// ==============================================
