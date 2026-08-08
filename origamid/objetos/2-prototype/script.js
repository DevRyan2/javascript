// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoa(nome, sobrenome, idade) {

    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade

}

Pessoa.prototype.nomeCompleto = function(){

    return `Seu nome completo é ${this.nome} ${this.sobrenome} e você tem ${this.idade} anos`

}

const ryan = new Pessoa('Ryan', 'Carlos Amorim Souza', 19)
console.log(ryan.nomeCompleto())

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

console.log(Object.getOwnPropertyNames(NodeList.prototype))
console.log(Object.getOwnPropertyNames(HTMLAllCollection.prototype))
console.log(Object.getOwnPropertyNames(Document.prototype))

// Liste os construtores dos dados abaixo

const li = document.querySelector('li');

li; // HTMLLIElement
li.click; // Function
li.innerText; // String
li.value; // Number
li.hidden; // Boolean
li.offsetLeft; // Number
li.click(); // Undefined

// Qual o construtor do dado abaixo:

li.hidden.constructor.name; // String
