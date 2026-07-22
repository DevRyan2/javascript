function contar() {
    let inicio = document.querySelector('#txti');
    let fim = document.querySelector('#txtf');
    let passo = document.querySelector('#txtp');
    let res = document.querySelector('#res');

    if (
        inicio.value.length == 0 ||
        fim.value.length == 0 ||
        passo.value.length == 0
    ) {

        res.innerHTML = 'Impossível contar!'
        window.alert('[ERRO] Faltam os dados!');

    } else {
        res.innerHTML = 'Contando: <br>';

        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);

        if (p <= 0){

            window.alert('Passo inválido! Considerando PASSO 1')
            
            p = 1

        }

        if (i < f) {

            for (let c = i; c <= f; c += p) { // contagem crescente
                res.innerHTML += ` \u{1F449} ${c}`;

            }

        } else {

            for (let c = i; c >= f; c -= p) { // contagem regressiva
                res.innerHTML += ` \u{1F449} ${c}`;
            }

        }

        res.innerHTML += ` \u{1F3C1}`;

    }
}