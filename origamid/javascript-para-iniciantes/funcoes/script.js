// Crie uma função para verificar se um valor é Truthy

/*

function verificarIdade(idade) {

    if(idade !== 'number') {

        return 'Erro, digite a sua idade'

    } else if (idade >= 18) {
        
        return true

    } else {

        return false

    }

}

*/

function isTruthy(dado) {

    return !!dado

}

console.log(isTruthy(null))

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function areaQuadrado(lado) {

    return lado * 4

}

console.log(areaQuadrado(5))

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome) {

    return `Seu nome completo é ${nome} ${sobrenome}`

}

console.log(nomeCompleto('Ryan', 'Carlos Amorim souza'))

// Crie uma função que verifica se um número é par

function imparPar(n) {

    if (typeof n !== 'number') {

        return 'O valor digitado é inválido, tente novamente!'

    } else {

        if (n % 2 == 0) {
    
            return 'Par'
    
        } else {
    
            return 'Ímpar'
    
        }

    }


}

console.log(imparPar(4))

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDeDado(dado) {

    return typeof dado

}

console.log(tipoDeDado(Array))

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.

addEventListener('click', function () {

    console.log('Ryan Carlos Amorim Souza')

})

// Corrija o erro abaixo

var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

console.log(precisoVisitar(20));
console.log(jaVisitei(20));
