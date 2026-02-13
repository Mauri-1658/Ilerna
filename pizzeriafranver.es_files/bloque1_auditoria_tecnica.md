# Bloque 1: Informe de Auditoría Técnica

## Web analizada

**Pizzería Franver** — [https://pizzeriafranver.es](https://pizzeriafranver.es)  
Página web de un restaurante/pizzería local en Montequinto (Sevilla), construida con WordPress y el tema "Restaurant Lite" de SKT Themes.

---

## 1. Definición del Target

### 1.1 Objetivo principal de la web

El objetivo principal de la web es **informar al cliente** sobre la carta, precios, horarios y ubicación de la pizzería, y **facilitar los pedidos online** redirigiendo al usuario a una plataforma externa (oidokocina.com).

### 1.2 User Persona

| Campo                     | Descripción                                                                                          |
| ------------------------- | ---------------------------------------------------------------------------------------------------- |
| **Nombre**                | María García                                                                                         |
| **Edad**                  | 35 años                                                                                              |
| **Ocupación**             | Administrativa, madre de dos hijos                                                                   |
| **Ubicación**             | Montequinto, Sevilla                                                                                 |
| **Contexto de uso**       | Busca cenar pizza un viernes por la noche. Accede desde su móvil mientras está en casa con los niños |
| **Objetivo**              | Ver la carta, encontrar ofertas y hacer un pedido a domicilio rápidamente                            |
| **Nivel tecnológico**     | Medio — usa redes sociales y compra online, pero no es experta técnica                               |
| **Dispositivo principal** | Smartphone (iPhone/Android)                                                                          |

### 1.3 Barreras identificadas para el User Persona

1. **Acceso móvil deficiente**: La web tiene problemas de responsive que dificultan la navegación en smartphone Por ejemplo, tapando la aprte de hacer pedido online
![alt text](image-4.png)
2. **Información desordenada**: Los precios, ofertas y horarios se mezclan en un bloque extenso sin estructura clara
![alt text](image-1.png)
3. **Idioma inconsistente**: Secciones de la web aparecen en inglés ("Todays Special", "Nothing Found") lo que confunde al usuario español
![alt text](image.png)
4. **Botón de pedido poco visible**: El CTA principal ("Haz tu Pedido On Line") está rotado 270° en el lateral derecho, difícil de encontrar
![alt text](image-2.png)
5. **Sobrecarga cognitiva**: Múltiples ofertas, precios y condiciones se presentan simultáneamente sin jerarquía visual clara
![alt text](image-3.png)

---

## 2. Análisis Heurístico (Heurísticas de Nielsen)

### Fallo 1: Título de la página vacío

- **Heurística violada**: #1 — Visibilidad del estado del sistema
- **Severidad**: Alta
- **Descripción**: La etiqueta `<title>` del HTML está completamente vacía. El usuario no puede identificar la página en las pestañas del navegador, en favoritos ni en resultados de búsqueda.
- **Evidencia en código**:

```html
<!-- Línea 8 del HTML -->
<title></title>
```

- **Impacto**: El usuario que tiene varias pestañas abiertas no puede identificar esta página. En buscadores, aparece sin título descriptivo, reduciendo la confianza y el CTR.

---

### Fallo 2: Sección "Nothing Found" en la página principal

- **Heurística violada**: #5 — Prevención de errores
- **Severidad**: Alta
- **Descripción**: En la parte inferior de la homepage aparece un bloque con el mensaje "Nothing Found" y un formulario de búsqueda en inglés, que es contenido de error de WordPress que nunca debería mostrarse al usuario.
- **Evidencia en código**:

```html
<!-- Líneas 326-338 del HTML -->
<header>
  <h1 class="entry-title">Nothing Found</h1>
</header>
<div class="blog-post">
  <p>
    It seems we can't find what you're looking for. Perhaps searching can help.
  </p>
  <form role="search" method="get" class="search-form">
    <input type="search" placeholder="Search..." name="s" />
    <input type="submit" value="Search" />
  </form>
</div>
```

- **Impacto**: Transmite una imagen de web abandonada/rota. El usuario puede pensar que hay un error real y abandonar la página.

---

### Fallo 3: Jerarquía de encabezados caótica

- **Heurística violada**: #4 — Consistencia y estándares
- **Severidad**: Media-Alta
- **Descripción**: La página usa múltiples etiquetas `<h1>` para contenido que no es título principal (precios, direcciones, postres). Hay al menos **8 etiquetas `<h1>`** en una sola página, cuando debería haber solo una.
- **Evidencia en código**:

```html
<h1>PIZZERIA FRANVER S.L.</h1>
<!-- Título real -->
<h1 style="text-align: center;">Nos Encontramos en:</h1>
<!-- Para dirección -->
<h1 style="text-align: center;">Avd. Madre Paula Montal 77</h1>
<!-- Para dirección -->
<h1 style="text-align: center;"><strong>Postres Helados</strong></h1>
<!-- Para postres -->
<h1 style="text-align: center;"><strong>por solo 4.00 €</strong></h1>
<!-- Para un precio -->
<h1 class="entry-title">Nothing Found</h1>
<!-- Error de WP -->
```

- **Impacto**: Los lectores de pantalla no pueden navegar la página de forma lógica. Los buscadores no entienden la jerarquía de la información. La importancia visual de los elementos se diluye.

---

### Fallo 4: Enlaces sociales rotos y red social obsoleta

- **Heurística violada**: #2 — Correspondencia entre el sistema y el mundo real
- **Severidad**: Media
- **Descripción**: Los cuatro enlaces de redes sociales del footer (Facebook, Twitter, Google+, LinkedIn) apuntan todos a `#` (enlace vacío). Además, se incluye un icono de **Google+**, red social que no existe desde 2019.
- **Evidencia en código**:

```html
<a
  href="https://pizzeriafranver.es/#"
  target="_blank"
  class="fb"
  title="facebook"
></a>
<a
  href="https://pizzeriafranver.es/#"
  target="_blank"
  class="tw"
  title="twitter"
></a>
<a
  href="https://pizzeriafranver.es/#"
  target="_blank"
  class="gp"
  title="google-plus"
></a>
<a
  href="https://pizzeriafranver.es/#"
  target="_blank"
  class="in"
  title="linkedin"
></a>
```

- **Impacto**: El usuario no puede seguir a la pizzería en redes sociales. Incluir Google+ denota una web desactualizada. Los enlaces sin contenido textual no son accesibles (los enlaces están vacíos, sin texto alternativo).

---

### Fallo 5: Mezcla de idiomas (español/inglés)

- **Heurística violada**: #4 — Consistencia y estándares
- **Severidad**: Media
- **Descripción**: A pesar de que el atributo `lang="es"` indica español, múltiples elementos aparecen en inglés sin traducir.
- **Ejemplos encontrados**:
  - `"Todays Special"` (sección de especialidades)
  - `"More Info"` (botón)
  - `"Nothing Found"` / `"It seems we can't find..."` (mensaje de error)
  - `"Search..."` (placeholder del formulario)
  - `"Menu"` (toggle de navegación móvil)
  - `"Prev"` / `"Next"` (controles del slider)
- **Impacto**: El público objetivo (residentes de Montequinto, Sevilla) espera una web 100% en español. La mezcla de idiomas genera confusión y reduce la credibilidad del negocio.

---

### Fallo 6: Botón de pedido online mal posicionado

- **Heurística violada**: #6 — Reconocimiento mejor que recuerdo
- **Severidad**: Alta
- **Descripción**: El CTA más importante de la web ("Haz tu Pedido On Line") está posicionado como un botón fijo rotado 270° en el lateral derecho, parcialmente fuera de la pantalla (`right: -75px`).
- **Evidencia en código**:

```css
.btg-button-1 {
  --position: fixed;
  top: 250px;
  right: -75px;
  --rotate: 270deg;
}
```

- **Impacto**: En móviles, el botón puede quedar completamente fuera de pantalla o superponerse sobre el contenido. En desktop, exige al usuario mirar fuera del área de contenido principal. Viola la convención de ubicar CTAs principales en zonas de alta visibilidad (header o hero section).

---

### Fallo 7: Faltas de ortografía y errores tipográficos

- **Heurística violada**: #8 — Estética y diseño minimalista
- **Severidad**: Baja-Media
- **Descripción**: Se detectan errores ortográficos y tipográficos en el contenido visible de la web.
- **Ejemplos encontrados**:
  - `"ingerdientes"` → debería ser **"ingredientes"** (línea 217)
  - `"Nuestrss hamburguesas estan elaborados"` → debería ser **"Nuestras hamburguesas están elaboradas"** (línea 151)
  - `"Siguenos"` → debería ser **"Síguenos"** (falta tilde, línea 373)
- **Impacto**: Los errores ortográficos reducen la credibilidad del negocio y dan sensación de descuido.

---

## 3. Evaluación de Estándares

### 3.1 Iconografía universal

| Elemento                           | ¿Cumple?   | Observación                                                                           |
| ---------------------------------- | ---------- | ------------------------------------------------------------------------------------- |
| Logo en esquina superior izquierda | ✅ Sí      | Correctamente ubicado                                                                 |
| Menú de navegación en header       | ✅ Sí      | Uso convencional                                                                      |
| Icono de menú hamburguesa (móvil)  | ⚠️ Parcial | Existe "toggleMenu" pero solo muestra texto "Menu", sin icono hamburguesa reconocible |
| Iconos de redes sociales           | ❌ No      | Usan imágenes de fondo CSS (no FontAwesome) y no tienen texto alternativo             |
| Icono de teléfono/contacto         | ❌ No      | Los teléfonos se muestran como texto plano sin icono identificativo                   |

### 3.2 Ubicación de elementos comunes

| Elemento                | Ubicación esperada | Ubicación real                       | ¿Cumple?                                    |
| ----------------------- | ------------------ | ------------------------------------ | ------------------------------------------- |
| Logo                    | Arriba-izquierda   | Arriba-izquierda                     | ✅                                          |
| Navegación principal    | Parte superior     | Parte superior                       | ✅                                          |
| Información de contacto | Header o Footer    | Solo en Footer + contenido principal | ⚠️ Parcial                                  |
| CTA principal (Pedido)  | Header o Hero      | Lateral derecho, rotado, semi-oculto | ❌                                          |
| Redes sociales          | Footer             | Footer                               | ✅ (ubicación correcta, pero enlaces rotos) |
| Copyright               | Final de la página | Final de la página                   | ✅                                          |

### 3.3 Guías de estilo (W3C / Material Design)

| Criterio                      | Estado       | Detalle                                                                                                                         |
| ----------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| **HTML semántico (W3C)**      | ❌ No cumple | Múltiples `<h1>`, uso de `<h2>` para imágenes, `<div>` donde deberían usarse `<section>`, `<article>`, `<nav>` semánticos       |
| **Atributos alt en imágenes** | ⚠️ Parcial   | Algunas imágenes tienen `alt=""` (vacío), otras ni siquiera tienen atributo alt descriptivo                                     |
| **Meta description**          | ❌ No cumple | No existe meta description para SEO                                                                                             |
| **Contraste de colores**      | ⚠️ Parcial   | Texto blanco sobre fondo azul del header y footer es legible, pero texto en rojo `#ff0000` sobre blanco no cumple ratio WCAG AA |
| **Tamaños de fuente base**    | ⚠️ Parcial   | Font-size base de 13px es demasiado pequeño (se recomienda 16px mínimo)                                                         |
| **Targets táctiles**          | ❌ No cumple | Elementos del menú de navegación con padding insuficiente para móvil (5px 10px)                                                 |
| **Responsive design**         | ⚠️ Parcial   | Existe CSS responsive pero con ancho fijo de contenedor (1100px) que no es fluido                                               |
| **Estilos inline**            | ❌ No cumple | Gran cantidad de estilos inline (`style="text-align: center;"`) en el HTML, violando la separación de contenido y presentación  |

---

## 4. Resumen de hallazgos

| Prioridad | Cantidad | Ejemplos clave                                                      |
| --------- | -------- | ------------------------------------------------------------------- |
| **Alta**  | 3        | Título vacío, "Nothing Found" en home, botón de pedido semi-oculto  |
| **Media** | 3        | Jerarquía de encabezados, enlaces sociales rotos, mezcla de idiomas |
| **Baja**  | 1        | Faltas de ortografía                                                |

> **Conclusión**: La web de Pizzería Franver presenta problemas significativos de usabilidad que afectan directamente a su objetivo comercial (facilitar pedidos). Los fallos más críticos son la invisibilidad del CTA principal, el contenido de error visible en la homepage, y la falta de un título de página que perjudica gravemente el SEO y la identificabilidad de la web.
