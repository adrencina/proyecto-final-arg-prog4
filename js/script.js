



/* Inicio menu fijo al hacer scroll */

const menu = document.querySelector("#menuHeader");
const menuOffsetTop = menu.offsetTop;

function fixMenu() {
    if (window.pageYOffset >= menuOffsetTop){
        menu.classList.add('menu-fijo');
        menu.style.position = 'fixed';
        menu.style.top = '0';
    } else {
        menu.classList.remove('menu-fijo');
        menu.style.position = 'absolute';
        menu.style.top = '80vh';
    }
}

window.addEventListener('scroll', fixMenu);

/* Fín menu fijo al hacer scroll */

/* Función para animar la barra */

function animateProgress(id, percent) {
    const progress = document.getElementById(id);
    const percentText = document.getElementById(id + "-percent");

    let width = 0;
    const intervalId = setInterval(frame, 10);

    function frame() {
    if (width >= percent) {
        clearInterval(intervalId);
    } else {
        width++;
        progress.style.width = width + "%";
        percentText.innerText = width + "%";
    }
}
}

animateProgress("html-progress", 95);
animateProgress("css-progress", 85);
animateProgress("js-progress", 60);



