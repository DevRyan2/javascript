export default function initAnimationScroll() {
    const sections = document.querySelectorAll('[data-anime="scroll"]');

    // sections[0].classList.add('ativo')

    if (sections.length) {
        function animaScroll() {
            const windowMetade = window.innerHeight * 0.5;

            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = sectionTop - windowMetade < 0;

                if (isSectionVisible) {
                    section.classList.add('ativo');
                } else if (section.classList.contains('ativo')) {

                    section.classList.remove('ativo');

                }
            });
        }

        animaScroll();

        window.addEventListener('scroll', animaScroll);
    }
}
