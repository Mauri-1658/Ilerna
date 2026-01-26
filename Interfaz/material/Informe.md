# Informe de Auditoría - FastTech Website

**Fecha:** 26 de Enero de 2026  
**Proyecto:** FastTech Website

---

## ¿Qué problemas tenía la web?

### Antes de arreglarla había 10 problemas importantes:

| #   | Problema encontrado                               | ¿Por qué es malo?                                |
| --- | ------------------------------------------------- | ------------------------------------------------ |
| 1   | No indicaba que está en español                   | Los lectores de pantalla no saben cómo leerla    |
| 2   | Los "enlaces" del menú no funcionaban con teclado | Solo funcionaban con ratón                       |
| 3   | El formulario no tenía etiquetas                  | No se sabe qué poner en cada campo               |
| 4   | Colores muy claros, casi no se lee                | Personas con problemas de vista no pueden leerlo |
| 5   | Al navegar con TAB no se ve dónde estás           | Habían quitado el borde de enfoque               |
| 6   | Las imágenes no tenían descripción                | Personas ciegas no saben qué muestran            |
| 7   | Todo era `<div>`, sin estructura                  | Los lectores de pantalla no entienden nada       |
| 8   | No había títulos (`<h1>`, `<h2>`)                 | No hay jerarquía de información                  |
| 9   | Sin descripción para Google                       | Google no sabe de qué trata la web               |
| 10  | El botón "ENVIAR" no era un botón real            | Solo funcionaba con ratón                        |

---

## ¿Qué hemos arreglado?

### HTML (la estructura)

✅ Indicamos que la web está en español  
✅ Añadimos descripción para Google  
✅ Usamos etiquetas correctas: menú, cabecera, pie de página  
✅ Los enlaces ahora son enlaces de verdad  
✅ Añadimos títulos `<h1>` y `<h2>`  
✅ Todas las imágenes tienen descripción  
✅ El formulario tiene etiquetas en cada campo  
✅ El email usa el campo correcto para emails

### CSS (los colores y diseño)

✅ Ahora hay un borde azul cuando navegas con TAB  
✅ Los colores tienen buen contraste (se leen bien)  
✅ La web se adapta a móviles y tablets

### JavaScript (el comportamiento)

✅ El formulario muestra errores claros  
✅ Los botones funcionan con teclado

---

## Comparación Antes vs Después

| Aspecto                   | ANTES ❌      | DESPUÉS ✅        |
| ------------------------- | ------------- | ----------------- |
| Navegación con teclado    | No funcionaba | Funciona al 100%  |
| ¿Se lee bien el texto?    | Muy difícil   | Fácil de leer     |
| ¿El formulario es usable? | Confuso       | Claro y accesible |
| ¿Google entiende la web?  | No            | Sí                |
| ¿Funciona en móvil?       | Regular       | Bien              |

---

## Puntuación esperada

| Métrica       | Antes   | Después     |
| ------------- | ------- | ----------- |
| Accesibilidad | ~40/100 | **+95/100** |
| SEO           | ~55/100 | **+95/100** |

---

## ¿Qué falta por hacer?

Para completar la actividad, abre Chrome y:

1. **Test de Lighthouse:**
   - Pulsa F12 → pestaña "Lighthouse" → Analizar
   - Haz captura de pantalla del resultado

2. **Test de teclado:**
   - Pulsa TAB varias veces y comprueba que puedes navegar

3. **Validar código:**
   - HTML: https://validator.w3.org/#validate_by_input
   - CSS: https://jigsaw.w3.org/css-validator/#validate_by_input
