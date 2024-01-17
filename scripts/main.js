/**
 * @author Adrian Iglesias (Estudiante)
 * @github
 */

const formulario = document.querySelector('#formulario');
const nombre = document.querySelector('#nombre');
const correo = document.querySelector('#correo');
const informacion = document.querySelector('#informacion');
const reserva = document.querySelector('#reserva');
const info = document.querySelector('#info');
const mensaje = document.querySelector('#mensaje');
const enviar =document.querySelector('#enviar');




let mensajesErrores = []












const validar = (e) => {
    e.preventDefault()
    // miElemento.classList.add('hide'); esto pa esconder el span
    // miElemento.classList.add('error');
    // miElemento.classList.remove('hide'); esto para eliminar el span
    mensajesErrores = []
    !/^[679][0-9]{8}$/.test(telefono.value.trim()) && mensajesErrores.push('El teléfono no es válido, debe contener 8 dígitos y empezar por 6, 7 u 9')
    nombre.value.trim().length === 0 && mensajesErrores.push('El nombre es un campo obligatorio')
    apellido.value.trim().length === 0 && mensajesErrores.push('El apellido es un campo obligatorio')
    edad.value.trim().length === 0 && mensajesErrores.push('La edad es un campo obligatorio')
    pais.value.trim().length === 0 && mensajesErrores.push('El país es un campo obligatorio')
    ciudad.value.trim().length === 0 && mensajesErrores.push('La ciudad es un campo obligatorio')
    direccion.value.trim().length === 0 && mensajesErrores.push('La dirección es un campo obligatorio')
    //expresion regular para el codigo postal de españa
    !/^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/.test(codPostal.value.trim()) && mensajesErrores.push('El código postal no es válido')
    //matricula de coche española
    !/^[0-9]{4}\s[B-DF-HJ-NP-TV-Z]{3}$/.test(matricula.value.trim()) ? mensajesErrores.push("La matrícula no es válida") : null
    //matricula normal
    !/^\d{4}\s[A-Z]{3}$/.test(matricula.value.trim()) ? mensajesErrores.push("La matrícula no es válida") : null
    //Validar el correo electronico
    !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/.test(correo.value.trim()) ? mensajesErrores.push("El correo electrónico no es válido") : null
    //Validar la contraseña
    !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(contrasena.value.trim()) ? mensajesErrores.push("La contraseña no es válida") : null
    //Validar el mensaje
    mensaje.value.trim().length < 10 && mensajesErrores.push('Mensaje demasiado corto')
    //Validar el nombre
    !/^[a-zA-Z0-9]*$/.test(nombre.value.trim()) && mensajesErrores.push('El nombre no tiene caracteres válidos')
    //Validar email
    !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(correo.value.trim()) && mensajesErrores.push('Introduce una dirección de correo electrónico válida')
    //Validar Personaje radio button
    // let check = false
    // document.formulario.actores.forEach(actor =>
    // actor.checked ? check = true : null);
    // !check && mensajesErrores.push('Selecciona al menos un personaje')
    //Validar checkbox
    // check = false
    // document.formulario.pelicula.forEach(peli =>
    // peli.checked ? check = true : null);
    // !check && mensajesErrores.push('Selecciona si te gusta o no la película')
    //Validar personaje select
    // document.formulario.personaje.value === '0' && mensajesErrores.push('Selecciona un personaje')


    //ENVIAR O MOSTRAR MENSAJES DE ERROR

    if (mensajesErrores.length === 0 && confirm ("¿Estás seguro de enviar el formulario?")){
        formulario.submit()
    } else if (mensajesErrores.length > 0) {
        errores.textContent = ""
        console.log(mensajesErrores)
        mensajesErrores.forEach(function(mensaje){
            const lili = document.createElement('li')
            lili.textContent = mensaje
            errores.appendChild(lili)
        })
    }

    //Evento correspondiente al botón de enviar


}

formulario.addEventListener('submit', validar)

