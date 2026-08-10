const frase2 = 'Ta';

console.log(frase2.repeat(5)); // repete o 'Ta' 5x

console.log('====================================');

// - - / / - - / / - - / / - - / / - - / / - - / / - - / / - - / / - -

let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';

listaItens = listaItens.replace(/[ ]+/g, ', '); // tira os espaços e coloca ', '

console.log(listaItens);

let preco = 'R$ 1200,43';

preco = preco.replace(',', '.');

console.log(preco);

console.log('====================================');

// - - / / - - / / - - / / - - / / - - / / - - / / - - / / - - / / - -

console.log(listaItens);

const arrayLista = listaItens.split(', '); // quebra toda vez que algo selecionado aparecer e retorna uma Array

console.log(arrayLista);

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');
const novoHtml = htmlArray.join('section');

console.log(htmlText);
console.log(htmlArray);
console.log(novoHtml);

const frutasArray = ['Banana', 'Melancia', 'Laranja'];

console.log('====================================');

// - - / / - - / / - - / / - - / / - - / / - - / / - - / / - - / / - -

const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';

if (sexo1.toLowerCase() === 'feminino') {
    console.log('FEMINO');
} else if (sexo2.toLowerCase() === 'feminino') {
    console.log('FEMINO');
} else if (sexo3.toLowerCase() === 'feminino') {
    console.log('FEMINO');
} else {
    console.log('[ERRO] algo está inválido');
}

console.log('====================================');

// - - / / - - / / - - / / - - / / - - / / - - / / - - / / - - / / - -

const valor = '    R$ 23.00    ';

console.log(valor.trim()); // remove espaços do começo e do final
console.log(valor.trimStart()); // remove espaços do começo
console.log(valor.trimEnd()); // remove espaços do final
