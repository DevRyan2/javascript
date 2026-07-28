var numero = 20;
var numero2 = 10;

numero += numero2; // numero = numero + numero2;

console.log(numero);
console.log(numero2);

// ===================================================

var idade = 19;
var naoPossuiDiabetes = false;

var podeBeber =
    idade >= 18 && naoPossuiDiabetes ? 'Pode beber' : 'Não pode beber';

console.log(podeBeber); // pode beber

// condição ? true : false

// ===================================================

// if abreviado

var possuiFaculdade = true;

if (possuiFaculdade) console.log('Possui Faculdade');
else console.log('Não possui faculdade');
