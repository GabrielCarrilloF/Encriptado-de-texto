let textareaEntrada = document.getElementById('entradaTexto');
let textareaSalida = document.getElementById('salidaTexto');
let botonCopiar = document.getElementById('btnCopiar');
let mensajes = document.getElementById('encripDesencripMensajes');

function btnEncriptar(){
    let texto = textareaEntrada.value;

    texto = texto.toLowerCase();

    if (texto == '') {
        limpiar();
    }else{
        mostrarResultado();
        if (!validaAcento(texto)) {
            textareaSalida.value = encriptar(texto);
        }else {
            textareaSalida.value = '¡Oops! Ocurrió un error :(';
        }
    }

    return texto;
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
    const acentos = /[áéíóúü]/i;
  return acentos.test(texto);
}

function encriptar(texto){
    let tamTexto = texto.length;
    let letras = [];
    let posicionVocal = [];
    let textoEncriptado = '';
    const vocales = /[aeiou]/i;


    for (i = 0; i<tamTexto; i++) {
        letras.push(texto[i]);
        if (vocales.test(texto[i])) {
            posicionVocal.push(i);
        } 
    }

    for (i = 0; i<posicionVocal.length; i++) {
        if (letras[posicionVocal[i]] == 'a') {
            letras[posicionVocal[i]] = 'ai';
        } else if (letras[posicionVocal[i]] == 'e') {
            letras[posicionVocal[i]] = 'enter';
        } else if (letras[posicionVocal[i]] == 'i') {
            letras[posicionVocal[i]] = 'imes';
        } else if (letras[posicionVocal[i]] == 'o') {
            letras[posicionVocal[i]] = 'ober';
        } else if (letras[posicionVocal[i]] == 'u') {
            letras[posicionVocal[i]] = 'ufat';
        }
    }

    for (i = 0; i<letras.length; i++) {
        textoEncriptado = textoEncriptado + letras[i];
    }

    return textoEncriptado;
}