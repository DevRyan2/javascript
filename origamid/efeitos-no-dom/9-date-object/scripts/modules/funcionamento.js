export default function initFunctionamento() { }

const funcionamento = document.querySelector('[data-semana]');

const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);
const dataAgora = new Date();

const diaAgora = dataAgora.getDay();
const horarioAgora = dataAgora.getHours();

console.log(diasSemana);
console.log(horarioSemana);
console.log(diaAgora);
console.log(horarioAgora)
