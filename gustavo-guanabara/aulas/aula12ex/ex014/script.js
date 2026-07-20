function carregar() {
    var msg = window.document.querySelector('div#msg');
    var img = window.document.querySelector('img#imagem');

    var data = new Date();
    var hora = data.getHours();

    msg.innerHTML = `Agora são ${hora} horas.`;

    if (hora >= 0 && hora < 6) {
        // boa madrugada
        img.src = 'madrugada.jpg';
        document.body.style.background = '#04142A';
    } else if (hora >= 6 && hora < 12) {
        // bom dia
        img.src = 'manha.jpg';
        document.body.style.background = '#EAC777';
    } else if (hora >= 12 && hora < 19) {
        // boa tarde
        img.src = 'tarde.jpg';
        document.body.style.background = '#E8951C';
    } else {
        // boa noite
        img.src = 'noite.jpg';
        document.body.style.background = '#19122C';
    }
}
