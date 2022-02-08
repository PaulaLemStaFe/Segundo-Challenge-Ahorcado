let palabras = [
    "ALURA",
    "ORACLE",
    "VARIABLE",
    "FUNCION",
    "OBJETO",
    "BOTON",
    "CODIGO",
    "JAVASCRIPT",
    "AHORCADO",
    "EDITOR",
    "DESAFIO",
    "WEB"
];

function escogerPalabra() {
    var indice = Math.floor(Math.random() * palabras.length);
    return palabras[indice];
}