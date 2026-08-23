const div = document.querySelector('[data-cor]');

div.dataset.height = 1000;
div.dataset.animaScroll = 'right';

delete div.dataset.width;
console.log(div);
console.log(div.dataset.cor);
