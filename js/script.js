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
