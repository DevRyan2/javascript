var agora = new Date();

var diaSem = agora.getDay();

// var diaSem = 7

/*

    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado

*/

console.log(diaSem);

var diaDaSemana;

if (diaSem === 0) {
    diaDaSemana = 'Domingo';
} else if (diaSem === 1) {
    diaDaSemana = 'Segunda Feira';
} else if (diaSem === 2) {
    diaDaSemana = 'Terça Feira';
} else if (diaSem === 3) {
    diaDaSemana = 'Quarta Feira';
} else if (diaSem === 4) {
    diaDaSemana = 'Quinta Feira';
} else if (diaSem === 5) {
    diaDaSemana = 'Sexta Feira';
} else if (diaSem === 6) {
    diaDaSemana = 'Sábado';
} else {
    console.log('[ERRO] dia inválido');
}

console.log(`Hoje é ${diaDaSemana}`);

switch (diaSem) {
    case 0:
        diaDaSemana = 'Domingo';
        break;

    case 1:
        diaDaSemana = 'Segunda Feira';
        break;

    case 2:
        diaDaSemana = 'Terça Feira';
        break;

    case 3:
        diaDaSemana = 'Quarta Feira';
        break;

    case 4:
        diaDaSemana = 'Quinta Feira';
        break;

    case 5:
        diaDaSemana = 'Sexta Feira';
        break;

    case 6:
        diaDaSemana = 'Sábado';
        break;

    default:
        console.log('[ERRO] dia inválido');
        break;
}

console.log(`Hoje é ${diaDaSemana}`);
