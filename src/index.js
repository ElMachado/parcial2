import './scss/styles.scss';
import {
    createElement
} from './js/utils';
const el = document.createElement("div");
const objAttr = {
    class: "inn-container home"
};
const children = [

    createElement(
        "i", {
            class: " fas fa-hand-paper"
        }
    ), createElement(
        "p", {
            class: "home__banner__text"
        },
        ['Sign language']
    ),
    createElement("div", {
        id:'imagen',
        class: "home__img",
    }),
    createElement(
        "div", {
            class: "home__letras"
        },

        [`<p>e</p>`]
    ),
    createElement(
        "div", {
            class: "home__letras"
        },

        [`<p>i</p>`]
    ),
    createElement(
        "div", {
            class: "home__letras"
        },

        [`<p>l</p>`]
    ),
    createElement(
        "div", {
            class: "home__letras"
        },

        [`<p>o</p>`]
    ),
    createElement(
        "div", {
            class: "home__letras"
        },

        [`<p>r</p>`]
    ),
    createElement(
        "div", {
            class: "home__letras"
        },

        [`<p>t</p>`]),
    createElement(
        "div", {
            class: "home__letras"
        },

        [`<p>v</p>`]),
    createElement(
        "div", {
            class: "home__letras"

        },

        [`<p>w</p>`]
    )
];

function click( valor = "e.png" ) {
    
    children[2].innerHTML=` <img src="src/images/${valor}" alt="" style="width: 200px ;height: 400px; margin-left:400px;margin-right:300px; border-radius: 10;border-color: #FFFFFF;padding: 0px;">`;
   
}

 
children[3].addEventListener('click',(e) => click("e.png"));
children[4].addEventListener('click',(e) => click("i.png"));
children[5].addEventListener('click',(e) => click("l.png"));
children[6].addEventListener('click',(e) => click("o.png"));
children[7].addEventListener('click',(e) => click("r.png"));
children[8].addEventListener('click',(e) => click("t.png"));
children[9].addEventListener('click',(e) => click("v.png"));
children[10].addEventListener('click',(e) => click("w.png"));

children[2].innerHTML=`<img src="src/images/e.png" alt="" srcset=""  style="width: 200px ;height: 400px; margin-left:400px;margin-right:300px; border-radius: 10;border-color: #FFFFFF; ">`;
const app = createElement(el, objAttr, children);

console.log(app);

const root = document.getElementById("root");
root.appendChild(app);