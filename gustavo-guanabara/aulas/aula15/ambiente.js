let num = [5, 8, 2, 9, 3]; // 1, 2, 3, 5, 8, 9
// 0, 1, 2, 3, 4, 5

num.push(1); // adiciona um valor ou final, independente do tamanho
num.sort(); // coloca os valores em ordem crescente

console.log(num);

console.log(`O vetor tem ${num.length} posições`); // length ve quantos elementos o vetor tem

console.log(`O primeiro valor do vetor é ${num[0]}`); // [valor] escolhe o elemento você quer pegar [0] é sempre o primeiro

let pos = num.indexOf(5); // retorna a posição do valor, se caso for inválido retorna -1

if (pos == -1) {

    console.log('O valor não foi encontrado!')

} else {

    console.log(`O valor 8 está na posição ${pos}`);

}


function parimp(n) {

    if (n % 2 == 0) {
        return 'par'
    } else {
        return 'impar'
    }

}

let res = parimp(11)

console.log(res)