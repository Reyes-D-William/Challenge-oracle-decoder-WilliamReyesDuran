
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/



let botonEncriptar = document.querySelector("#btn-encriptar")
let botonDesencriptar = document.querySelector("#btn-desencriptar")
let msgCopiar = document.querySelector("#msg");
let botonCopiar = document.querySelector("#btn-copy");



// Funcion para copiar al portapapeles.
function copiarAlPortapapeles() {
    let contenido = document.getElementById('msg').value;

    navigator.clipboard.writeText(contenido)
        .then(() => {
            console.log("Copiado al portapapeles")
        })
        .catch(err => {
            console.log('Algo anda mal...', err);
        })
}

// Encriptador / Desencriptador

// Encriptador

function encriptarF(event1) {
    
    let msgEncriptar = document.querySelector("#input-texto");
    let texto = document.querySelector("#input-texto").value;
    let invalidas = "ABCDEFGHIJKLMNOPQRSTUVWXYZáéíóú";
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
        for (let j = 0; j < invalidas.length; j++) {
            if (texto[i] != invalidas[j]) {
                contador += 1;
            } else {
                contador -= 1;
            }
        }
    }
    if (contador == texto.length * invalidas.length) {
        console.log("funciona");
        console.log(contador);
        //msgEncriptar = texto;
        
    } else {
        console.log("no funciona! :(");
        console.log(contador);
        alert("No Funciona");
        return msgEncriptar = false;
    }

    
    let vector = Array.from(msgEncriptar.value);
    let newVector = [];


    for (let i = 0; i < vector.length; i++) {

        
        if (vector[i] == "a"){
            newVector.push("ai");
        } else if(vector[i] == "e"){
            newVector.push("enter");
        } else if(vector[i] == "i"){
            newVector.push("imes");
        } else if(vector[i] == "o"){
            newVector.push("ober");
        } else if(vector[i] == "u"){
            newVector.push("ufat");
        } else{
            newVector.push(vector[i]);
        }

    }
    
    msgCopiar.value = newVector.join('');
    msgEncriptar.value = ""
    event1.preventDefault();

}
botonEncriptar.addEventListener("click", encriptarF);





// Desencriptador

function desencriptarF(event) {

    let msgEncriptar = document.querySelector("#input-texto");
    let texto = document.querySelector("#input-texto").value;
    let invalidas = "ABCDEFGHIJKLMNOPQRSTUVWXYZáéíóú";
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
        for (let j = 0; j < invalidas.length; j++) {
            if (texto[i] != invalidas[j]) {
                contador += 1;
            } else {
                contador -= 1;
            }
        }
    }
    if (contador == texto.length * invalidas.length) {
        console.log("funciona");
        console.log(contador);
        //msgEncriptar = texto;
        
    } else {
        console.log("no funciona! :(");
        console.log(contador);
        alert("No Funciona");
        return msgEncriptar = false;
    }


    let cadena = msgEncriptar.value;


    function paraA() {
        let posicion = cadena.indexOf("ai");
        while (posicion >= 0) {
            cadena = cadena.slice(0, posicion) + "a" + cadena.slice(posicion + 2);
            posicion = cadena.indexOf("ai");
        }
        return cadena;
    }

    function paraE() {
        let posicion = cadena.indexOf("enter");
        while (posicion >= 0) {
            cadena = cadena.slice(0, posicion) + "e" + cadena.slice(posicion + 5);
            posicion = cadena.indexOf("enter");
        }
        return cadena;
    }

    function paraI() {
        let posicion = cadena.indexOf("imes");
        while (posicion >= 0) {
            cadena = cadena.slice(0, posicion) + "i" + cadena.slice(posicion + 4);
            posicion = cadena.indexOf("imes");
        }
        return cadena;
    }

    function paraO() {
        let posicion = cadena.indexOf("ober");
        while (posicion >= 0) {
            cadena = cadena.slice(0, posicion) + "o" + cadena.slice(posicion + 4);
            posicion = cadena.indexOf("ober");
        }
        return cadena;
    }

    function paraU() {
        let posicion = cadena.indexOf("ufat");
        while (posicion >= 0) {
            cadena = cadena.slice(0, posicion) + "u" + cadena.slice(posicion + 4);
            posicion = cadena.indexOf("ufat");
        }
        return cadena;
    }

    function decodificador() {
        paraA();
        paraE();
        paraI();
        paraO();
        paraU();
        return paraU();
    }

    msgCopiar.value = decodificador();
    msgEncriptar.value = "";
    event.preventDefault();
}
botonDesencriptar.addEventListener("click", desencriptarF);


