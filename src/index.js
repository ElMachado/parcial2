import './scss/styles.scss';
import { createElement } from './js/utils';

const home__baner = document.createElement('div');
const home__img = document.createElement('div');

const root = document.getElementById('root');



home__img.innerHTML = `<img src="https://cdn.pixabay.com/photo/2014/08/28/08/31/model-429733_960_720.jpg" alt="a">`;


root.appendChild(home__baner);    