const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array

console.log(comidas);

const primeiraComida = comidas.shift();
const ultimaComida = comidas.pop();

const adicionarComeco = comidas.unshift('Peixe', 'Batata');
const adicionarFinal = comidas.push('Arroz');

console.log(comidas);

let estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes

console.log(estudantes);

estudantes.sort(); // deixa na ordem alfabetica
estudantes.reverse(); // deixa a ordem ao contrario
console.log(estudantes.includes('Joana')); // verifica se joana faz parte dos alunos
console.log(estudantes.includes('Juliana')); // verifica se juliana faz parte dos alunos

console.log(estudantes);

let html = `<section>
    <div>Sobre</div>
    <div>Produtos</div>
    <div>Contato</div>
</section>`;
// Substitua section por ul e div com li,
// utilizando split e join

html = html.split('section').join('ul');
html = html.split('div').join('li');

console.log(html);

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável

const cloneCarros = carros.slice(); // clona carros

const removerUltimoCarro = carros.pop();

console.log(carros);

console.log(cloneCarros)
