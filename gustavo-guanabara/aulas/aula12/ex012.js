var agora = new Date();
var hora = agora.getHours();

var periodo;
var saudacao;

if (hora >= 0 && hora < 6) {
    periodo = 'da madrugada';
    saudacao = 'Boa madrugada';
} else if (hora < 12) {
    periodo = 'da manhã';
    saudacao = 'Bom dia';
} else if (hora < 19) {
    periodo = 'da tarde';
    saudacao = 'Boa tarde';
} else {
    periodo = 'da noite';
    saudacao = 'Boa noite';
}

console.log(`Agora são exatamente ${hora} horas ${periodo}`);
console.log(saudacao);
