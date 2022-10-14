var seletor = document.querySelector("select")

var addContainer = document.getElementById("divEscondida")

var texto = document.getElementById("msg-inicio")

var txtResultado = document.getElementById("msg-result")

var radioCode = document.getElementById("codificar")

var radioDecode = document.getElementById("decodificar")

var btnCodificar = document.getElementById("btn-codificar")

seletor.addEventListener("change", function(event){

if (event.target.value == "cifraCesar") {

addContainer.style = "display: block"; 

} else { // Senão

addContainer.style = "display: none"; 

}

});

btnCodificar.addEventListener("click", function(event){

console.log(texto.value)

event.preventDefault()

})

radioCode.addEventListener("click", function() {

btnCodificar.innerText = "Codificar Texto"

});

radioDecode.addEventListener("click", function() {

btnCodificar.innerText = "Decodificar Texto"

});

var passo = document.querySelector("#passo")

btnCodificar.addEventListener("click", function() {

if(radioCode.checked && seletor.value == "cifraCesar"){

txtResultado.value = cifra(parseInt(passo.value), texto.value)

}else if(radioCode.checked && seletor.value == "base.64"){

txtResultado.value = codificandoABase64(texto.value)

}else if(radioDecode.checked && seletor.value == "cifraCesar"){

txtResultado.value = decifra(parseInt(passo.value), texto.value)

}else if(radioDecode.checked && seletor.value == "base.64"){

txtResultado.value = decodificandoABase64(texto.value)

}

});

function cifra (passo, texto){

var textoCodificado = ""

var codigo = 0

for(var i = 0; i < texto.length; i++){

if(texto.charCodeAt(i) >= 65 && texto.charCodeAt(i) <= 90){

codigo = (((texto.charCodeAt(i) - 65) + passo) % 26) + 65;

}else if(texto.charCodeAt(i) >= 97 && texto.charCodeAt(i) <= 122){

codigo = (((texto.charCodeAt(i) - 97) + passo) % 26) + 97;

}else if(texto.charCodeAt(i) == 32){

codigo = 32

}

textoCodificado += String.fromCharCode(codigo)

}

return textoCodificado;

}

function decifra (passo, texto){

var textoCodificado = ""

var codigo = 0

for(var i = 0; i < texto.length; i++){

if(texto.charCodeAt(i) >= 65 && texto.charCodeAt(i) <= 90){

if((texto.charCodeAt(i) - 65) - passo < 0){

codigo = (((texto.charCodeAt(i) - 65) - passo + 26) % 26) + 65;

}else{

codigo = (((texto.charCodeAt(i) - 65) - passo) % 26) + 65;

}

}else if(texto.charCodeAt(i) >= 97 && texto.charCodeAt(i) <= 122){

if((texto.charCodeAt(i) - 97) - passo < 0){

codigo = (((texto.charCodeAt(i) - 97) - passo + 26) % 26) + 97;

}else{

codigo = (((texto.charCodeAt(i) - 97) - passo) % 26) + 97;

}

}else if(texto.charCodeAt(i) == 32){

codigo = 32

}

textoCodificado += String.fromCharCode(codigo)

}

return textoCodificado;

}

function codificandoABase64(texto) {

return btoa(texto);

}

function decodificandoABase64(texto) {

return atob(texto);

}