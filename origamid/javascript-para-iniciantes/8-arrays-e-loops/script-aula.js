var videoGames = ['Switch', 'PS4', 'XBOX'];

var ultimoItem = videoGames.pop(); // remove o ultimo item

// =================================================

for (var numero = 1; numero <= 5; numero++) {
    console.log(numero);
}

// =================================================

var i = 0;

while (i < 10) {
    console.log(i);
    i += 1;
}

// =================================================

var videoGames2 = ['Switch', 'PS4', 'XBOX', '3DS'];

for (var item = 0; item < videoGames2.length; item++) {
    console.log(videoGames2[item]);
}

// =================================================

var videoGames3 = ['Switch', 'PS4', 'XBOX', '3DS'];

for (var item = 0; item < videoGames3.length; item++) {
    console.log(videoGames3[item]);

    if (videoGames3[item] === 'PS4') {
        break;
    }
}

// =================================================

// forEach é um loop onde eu uso uma function com parâmetros

var frutas = ['Banana', 'Pera', 'Maça', 'Abacaxi', 'Uva'];

frutas.forEach(function (fruta, index, frutas) {
    console.log(fruta, index, frutas);
});

// item = fruta | o primeiro parâmetro é o item dentro da array
// index | o segundo parâmetro é o index, onde mostra a posição do item
// array | o terceiro parâmetro onde mostra toda a array eu também posso passar o nome da variável array para dar o mesmo resultado

// =================================================

var numero = 0;
var maximo = 10;

for (; numero < maximo; ) {
    console.log(numero);
    numero++;
}
