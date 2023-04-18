var nombre = document.getElementById('one-input');
var email = document.getElementById('two-input');
var error = document.getElementById('error');
error.style.color = 'red';

//var btn = document.querySelector('[data-form-btn]');


function enviarFormulario () {
    alert('Enviando datos...');

    var mensajeError = [];

    if(nombre.value === null || nombre.value === ''){
        mensajeError.push('Ingresa tu nombre');
    }

    if(email.value === null || email.value === ''){
        mensajeError.push('Ingrese su direccion de correo electronico');
    }

    error.innerHTML = mensajeError.join(' , ');

    return false;
}



//btn.addEventListener("click" , function () {
//    alert("Datos enviados satisfactoriamente")
//});
