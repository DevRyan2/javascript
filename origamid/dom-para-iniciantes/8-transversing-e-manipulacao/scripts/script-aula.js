// const h1 = document.querySelector('h1')
// const animaisLista = document.querySelector('.animais-descricao')

// h1.innerHTML = '<p>Novo título</p>'

// console.log(h1.innerHTML)
// console.log(h1.outerHTML)
// // console.log(animaisLista.innerText)

// const lista = document.querySelector('.animais-lista')

// console.log(lista.parentElement); // pai

// console.log(lista.parentElement.parentElement); // pai do pai

// console.log(lista.previousElementSibling); // elemento acima

// console.log(lista.nextElementSibling); // elemento abaixo

// // -- / / -- // -- // -- // -- // -- // -- // -- //

// console.log(lista.children) // HTMLcollection com os filhos

// console.log(lista.children[0]); // primeiro filho

// console.log(lista.children[--lista.children.length]) // ultimo filho

// // -- / / -- // -- // -- // -- // -- // -- // -- //

// console.log(lista.querySelectorAll('li')) // todas as LI's em NODElist

// console.log(lista.querySelector('li:last-child')) // ultimo filho

// console.log(lista.previousSibling)

// // -- / / -- // -- // -- // -- // -- // -- // -- //

// // pai.insertBefore(elemento, referencia)
// // dentro do pai(contato), coloque o elemento(animais) antes da referencia(mapa)

// const animais = document.querySelector('.animais')
// const tituloAnimais = animais.querySelector('.titulo')

// const contato = document.querySelector('#contato')
// const titulo = contato.querySelector('.titulo')
// const dados = contato.querySelector('.dados')

// const mapa = document.querySelector('.mapa')

// // animais.appendChild(titulo) // move o titulo para o final de animais-lista

// // contato.removeChild(titulo) // remove o titulo de dentro de contato

// contato.replaceChild(lista, dados)

// contato.insertBefore(lista, titulo)

// // -- / / -- // -- // -- // -- // -- // -- // -- //

// const novoh1 = document.createElement('h1');

// novoh1.innerText = 'Meu novo h1 utilizando appendChild'
// novoh1.classList.add('novo-h1')

// mapa.appendChild(novoh1)

// console.log(novoh1)

const h1 = document.querySelector('h1');

const faq = document.querySelector('.faq');

const cloneTitulo = h1.cloneNode(true);

cloneTitulo.classList.add('azul');

faq.appendChild(cloneTitulo);
