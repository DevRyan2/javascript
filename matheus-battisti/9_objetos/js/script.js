var obj = {
    nome:  'Ryan',
    idade: 19,
    profissao: 'Programador',
    estaTrabalhando: true,
}

console.log(obj)

console.log(typeof obj)

console.log(obj.nome)
console.log(obj.idade)
console.log(obj.profissao)

console.log(`O meu nome é ${obj.nome} tenho ${obj.idade} anos, e sou ${obj.profissao}`)

obj.nome = 'Carlos'

console.log(obj.nome)

console.log(obj)

obj.graduacao = true

console.log(obj)