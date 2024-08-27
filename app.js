
var contenedor = document.querySelector(".contenedorParrafo");
var muneco = document.querySelector(".contenedorMuneco");
var resultado = document.querySelector(".textoResultado");
var botonEncriptar = document.querySelector(".botonEncriptar");
var botonDesencriptar = document.querySelector(".botonDesencriptar");

botonDesencriptar.onclick = desencriptar;
botonEncriptar.onclick = encriptar;


function ocultar(){
    muneco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function devolverTexto(){
    var cajaTexto = document.querySelector(".cajaTexto")
    return cajaTexto.value
}
function encriptar(){
    ocultar();
    var cajaTexto = devolverTexto()
    resultado.textContent = encriptarTexto(cajaTexto);
}

function desencriptar(){
    ocultar();
    var cajaTexto = devolverTexto()
    resultado.textContent = desencriptarTexto(cajaTexto);
}



function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;

}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }

        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }

    }

    return textoFinal;

}

const botonCopiar = document.querySelector(".botonCopiar"); 
    botonCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".textoResultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("hola"); 
});