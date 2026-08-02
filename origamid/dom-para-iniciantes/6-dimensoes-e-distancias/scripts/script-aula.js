// funciona com width, height, top e left

const listaAnimais = document.querySelector('.animais-lista');

const heightPadding = listaAnimais.clientHeight; // pega o altura + padding

const heightBorPad = listaAnimais.offsetHeight; // height + padding + border

const scrollHeight = listaAnimais.scrollHeight; // pega a altura contando com scroll

const widthPadding = listaAnimais.offsetWidth; // pega a largura do elemento

console.log(heightPadding);
console.log(heightBorPad);
console.log(heightPadding);
console.log(widthPadding);

console.log('=======================================');

// =================================================

const animaisTop = listaAnimais.offsetTop; // distancia entre o topo do elemento e o topo da página

const primeiroH2 = document.querySelector('h2');

const h2Left = primeiroH2.offsetLeft; // distancia entre o canto esquerdo do elemento e o canto esquerdo da página

console.log(animaisTop);
console.log(h2Left);

console.log('=======================================');

// =================================================

const h2Rect = primeiroH2.getBoundingClientRect();

console.log(h2Rect);

console.log(h2Rect.width); // largura do elemento
console.log(h2Rect.height); // altura do elemento
console.log(h2Rect.left); // largura entre o elemento e o canto esquerdo do site

console.log(h2Rect.right); // largura entre o elemento e o canto direito do site

console.log(h2Rect.top); // distancia entre o topo do elemento e o site com scroll

console.log(h2Rect.bottom); // largura entre o elemento e o fim do site

if (h2Rect.top < 0) {
    console.log('Passou do elemento');
}

console.log('=======================================');

// =================================================

console.log(window.innerWidth); // largura da janela

console.log(window.outerWidth); // largura de toda a janela contando barra de endereço, etc.

console.log(window.innerHeight); // altura da janela

console.log(window.outerHeight); // altura de toda a janela contando com tudo

console.log(window.pageYOffset); // distância total do scroll vertical

console.log(window.pageXOffset); // distância total do scroll horizontal

if (window.innerWidth < 600) {
    console.log('Sua tela é menor do que 600px');
} else {
    console.log('Sua tela é maior do que 600px');
}

console.log('=======================================');

// =================================================

const small = window.matchMedia('(max-width: 600px)').matches;

if (small) {
    console.log('Usuário Mobile');
} else {
    console.log('Usuário Desktop');
}
