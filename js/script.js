



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


/* Inicio Formulario */

const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const campos = {
	nombre: false,
    apellido: false,
	correo: false,
}

const validarFormulario = (e) => {
	switch (e.target.name) {
        case "nombre":
            if(expresiones.nombre.test(e.target.value)){
                document.getElementById('grupo-nombre').classList.remove('form-grupo-incorrecto');
                document.getElementById('grupo-nombre').classList.add('form-grupo-correcto');
                document.querySelector('#grupo-nombre i').classList.add('fa-check-circle');
                document.querySelector('#grupo-nombre i').classList.remove('fa-square-xmark');
                document.querySelector('#grupo-nombre .form-input-error').classList.remove('form-input-error-activo');
                campos[nombre] = true;
            } else {
                document.getElementById('grupo-nombre').classList.add('form-grupo-incorrecto');
                document.getElementById('grupo-nombre').classList.remove('form-grupo-correcto');
                document.querySelector('#grupo-nombre i').classList.add('fa-square-xmark');
                document.querySelector('#grupo-nombre i').classList.remove('fa-check-circle');
                document.querySelector('#grupo-nombre .form-input-error').classList.add('form-input-error-activo');
                campos[nombre] = false;
            }
        break;
        case "apellido":
            if(expresiones.apellido.test(e.target.value)){
                document.getElementById('grupo-apellido').classList.remove('form-grupo-incorrecto');
                document.getElementById('grupo-apellido').classList.add('form-grupo-correcto');
                document.querySelector('#grupo-apellido i').classList.add('fa-check-circle');
                document.querySelector('#grupo-apellido i').classList.remove('fa-square-xmark');
                document.querySelector('#grupo-apellido .form-input-error').classList.remove('form-input-error-activo');
                campos[apellido] = true;
            } else {
                document.getElementById('grupo-apellido').classList.add('form-grupo-incorrecto');
                document.getElementById('grupo-apellido').classList.remove('form-grupo-correcto');
                document.querySelector('#grupo-apellido i').classList.add('fa-square-xmark');
                document.querySelector('#grupo-apellido i').classList.remove('fa-check-circle');
                document.querySelector('#grupo-apellido .form-input-error').classList.add('form-input-error-activo');
                campos[apellido] = false;
            }
        break;
        case "correo":
            if(expresiones.correo.test(e.target.value)){
                document.getElementById('grupo-correo').classList.remove('form-grupo-incorrecto');
                document.getElementById('grupo-correo').classList.add('form-grupo-correcto');
                document.querySelector('#grupo-correo i').classList.add('fa-check-circle');
                document.querySelector('#grupo-correo i').classList.remove('fa-square-xmark');
                document.querySelector('#grupo-correo .form-input-error').classList.remove('form-input-error-activo');
                campos[correo] = true;
            } else {
                document.getElementById('grupo-correo').classList.add('form-grupo-incorrecto');
                document.getElementById('grupo-correo').classList.remove('form-grupo-correcto');
                document.querySelector('#grupo-correo i').classList.add('fa-square-xmark');
                document.querySelector('#grupo-correo i').classList.remove('fa-check-circle');
                document.querySelector('#grupo-correo .form-input-error').classList.add('form-input-error-activo');
                campos[correo] = false;
            }
        break;
    }
}


inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});


formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');

	if(campos.nombre && campos.apellido && campos.correo && terminos.checked ){
		formulario.reset();

		document.getElementById('form-mensaje-exito').classList.add('form-mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('form-mensaje-exito').classList.remove('form-mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('form-aviso').classList.add('form-aviso-activo');
	}
});