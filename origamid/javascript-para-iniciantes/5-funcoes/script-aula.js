function areaQuadrado(lado) {
    return lado * lado;
}

console.log(areaQuadrado(10));

// ===========================================

function pi() {
    return 3.14;
}

var total = 5 * pi(); // 15.7

console.log(total);

// ===========================================

function imc(peso, altura) {
    var imc = peso / (altura * altura);
    return imc;
}

console.log(imc(43, 1.7));

// ===========================================

function corFavorita(cor) {
    if (cor === 'azul') {
        return 'Você gosta do céu.';
    } else if (cor === 'verde') {
        return 'Você gosta de mato.';
    } else {
        return 'Você gosta de nada.';
    }
}

console.log(corFavorita('azul')); // retorna "Você gosta do céu."
console.log(corFavorita('verde')); //  retorna "Você gosta de mato."
console.log(corFavorita()); // retorna "Você gosta de nada."

// ===========================================

addEventListener('click', function () {
    console.log('Clicou');
});

// ===========================================

function mostrarConsole() {
    console.log('Oie');
}

addEventListener('click', mostrarConsole);

// ===========================================

function imc2(peso, altura) {
    const imc = peso / altura ** 2;
    console.log(imc);
}

imc2(80, 1.8); // undefined

console.log(imc2(80, 1.8)); // retorna undefined

// ===========================================

function terceiraIdade(idade) {
    console.log(typeof idade);

    if (typeof idade !== 'number') {
        return 'Por favor preencha um número';
    } else {
        if (idade >= 60) {
            return true;
        } else {
            return false;
        }
    }

    console.log(idade);
}

console.log(terceiraIdade(59));

// ===========================================

function faltaVisitar(paisesVisitados) {
    var totalPaises = 193;

    return `Falta visitar ${totalPaises - paisesVisitados} países.`;
}

// console.log(totalPaises) não tem como pegar uma variavel dentro de um escopo "{}"

// ===========================================

var profissao = 'Programador';

function dados() {
    var nome = 'Ryan';
    var idade = 18;

    function outrosDados() {
        var endereco = 'Rio de Janeiro';
        var idade = 19;

        return `${nome}, ${idade}, ${endereco}, ${profissao}`;
    }

    return outrosDados();
}

console.log(dados());
// outrosDados() retorna um erro

// ===========================================

imc(80, 1.8);

function imc(peso, altura) {
    const imc = peso / altura ** 2;
    console.log(imc);
}
