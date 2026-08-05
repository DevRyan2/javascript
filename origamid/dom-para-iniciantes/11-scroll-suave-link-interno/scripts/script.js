function initTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li');

    const tabContent = document.querySelectorAll('.js-tabcontent section');

    if (tabMenu.length && tabContent.length) {

        tabContent[0].classList.add('ativo');

        function activeTab(index) {

            tabContent.forEach((section) => {

                section.classList.remove('ativo');

            });

            tabContent[index].classList.add('ativo');
        }

        tabMenu.forEach((itemMenu, index) => {

            itemMenu.addEventListener('click', () => {

                activeTab(index);

            });

        });

    }

}

initTabNav();

function initAccordion() {

    const accordionList = document.querySelectorAll('.js-accordion dt');

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

initAccordion();

function initScrollSuave() {

    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollToSection(event) {

        event.preventDefault();

        const href = event.currentTarget.getAttribute('href');

        const section = document.querySelector(href);

        // const topo = section.offsetTop // pega a posição do topo a seção

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });

        // forma alternativa

        // window.scrollTo({
        //     top: topo,
        //     behavior: "smooth",
        // })
    }

    linksInternos.forEach((link) => {

        link.addEventListener('click', scrollToSection);

    });
    
}

initScrollSuave();
