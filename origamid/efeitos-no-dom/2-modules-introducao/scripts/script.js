import initScrollSuave from './modules/scroll-suave.js';
import initAnimationScroll from './modules/animacao-scroll.js';
import initAccordion from './modules/accordion.js';
import initTabNav from './modules/tabnav.js';
import * as teste from './modules/teste.js';
// import {testando as teste, teste2} from './modules/teste.js'

teste.testando();
teste.teste2();
console.log(teste.senha)

initScrollSuave(); // scroll suave
initAnimationScroll(); // animacao do scroll
initAccordion(); // accordion
initTabNav();

console.log(this)