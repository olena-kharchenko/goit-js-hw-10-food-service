import menu from '../menu.json';
import itemsTemplate from '../templates/menu-items.hbs';

// делаем разметку
const galleryMenu = document.querySelector('ul.js-menu');

const markup = itemsTemplate(menu);
galleryMenu.insertAdjacentHTML('beforeend', markup);
