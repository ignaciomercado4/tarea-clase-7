const $form = document.querySelector('#carta-a-santa');
const $botonEnviar = document.querySelector('#enviar-carta');
const nombre = document.formulario.nombre;
const ciudad = document.formulario.ciudad;
const comportamiento = document.formulario.comportamiento;
const regalos = document.formulario['descripcion-regalo'];


function validarNombre (nombre) {
    if (nombre.length === 0) {
        return 'El nombre ingresado debe tener al menos 1 caracter.';
    }

    if (nombre.lenght >= 50) {
        return 'El nombre ingresado debe ser menor a 50 caracteres.';
    }

    if ((/^[a-zA-Z]+$/).test(nombre) == false) {
        return 'El nombre ingresado debe contener únicamente letras y espacios.';
    }

    return '';
}

function validarCiudad (ciudad) {
    if (ciudad.length === 0) {
        return 'No se ha ingresado ninguna ciudad.';
    }
    
    return '';
}

function validarComportamiento (comportamiento) {
    if (comportamiento.length === 0) {
        return '';
    }

    return '';
}

function validarRegalos (textoRegalos) {
    if (textoRegalos.length === 0) {
        return 'La lista de regalos no puede estar vacía.';
    }
    if (textoRegalos.length >= 100) {
        return 'La lista de regalos debe tener menos de 100 caracteres.'
    }

    return '';
}

