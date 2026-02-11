# Bloque 2: Plan de Verificación (Testing)

## Web analizada

**Pizzería Franver** — [https://pizzeriafranver.es](https://pizzeriafranver.es)

---

## 1. Informe Cross-Browser

### 1.1 Navegadores probados

| Navegador       | Versión | Plataforma         |
| --------------- | ------- | ------------------ |
| Google Chrome   | 133+    | Windows 11 Desktop |
| Mozilla Firefox | 135+    | Windows 11 Desktop |
| Microsoft Edge  | 133+    | Windows 11 Desktop |

### 1.2 Resultados — Vista Desktop (1920×1080)

| Elemento                   | Chrome                                                 | Firefox                       | Edge                          |
| -------------------------- | ------------------------------------------------------ | ----------------------------- | ----------------------------- |
| **Slider (Nivo Slider)**   | ✅ Funciona, se renderiza correctamente                | ✅ Funciona correctamente     | ✅ Funciona correctamente     |
| **Menú de navegación**     | ✅ Visible y funcional                                 | ✅ Visible y funcional        | ✅ Visible y funcional        |
| **Logo**                   | ✅ Se muestra correctamente                            | ✅ Se muestra correctamente   | ✅ Se muestra correctamente   |
| **Imágenes de productos**  | ✅ Cargan correctamente                                | ✅ Cargan correctamente       | ✅ Cargan correctamente       |
| **Botón "Haz tu Pedido"**  | ⚠️ Rotado 270°, parcialmente oculto en lateral derecho | ⚠️ Mismo problema             | ⚠️ Mismo problema             |
| **Footer**                 | ✅ Se renderiza correctamente                          | ✅ Se renderiza correctamente | ✅ Se renderiza correctamente |
| **Fuentes (Google Fonts)** | ✅ Playball y Roboto Condensed cargan                  | ✅ Cargan correctamente       | ✅ Cargan correctamente       |
| **Animaciones CSS**        | ✅ BounceIn, FadeIn funcionan                          | ✅ Funcionan correctamente    | ✅ Funcionan correctamente    |

**Observación general (Desktop)**: La web se comporta de forma consistente en los tres navegadores en desktop. Los problemas detectados son de diseño, no de compatibilidad cross-browser.

### 1.3 Resultados — Vista Móvil (375×812, simulación iPhone)

| Elemento                  | Chrome (DevTools)                                                                                                                                 | Firefox (RDM)              | Edge (DevTools)            |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | -------------------------- |
| **Slider**                | ⚠️ Captions (`nivo-caption`) se ocultan con `display:none` en móvil                                                                               | ⚠️ Mismo comportamiento    | ⚠️ Mismo comportamiento    |
| **Logo**                  | ✅ Se centra correctamente                                                                                                                        | ✅ Se centra correctamente | ✅ Se centra correctamente |
| **Menú**                  | ⚠️ El botón "Menu" (toggle) solo muestra texto, no icono hamburguesa. El estilo usa imagen de fondo que no carga                                  | ⚠️ Mismo problema          | ⚠️ Mismo problema          |
| **Contenido principal**   | ❌ Imágenes de ofertas desbordan horizontalmente en pantallas < 400px                                                                             | ❌ Mismo problema          | ❌ Mismo problema          |
| **Botón "Haz tu Pedido"** | ❌ Se sale completamente de la pantalla (`right: -75px`)                                                                                          | ❌ Mismo problema          | ❌ Mismo problema          |
| **Footer columnas**       | ✅ Se apilan correctamente (CSS responsive activo)                                                                                                | ✅ Se apilan correctamente | ✅ Se apilan correctamente |
| **Contenedor**            | ⚠️ El `.container` tiene `width: 1100px` fijo; en móvil se sobreescribe con `width: auto`, pero algunos sub-elementos mantienen dimensiones fijas | ⚠️ Mismo problema          | ⚠️ Mismo problema          |

**Problemas específicos de móvil**:

1. La imagen de la pizza de medio metro tiene `width="661"` hardcodeado en HTML, lo que provoca scroll horizontal
2. Las imágenes de los postres (Gelato) tienen `float:left` y `float:right` que en pantallas estrechas causan superposición
3. El ancho del contenedor usa `width: 1100px` como base y solo se adapta en breakpoints

---

## 2. Test de Periféricos

### 2.1 Navegación por Teclado

#### Metodología

Se ha analizado el código fuente para verificar la accesibilidad por teclado, comprobando:

- Presencia de estilos `:focus` en los CSS
- Orden de tabulación (tabindex)
- Elementos interactivos accesibles

#### Resultados

| Criterio                       | Estado       | Detalle                                                                                                                                                                                                               |
| ------------------------------ | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Indicador de foco visible**  | ❌ No cumple | El CSS global aplica `outline: none` a todos los elementos (`* { outline: none; }`), lo que elimina completamente el indicador de foco del navegador                                                                  |
| **Orden de tabulación lógico** | ⚠️ Parcial   | No hay atributos `tabindex` personalizados. El orden sigue el DOM, pero el slider está ANTES del header en el HTML, lo que hace que el Tab navegue primero por los links del slider antes de llegar al menú principal |
| **Enlaces accesibles**         | ❌ No cumple | Los enlaces de redes sociales (`<a class="fb">`, `<a class="tw">`, etc.) no tienen contenido textual ni `aria-label`. Son completamente invisibles para lectores de pantalla y navegación por teclado                 |
| **Skip navigation**            | ❌ No existe | No hay enlace "Saltar al contenido" para usuarios de teclado                                                                                                                                                          |
| **Formulario de búsqueda**     | ⚠️ Parcial   | El `<label>` del formulario de búsqueda no tiene atributo `for` ni texto visible                                                                                                                                      |
| **Botón de pedido online**     | ❌ No cumple | El `<button>` rotado 270° no es fácilmente alcanzable por tabulación y su posición visual no coincide con su posición en el flujo del documento                                                                       |

**Evidencia en código — Foco desactivado:**

```css
/* Línea 18 de style.css */
* {
  margin: 0;
  padding: 0;
  outline: none;
}
```

Esta regla elimina el outline de TODOS los elementos, haciendo imposible para usuarios de teclado saber dónde se encuentra el foco.

#### Orden del flujo de tabulación detectado

```
1. Links del slider (Prev/Next, "Leer más") → deberían ser los últimos
2. Logo (enlace)
3. Toggle Menu (enlace)
4. Menú de navegación (10 enlaces)
5. Premio Restaurant Guru (enlace + imagen)
6. Teléfonos (enlaces tel:)
7. Botón "More Info"
8. Especialidades (2 enlaces)
9. Footer: menú, enlaces, redes sociales
10. Botón "Haz tu Pedido Online"
```

**Problema identificado**: El slider aparece antes del header en el DOM, lo que invierte el orden natural de navegación.

### 2.2 Simulación de Dispositivos Táctiles

| Criterio                       | Estado          | Detalle                                                                                                                               |
| ------------------------------ | --------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| **Tamaño de targets táctiles** | ❌ No cumple    | Los enlaces del menú en mobile tienen padding de solo `5px 10px` (CSS responsive línea 76). El mínimo recomendado por WCAG es 44×44px |
| **Espaciado entre targets**    | ⚠️ Parcial      | Los enlaces del menú están separados por bordes de 1px, sin margen adicional entre ellos                                              |
| **Slider — gestos táctiles**   | ❌ No soportado | Nivo Slider no soporta gestos de swipe táctil de forma nativa. Solo funciona con los botones Prev/Next                                |
| **Zoom permitido**             | ✅ Cumple       | El viewport meta no incluye `maximum-scale=1` ni `user-scalable=no`, permitiendo el zoom del usuario                                  |
| **Hover effects**              | ⚠️ Parcial      | Las tarjetas de "Todays Special" usan `:hover` para cambiar el color del texto, cosa que no funciona en dispositivos táctiles         |

---

## 3. Métricas de Rendimiento

### 3.1 Análisis de recursos cargados

Se ha analizado el código fuente para identificar todos los recursos que carga la página:

#### Hojas de estilo CSS (8 archivos)

| Archivo                 | Tamaño | ¿Necesario?                                |
| ----------------------- | ------ | ------------------------------------------ |
| `button.min.css`        | 6 KB   | Sí (botón de pedido)                       |
| `all.css` (FontAwesome) | 110 KB | ⚠️ Solo se usa 1 icono                     |
| `css` (Google Fonts)    | 16 KB  | Sí                                         |
| `style.css`             | 14 KB  | Sí                                         |
| `editor-style.css`      | 0.1 KB | ❌ No necesario (estilos del editor WP)    |
| `nivo-slider.css`       | 3 KB   | Sí                                         |
| `responsive.css`        | 4 KB   | Sí                                         |
| `style_base.css`        | 15 KB  | ⚠️ Mayormente sin utilizar                 |
| `animation.css`         | 72 KB  | ⚠️ Solo se usan 3-4 animaciones            |
| `animate.min.css`       | 51 KB  | ⚠️ Duplica funcionalidad con animation.css |
| `js_composer.min.css`   | 462 KB | ⚠️ Muy pesado, para WPBakery Page Builder  |

**Total CSS: ~753 KB** — excesivo para una web de una sola página.

#### Scripts JavaScript (7 archivos)

| Archivo                    | Tamaño | ¿Necesario?                           |
| -------------------------- | ------ | ------------------------------------- |
| `jquery.min.js`            | 88 KB  | Sí (dependencia del tema)             |
| `jquery-migrate.min.js`    | 14 KB  | ❌ Capa de compatibilidad innecesaria |
| `jquery.nivo.slider.js`    | 30 KB  | Sí (slider)                           |
| `custom.js`                | 2 KB   | Sí                                    |
| `js_composer_front.min.js` | 20 KB  | ⚠️ Para WPBakery, mínimo uso          |
| `waypoints.min.js`         | 8 KB   | ⚠️ Solo para animaciones al scroll    |
| `wp-emoji-release.min.js`  | 23 KB  | ❌ Soporte de emojis innecesario      |
| `button.min.js`            | 1 KB   | Sí                                    |

**Total JS: ~186 KB** — razonable pero mejorable.

#### Imágenes (11 archivos locales)

| Imagen                                | Tamaño | Observación                             |
| ------------------------------------- | ------ | --------------------------------------- |
| `dest-pizzas.jpg`                     | 127 KB | Imagen del slider                       |
| `slider02-baguett.jpg`                | 262 KB | ⚠️ Pesada, no optimizada                |
| `slider03-hamburguesas.jpg`           | 158 KB | Imagen del slider                       |
| `logo-franver-porque.png`             | 30 KB  | Logo                                    |
| `pizza-medio-metro-mitad-300x127.png` | 88 KB  | ⚠️ PNG para foto — debería ser JPG/WebP |
| `pizza-medio-metro-mitad-150x150.png` | 55 KB  | ⚠️ PNG para foto                        |
| `SOLO-14-E-300x168.png`               | 81 KB  | ⚠️ PNG para foto                        |
| `GURU-removebg-preview-300x238.png`   | 71 KB  | Premio                                  |
| `GELATO-1-scaled-225x300.jpg`         | 10 KB  | ✅ Buen tamaño                          |
| `GELATO-2-scaled-225x300.jpg`         | 10 KB  | ✅ Buen tamaño                          |
| `patatas-gratinadas-150x150.jpg`      | 9 KB   | ✅ Buen tamaño                          |

**Total imágenes: ~901 KB** — mejorable con formatos modernos.

### 3.2 Problemas de rendimiento identificados

1. **CSS bloqueante excesivo (753 KB)**: 8 hojas de estilo bloquean el renderizado inicial. Las más pesadas (`js_composer.min.css` con 462 KB y `animation.css` + `animate.min.css` con 123 KB combinados) son en su mayoría código no utilizado.

2. **Sin lazy loading en imágenes**: Solo la imagen del slider principal tiene `fetchpriority="high"`. El resto de imágenes se cargan todas de golpe sin `loading="lazy"`.

3. **Sin compresión de imágenes modernas**: Las imágenes usan formatos JPG y PNG clásicos en lugar de WebP o AVIF que ofrecen 25-50% de reducción de tamaño.

4. **JavaScript render-blocking**: jQuery y plugins se cargan en el `<head>` sin atributo `defer` o `async` (excepto wp-emoji que sí tiene `defer`).

### 3.3 Medidas técnicas propuestas para mejorar la velocidad

#### Medida 1: Eliminar CSS no utilizado y consolidar hojas de estilo

**Problema**: Se cargan 753 KB de CSS, de los cuales se estima que solo ~100 KB son realmente utilizados en esta página. Archivos como `js_composer.min.css` (462 KB) contienen miles de reglas para elementos de WPBakery que no aparecen en esta página.

**Solución propuesta**:

- Eliminar `js_composer.min.css`, `editor-style.css` y `animate.min.css` (duplicado)
- Consolidar `style.css`, `responsive.css` y `style_base.css` en un solo archivo `main.css`
- Reducir `animation.css` a solo las animaciones utilizadas (fadeIn, bounceInDown, bounceInLeft)
- **Reducción estimada**: ~580 KB de CSS eliminados (~77% de reducción)

**Impacto en usabilidad**: Menor tiempo de carga → menor tasa de abandono. Según Google, un 53% de usuarios móviles abandona una web que tarda más de 3 segundos en cargar. Reducir los CSS bloqueantes mejora directamente el First Contentful Paint (FCP).

#### Medida 2: Optimizar imágenes con formatos modernos y lazy loading

**Problema**: Las imágenes suman ~901 KB y usan formatos sin optimizar. Además, todas se cargan al inicio sin importar si el usuario las ve.

**Solución propuesta**:

- Convertir imágenes JPG/PNG a formato **WebP** (soporte 97%+ de navegadores)
- Añadir atributo `loading="lazy"` a todas las imágenes que no estén en el viewport inicial
- Usar el atributo `srcset` con tamaños adecuados para móvil y desktop
- **Reducción estimada**: ~350-450 KB de imágenes ahorradas (~40-50% de reducción)

**Impacto en usabilidad**: Las imágenes son el contenido más pesado de la página. El lazy loading evita que el usuario espere por imágenes que no va a ver inmediatamente, y los formatos modernos reducen el tiempo de transferencia. Esto mejora el Largest Contentful Paint (LCP), métrica clave de Core Web Vitals.

---

## 4. Resumen de hallazgos del Plan de Verificación

| Área                        | Estado general              | Prioridad de mejora |
| --------------------------- | --------------------------- | ------------------- |
| **Cross-browser (desktop)** | ✅ Consistente              | Baja                |
| **Cross-browser (móvil)**   | ⚠️ Problemas significativos | Alta                |
| **Navegación por teclado**  | ❌ Muy deficiente           | Alta                |
| **Dispositivos táctiles**   | ⚠️ Parcialmente funcional   | Media               |
| **Rendimiento (CSS)**       | ❌ ~753 KB excesivos        | Alta                |
| **Rendimiento (imágenes)**  | ⚠️ Sin optimizar            | Media               |
| **Rendimiento (JS)**        | ⚠️ Mejorable                | Media               |
