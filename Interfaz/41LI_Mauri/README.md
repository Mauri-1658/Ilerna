# Portfolio MiArma 🎨

> Proyecto de Diseño de Interfaces Web - 2º DAW

Portfolio de una página para una artista digital de ciencia ficción. Incluye galería interactiva, reproductor de video, audio ambiental y animaciones.

---

## 📁 Estructura del Proyecto

```
41LI_Mauri/
├── index.html          # Página principal
├── credits.html        # Créditos y licencias
├── css/
│   └── styles.css     # Estilos
├── js/
│   └── main.js        # JavaScript (galería y modal)
└── assets/
    ├── images/        # Imágenes del portfolio
    ├── Audio/         # Audio ambiental
    └── Video/         # Video del reel
```

---

## 🎯 Funcionalidades

### ✅ Lo que tiene el proyecto:

- **Galería interactiva**: Haz clic en las miniaturas para cambiar la imagen principal
- **Modal de video**: Botón que abre un modal con el video del reel
- **Reproductor de audio**: Audio ambiental en la sección "Sobre Mí"
- **Icono animado**: Un icono en el botón "Ver Reel" que cambia de color automáticamente
- **Diseño responsive**: Se adapta a móvil, tablet y escritorio
- **Navegación suave**: Scroll suave entre secciones
- **Efectos hover**: Animaciones al pasar el ratón

### 🎨 Características del diseño:

- Tema oscuro futurista
- Colores vibrantes (morado, cyan)
- Gradientes y sombras
- Animaciones CSS
- Glassmorphism en algunos elementos

---

## 🚀 Cómo abrir el proyecto

### Opción 1: Con XAMPP (recomendado)

1. Abre el **XAMPP Control Panel**
2. Arranca **Apache**
3. Abre el navegador y ve a:
   ```
   http://localhost/DAW/Ilerna/Interfaz/41LI_Mauri/index.html
   ```

### Opción 2: Con Live Server (VSCode)

1. Instala la extensión **Live Server** en VSCode
2. Haz clic derecho en `index.html`
3. Selecciona **"Open with Live Server"**

---

## 🎨 Recursos Multimedia Utilizados

| Tipo   | Archivo       | ¿De dónde?                                     | Licencia                         |
| ------ | ------------- | ---------------------------------------------- | -------------------------------- |
| Imagen | Hero, Galería | [Pexels](https://www.pexels.com)               | **CC0** (gratis, sin atribución) |
| Logo   | logo.png      | [Flaticon](https://www.flaticon.com)           | Flaticon (con atribución)        |
| Video  | video.mp4     | [Pexels Videos](https://www.pexels.com/videos) | **CC0**                          |
| Audio  | audio.mp3     | [Freesound](https://freesound.org)             | **CC0** / CC BY                  |
| Iconos | Frames 1-3    | Generados con IA                               | Propios                          |

> **CC0** = Dominio público, puedes usar libremente

---

## 🛠️ Herramientas que usé

### Para el icono animado:

- **JavaScript** → Cambia entre 3 imágenes cada 500ms
- **CSS** → Efecto de pulso con brillo

---

## 🎓 ¿Por qué estos formatos?

### JPG vs PNG

**JPG** → Para fotos (hero, galería)

- Pesa menos
- Buena calidad para fotos
- ❌ No tiene transparencia

**PNG** → Para logos e iconos

- ✅ Tiene transparencia
- Bordes más nítidos
- Pesa más que JPG

### MP4 para el video

- Compatible con todos los navegadores
- Buena calidad con poco peso
- Se puede reproducir mientras se descarga

### MP3 para el audio

- Compatible universalmente
- 128 kbps es suficiente para audio ambiental
- Pesa poco (15s = ~240KB)

---

## 💡 Cosas técnicas que aprendí

### HTML5 Semántico

Usé etiquetas que tienen significado:

- `<header>` → Cabecera
- `<nav>` → Navegación
- `<main>` → Contenido principal
- `<section>` → Secciones
- `<footer>` → Pie de página

### JavaScript

- Cambiar imágenes de la galería al hacer clic
- Abrir/cerrar modal del video
- Pausar el video al cerrar
- Animar el icono del botón
- Cerrar modal con la tecla ESC

### CSS Moderno

- Variables CSS (`:root`)
- Flexbox y Grid
- Animaciones con `@keyframes`
- Efectos hover y focus
- Diseño responsive con `@media`

---

## 📜 Licencia del Proyecto

Este proyecto usa **Creative Commons BY 4.0**

![CC BY 4.0](https://i.creativecommons.org/l/by/4.0/88x31.png)

### ¿Qué significa?

- ✅ Puedes copiar el código
- ✅ Puedes modificarlo
- ✅ Puedes usarlo en tus proyectos
- 🔷 **Solo tienes que** dar crédito

### ¿Por qué CC BY 4.0?

- Es una licencia **permisiva** (da libertad)
- Permite que otros aprendan de mi código
- Protege mi autoría pero no limita el uso
- Es perfecta para proyectos educativos

---

## ❓ ¿Y si usara CC BY-SA?

### Situación hipotética:

> "Si una imagen tuviera licencia **CC BY-SA**, ¿qué licencia debería usar para mi proyecto?"

**Tendría que usar CC BY-SA también.**

La licencia **SA (ShareAlike)** significa "compartir igual". Es como un virus legal (pero bueno):

```
Imagen con CC BY-SA
       ↓
Mi proyecto DEBE ser CC BY-SA también
```

**ShareAlike = Si usas mi trabajo, tienes que compartir TU trabajo con la misma licencia**

### ¿Qué pasaría si no lo hago?

- ❌ Violaría la licencia
- ❌ El autor me podría exigir que retire su imagen
- ❌ Problemas legales

### ¿Cómo se evita?

1. **Revisar TODAS las licencias** antes de usar imágenes
2. Preferir **CC0** o **CC BY** (sin SA)
3. Documentar todo en `credits.html`

---

## 🔧 Cómo probar el proyecto

### Checklist de testing:

- [ ] La galería cambia de imagen al hacer clic
- [ ] El modal de video se abre y cierra
- [ ] El video se pausa al cerrar el modal
- [ ] El audio se reproduce correctamente
- [ ] El icono del botón está animado
- [ ] El scroll entre secciones es suave
- [ ] Funciona en Chrome, Firefox y Edge
- [ ] Se ve bien en móvil (DevTools → responsive)

---

## 📱 Responsive Design

El proyecto se adapta a:

- 📱 **Móvil** (< 768px): Una columna, menú vertical
- 📱 **Tablet** (768px - 1024px): Dos columnas
- 💻 **Escritorio** (> 1024px): Diseño completo

---

## 📞 Contacto

**Estudiante**: Mauri  
**Email**: mauri1658jr@alumnos.ilerna.com  
**Asignatura**: Diseño de Interfaces Web  
**Curso**: 2º DAW  
**Fecha**: Diciembre 2025

---

## 🎯 Criterios de Evaluación Cumplidos

### RA3: Contenido Multimedia

- ✅ Imágenes optimizadas (JPG, PNG)
- ✅ Video MP4 (H.264)
- ✅ Audio MP3
- ✅ Animación (icono animado con JS/CSS)
- ✅ Licencias documentadas

### RA4: Interactividad

- ✅ HTML5 semántico
- ✅ JavaScript funcional (galería + modal)
- ✅ Estilos CSS con hover y focus
- ✅ Diseño responsive
- ✅ Accesibilidad básica

