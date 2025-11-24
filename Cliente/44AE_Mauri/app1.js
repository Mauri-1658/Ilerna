// Constantes para los elementos del DOM
const zonaMouse = document.getElementById('zona-mouse');
const inputTexto = document.getElementById('input-texto');
const logList = document.getElementById('log');

/**
 * Función Log: Añade un mensaje como un nuevo elemento <li> a la lista de log.
 * @param {string} mensaje - El texto a registrar.
 */
function log(mensaje) {
    const nuevoLi = document.createElement('li');
    // Usa la hora actual para facilitar el seguimiento del orden
    const tiempo = new Date().toLocaleTimeString();
    nuevoLi.textContent = `[${tiempo}] ${mensaje}`;
    logList.prepend(nuevoLi); // Añadir al principio para ver lo más reciente
}

// 1. mouseenter: Añade clase highlight y registra
zonaMouse.addEventListener('mouseenter', (event) => {
    zonaMouse.classList.add('highlight');
    log("Ratón Entró");
});

// 2. mouseleave: Quita clase highlight y registra
zonaMouse.addEventListener('mouseleave', (event) => {
    zonaMouse.classList.remove('highlight');
    log("Ratón Salió");
});

// 3. click: Registra "Clic"
zonaMouse.addEventListener('click', (event) => {
    log("Clic");
});

// 4. mousemove: Registra la posición X, Y (Desafío: usa clientX/Y)
zonaMouse.addEventListener('mousemove', (event) => {
    // event.clientX y event.clientY dan la posición relativa a la ventana (viewport)
    const posX = event.clientX;
    const posY = event.clientY;
    log(`Ratón moviéndose en X: ${posX}, Y: ${posY}`);
});


// 5. focus: Registra "Input enfocado"
inputTexto.addEventListener('focus', (event) => {
    log("Input enfocado");
});

// 6. blur: Registra "Input desenfocado"
inputTexto.addEventListener('blur', (event) => {
    log("Input desenfocado");
});

// 7. keydown: Registra "Tecla pulsada: (la tecla pulsada)"
inputTexto.addEventListener('keydown', (event) => {
    // event.key contiene el valor de la tecla presionada (e.g., 'a', 'Enter', 'Shift')
    log(`Tecla pulsada: ${event.key}`);
});

// 8. keyup: Registra "Tecla soltada: (el código de la tecla)"
inputTexto.addEventListener('keyup', (event) => {
    // event.code contiene el código físico de la tecla (e.g., 'KeyA', 'Enter', 'ShiftLeft')
    log(`Tecla soltada: ${event.code}`);
});

// Mensaje inicial de confirmación
log("Script de eventos cargado.");