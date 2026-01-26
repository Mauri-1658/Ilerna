/**
 * FastTech - JavaScript Accesible
 * Validación de formulario con feedback accesible
 */

document.addEventListener("DOMContentLoaded", function () {
  // Obtener el formulario de contacto
  const form = document.querySelector(".form-group");

  if (form) {
    // Manejar envío del formulario
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      // Obtener campos
      const nombre = document.getElementById("nombre");
      const email = document.getElementById("email");
      const mensaje = document.getElementById("mensaje");

      // Limpiar errores anteriores
      clearErrors();

      // Validar campos
      let isValid = true;

      if (!nombre.value.trim()) {
        showError(nombre, "El nombre es obligatorio");
        isValid = false;
      }

      if (!email.value.trim()) {
        showError(email, "El correo electrónico es obligatorio");
        isValid = false;
      } else if (!isValidEmail(email.value)) {
        showError(email, "Por favor, introduce un correo electrónico válido");
        isValid = false;
      }

      if (!mensaje.value.trim()) {
        showError(mensaje, "El mensaje es obligatorio");
        isValid = false;
      }

      // Si todo es válido, enviar
      if (isValid) {
        // Aquí iría la lógica de envío real
        showSuccess(
          "¡Formulario enviado correctamente! Nos pondremos en contacto contigo pronto.",
        );
        form.reset();
      }
    });
  }

  // Manejar botones de información
  const botonesInfo = document.querySelectorAll(".boton-accion");
  botonesInfo.forEach(function (boton) {
    boton.addEventListener("click", function () {
      const servicio = this.closest(".card").querySelector(".text").textContent;
      alert("Más información sobre: " + servicio);
    });
  });
});

/**
 * Validar formato de email
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Mostrar error en un campo
 */
function showError(field, message) {
  const formField = field.closest(".form-field");

  // Añadir clase de error
  field.classList.add("error");
  field.setAttribute("aria-invalid", "true");

  // Crear mensaje de error
  const errorId = field.id + "-error";
  const errorElement = document.createElement("span");
  errorElement.id = errorId;
  errorElement.className = "error-message";
  errorElement.setAttribute("role", "alert");
  errorElement.textContent = message;

  // Asociar error con el campo
  field.setAttribute("aria-describedby", errorId);

  // Insertar mensaje después del campo
  formField.appendChild(errorElement);

  // Poner foco en el primer campo con error
  if (!document.querySelector(".error:focus")) {
    field.focus();
  }
}

/**
 * Limpiar todos los errores
 */
function clearErrors() {
  // Eliminar mensajes de error
  const errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach(function (msg) {
    msg.remove();
  });

  // Limpiar atributos de error
  const errorFields = document.querySelectorAll(".error");
  errorFields.forEach(function (field) {
    field.classList.remove("error");
    field.removeAttribute("aria-invalid");
    field.removeAttribute("aria-describedby");
  });
}

/**
 * Mostrar mensaje de éxito
 */
function showSuccess(message) {
  // Crear contenedor de éxito si no existe
  let successContainer = document.querySelector(".success-message");

  if (!successContainer) {
    successContainer = document.createElement("div");
    successContainer.className = "success-message";
    successContainer.setAttribute("role", "status");
    successContainer.setAttribute("aria-live", "polite");

    const form = document.querySelector(".form-group");
    form.insertBefore(successContainer, form.firstChild);
  }

  successContainer.textContent = message;
  successContainer.focus();
}
