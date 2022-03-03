const $botones = document.querySelectorAll(".boton");
const $botonComenzar = document.querySelector("#boton-comenzar");
const $textoJuego = document.querySelector("#texto-juego");
const botonAleatorio = elegirAleatorio($botones);

const patronBotones = [];
let nivel = 1;

$botonComenzar.onclick = function () {
    ocultarElemento($botonComenzar);
    mostrarElemento($textoJuego);
    habilitarBotones($botones);

    primerNivel();
};
