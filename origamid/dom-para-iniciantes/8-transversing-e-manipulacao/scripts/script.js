// Duplique o menu e adicione ele em copy

const menu = document.querySelector('.menu');
const footer = document.querySelector('.copy');
const paragrafoFooter = footer.querySelector('p');

const menuClone = menu.cloneNode(true);

footer.insertBefore(menuClone, paragrafoFooter);

// Selecione o primeiro DT da dl de Faq

const faq = document.querySelector('.faq');

const dt = faq.querySelector('dt');

console.log(dt);

// Selecione o DD referente ao primeiro DT

const dd = dt.nextElementSibling;

console.log(dd);

// Substitua o conteúdo html de .faq pelo de .animais]

const animais = document.querySelector('.animais');

faq.innerHTML = animais.innerHTML;

