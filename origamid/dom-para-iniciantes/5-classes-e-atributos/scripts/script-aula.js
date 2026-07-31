const menu = document.querySelector('.menu');

// ==============================================

menu.classList.add('ativo', 'teste'); // adiciona uma class

// ==============================================

menu.classList.remove('azul'); // remove uma class

// ==============================================

menu.classList.toggle('azul'); // se tiver a class selecionada remove e se não tiver adiciona

// ==============================================

if (menu.classList.contains('azul')) {
    menu.classList.add('possui-azul');
} else {
    menu.classList.add('nao-possui-azul');
}

// ==============================================

// jeito antigo de adicionar uma classe (não recomendado)

menu.className += ' vermelho';

console.log(menu.className);

// ==============================================

const animais = document.querySelector('.animais');

console.log(animais.attributes[1]); // retorna o 2° atributo
console.log(animais.attributes['data-texto']); // retorna o atributo class

// ==============================================

const img = document.querySelector('img');

const srcImg = img.getAttribute('src'); // retorna o valor do atributo

const trocarAlt = img.setAttribute('alt', 'É uma raposa'); // troca um atributo por outro

const alt = img.getAttribute('alt');

const possuiAlt = img.hasAttribute('alt'); // verifica se tem o atributo e retorna true / false

const possuiTitle = img.hasAttribute('title');

const idRemove = img.removeAttribute('id'); // remove o id

console.log(srcImg); // img/imagem1.jpg

console.log(possuiAlt); // true
console.log(possuiTitle); // false

console.log(alt); // troca raposa por é uma raposa

// ==============================================

animais.attributes = 'class="ativo"'; // não funciona, read-only

const carro = {
    portas: 4,
    andar(km) {
        console.log(`Andou ${km}km`);
    },
};

carro.portas = 20; // propriedade mutável

console.log(carro.portas);
