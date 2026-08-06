function Carro(marcaAtribuida, precoAtribuido) {
    this.marca = marcaAtribuida;
    this.preco = precoAtribuido;
}

const honda = new Carro('Honda', 2000);

const fiat = new Carro('Fiat', 4000);

fiat.marca = 'Fiat';

/* 
const honda = new Carro()

1- cria um novo objeto

honda = {}

2 - define o protótipo

honda.prototype = Carro.prototype

3 - aponta a variável this para o objeto

this.honda

4 - executa a função, substituindo this pelo objeto

honda.marca = 'Marca'
honda.preco = 0

5 - retorna o novo objeto


*/

// - / / - / / - / / - / / - / / - / / - / / - / /

function Carro2(marca, precoInicial) {
    this.taxa = 1.2;

    const precoFinal = precoInicial * this.taxa;

    this.marca = marca;
    this.preco = precoFinal;

    console.log(this);
}

const ferrari = new Carro2('Ferrari', 1000000);
