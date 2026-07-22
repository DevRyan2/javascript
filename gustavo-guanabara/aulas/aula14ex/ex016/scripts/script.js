function contar() {
    var inicio = document.querySelector('#inicio')

    var fim = document.querySelector('#fim')

    var passo = document.querySelector('#passo')

    var res = document.querySelector('div#res')

    var inicioValor = Number(inicio.value)
    var fimValor = Number(fim.value)
    var passoValor = Number(passo.value)

    for (inicioValor - 1; inicioValor <= fimValor; inicioValor += passoValor) {
        console.log(inicioValor)
    }

}