// Retorne o url da página atual utilizando o objeto window

const href = window.location.href

console.log(href)

// Seleciona o primeiro elemento da página que
// possua a classe ativo

const classAtivo = document.querySelectorAll('.ativo')[0]

console.log(`A primeira class ativo é ${classAtivo.innerText}`)

// Retorne a linguagem do navegador

const linguagemNavegador = window.navigator.language

console.log(`A linguagem do navegador é ${linguagemNavegador}`)

// Retorne a largura da janela 

const larguraJanela = window.innerWidth

console.log(`A largura da janela é de ${larguraJanela}px`)