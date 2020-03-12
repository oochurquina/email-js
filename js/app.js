
// variables
const email   = document.getElementById('email');
const asunto  = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');
const formularioEnviar = document.getElementById('enviar-mail');
const resetBtn = document.getElementById('resetBtn');

// event listener
eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded',inicioApp);
    // campos del formulario
    email.addEventListener('blur',validarCampo);
    asunto.addEventListener('blur',validarCampo);
    mensaje.addEventListener('blur',validarCampo);
    // boton de enviar en el submit
    formularioEnviar.addEventListener('submit',enviarEmail);
    resetBtn.addEventListener('click', resetFormulario)
    

}
// funciones
function inicioApp(){
    btnEnviar.disabled = true;
}


function validarCampo(){
    // se valida la longitud del texto y que no este vacia
    validarLongitud(this);
    if (this.type==='email'){
        validarEmail(this);
    }
    let errores = document.querySelectorAll('.error');
    if (email.value!=='' && asunto.value !=='' && mensaje.value!==''){
        btnEnviar.disabled = false;
    }
    // console.log(errores);
    // console.log('se valida el campo...');
}
function resetFormulario(e){
    e.preventDefault();
    formularioEnviar.reset();
}

function enviarEmail(e){
    e.preventDefault();
    const spinnerGif = document.querySelector('#spinner');
    spinnerGif.style.display ='block';
    const enviado = document.createElement('img');
    enviado.src = 'img/mail.gif';
    enviado.style.display = 'block';
    setTimeout(() => {
        spinnerGif.style.display = 'none';
        document.querySelector('#loaders').appendChild(enviado);
        setTimeout(() => {
            enviado.remove();
            formularioEnviar.reset();
        }, 5000);
    }, 3000);
}

function validarLongitud(campo){
    if (campo.value.length>0) {
        campo.style.borderBottomColor ='green';
        campo.classList.remove('error');
    } else {
        campo.style.borderBottomColor= 'red';
        campo.classList.add('error');
    }
    // console.log(campo);
}

function validarEmail(campo){

    const mensaje = campo.value;
    // console.log(mensaje);
    if (mensaje.indexOf('@')!==-1){
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}