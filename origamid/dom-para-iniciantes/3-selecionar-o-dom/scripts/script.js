// Retorne no console todas as imagens do site

const imagens = document.querySelectorAll('img')

console.log(imagens)

// Retorne no console apenas as imagens que começaram com a palavra imagem

const imagens2 = document.querySelectorAll('[src^="img/imagem"]')

console.log(imagens2)

// Selecione todos os links internos (onde o href começa com #)

const linksInterno = document.querySelectorAll('[href^="#"]')

console.log(linksInterno)

// Selecione o primeiro h2 dentro de .animais-descricao

const animais = document.querySelector('.animais-descricao')
const h2 = animais.querySelector('h2')

console.log(h2)

// Selecione o último p do site

const paragrafos = document.querySelectorAll('p')

console.log(paragrafos[paragrafos.length - 1])

