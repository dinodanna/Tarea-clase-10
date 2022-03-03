function habilitarBotones(botones) {
    botones.forEach(function (element) {
        element.classList.remove("deshabilitado");
    });
}

function ocultarElemento(elemento) {
    elemento.classList.add("oculto");
}

function mostrarElemento(elemento) {
    elemento.classList.remove("oculto");
}

function elegirAleatorio(botones) {
    let botonAleatorio = botones[Math.floor(Math.random() * botones.length)];
    return botonAleatorio;
}

function primerNivel() {
    let texto = "Nivel " + nivel + ", presta atención!";
    let botonSeleccionado = botonAleatorio;
    // click boton seleccionado
    patronBotones.push(botonSeleccionado);
    $textoJuego.textContent = texto;
}
