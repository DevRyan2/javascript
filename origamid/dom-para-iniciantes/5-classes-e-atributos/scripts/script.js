// Adicione a classe ativo a todos os itens do menu

const itensMenu = document.querySelectorAll('.menu a');

itensMenu.forEach((item) => {

    item.classList.add('ativo');
    console.log(item);

});

console.log('========================================')

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

itensMenu.forEach((item) => {

    item.classList.remove('ativo');
    console.log(item);

})

itensMenu[0].classList.add('ativo')
console.log(itensMenu[0].classList)

console.log('========================================')

// Verifique se as imagens possuem o atributo alt

const imagens = document.querySelectorAll('img')

imagens.forEach((imagem) => {

    const possuiAtributo = imagem.hasAttribute('alt')

    if(possuiAtributo) {

        console.log(imagem, 'Tem alt');

    } else {

        console.log(imagem, 'Não tem alt');

    }

});

console.log('========================================')

// Modifique o href do link externo no menu

const linkExterno = document.querySelector('a[href^="http"]')

linkExterno.setAttribute('href', 'https://www.google.com/')

console.log(linkExterno)