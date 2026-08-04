// Duplique o menu e adicione ele em copy

const menu = document.querySelector('.menu');
const footer = document.querySelector('.copy');
const paragrafoFooter = footer.querySelector('p')

const menuClone = menu.cloneNode(true);

footer.appendChild(menuClone)
footer.insertBefore(menuClone, paragrafoFooter)

// Selecione o primeiro DT da dl de Faq

const faqLista = document.querySelector('.faq-lista')

const dt = faqLista.children[0]

console.log(dt)

// Selecione o DD referente ao primeiro DT



// Substitua o conteúdo html de .faq pelo de .animais
