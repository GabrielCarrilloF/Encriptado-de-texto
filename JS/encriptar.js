let textareaEntrada = document.getElementById('entradaTexto');
let textareaSalida = document.getElementById('salidaTexto');
let botonCopiar = document.getElementById('btnCopiar');
let mensajes = document.getElementById('encripDesencripMensajes');


function btnEncriptar(){
    let texto = extraerTexto();
    if (texto != false) {
        mostrarResultado();
        textareaSalida.value = encriptar(texto);
    }
}



function btnDesencriptar() {
    let texto = extraerTexto();
    if (texto != false) {
        mostrarResultado();
        textareaSalida.value = desencriptar(texto);
    }
}

function extraerTexto() {
    let texto = textareaEntrada.value;

    texto = texto.toLowerCase();

    if (texto == '') {
        limpiar();
        mostrarToast('Por favor, ingresa tu texto');
        return false;
    }else{
        if (!validaAcento(texto)) {
            return texto;
        }else {
            mostrarToast('¡Oops! Sin acentos');
            return false;
        }
    }
}

function copiarTexto() {
    textareaSalida.select();
    textareaSalida.setSelectionRange(0, 99999);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();

    mostrarToast('Texto copiado');
}

function mostrarToast(mensaje) {
    let toast = document.getElementById('toast');

    toast.textContent = mensaje;

    var x = document.getElementById("toast");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

function mostrarResultado()  {
    textareaSalida.style.display = 'block';
    botonCopiar.style.display = 'block';
    mensajes.style.display = 'none';
}

function limpiar(){
    textareaSalida.style.display = 'none';
    botonCopiar.style.display = 'none';
    mensajes.style.display = 'block';
    textareaEntrada.value = '';
}

function validaAcento(texto){
    const acentos = /[ÄËÏÖÜáéíóúäëïöü]/i;
  return acentos.test(texto);
}

function encriptar(texto){
    const reemplazos = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
      };
    
    return texto.replace(/a|e|i|o|u/g, (match) => reemplazos[match]);
}

function desencriptar(texto) {
    const reemplazos = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
      };
    
    return texto.replace(/ai|enter|imes|ober|ufat/g, (match) => reemplazos[match]);
}