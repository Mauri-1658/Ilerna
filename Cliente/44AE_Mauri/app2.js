/**
 * Expresión regular para validar el formato de email
 * Formato básico: texto@dominio.extension
 * @type {RegExp}
 */
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Valida el email en tiempo real y actualiza el feedback visual
 * @param {Event} event - El objeto del evento input
 */
function validarEmail(event) {
    const input = event.target;
    const feedback = document.getElementById('email-feedback');
    const valorEmail = input.value;

    // Comprobar si el email es válido usando la regex
    if (regexEmail.test(valorEmail)) {
        // Email válido
        input.classList.remove('invalido');
        input.classList.add('valido');
        feedback.textContent = 'Email Válido';
        feedback.classList.remove('invalido');
        feedback.classList.add('valido');
    } else {
        // Email inválido
        input.classList.remove('valido');
        input.classList.add('invalido');
        feedback.textContent = 'Email Inválido';
        feedback.classList.remove('valido');
        feedback.classList.add('invalido');
    }
}

/**
 * Inicializa el validador de email en vivo
 */
function inicializar() {
    const emailInput = document.getElementById('email-input');
    
    // Añadir listener para validación en tiempo real
    emailInput.addEventListener('input', validarEmail);
}

// Iniciar cuando el DOM esté completamente cargado
inicializar();
