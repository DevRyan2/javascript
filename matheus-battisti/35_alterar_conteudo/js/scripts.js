// selecionar elementos

var titulo = document.querySelector('#titulo')

console.log(titulo)

// innerHTML
titulo.innerHTML = 'Testando o innerHTML!'


// textContent -> mais utilizado, recomendado e performático

var subtitulo = document.querySelector('.subtitulo')

console.log(subtitulo)

subtitulo.textContent = 'Testando o textContent'