export default function initAccordion() {
    const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');

    const primeiroItem = accordionList[0];

    const activeClass = 'ativo';

    if (accordionList.length) {
        primeiroItem.classList.add(activeClass);

        primeiroItem.nextElementSibling.classList.add(activeClass);

        function activeAccordion() {
            this.classList.toggle(activeClass); // adiciona a class ativo ao dt

            this.nextElementSibling.classList.toggle(activeClass); // adiciona a class ativo ao dd
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        });
    }
}
