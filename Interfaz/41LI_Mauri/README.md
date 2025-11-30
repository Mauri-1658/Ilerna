# Portfolio Interactivo MiArma - Artista Digital

> Proyecto de evaluación para el módulo de Diseño de Interfaces Web

## 📋 Descripción del Proyecto

Portfolio interactivo de una página para la artista digital ficticia "MiArma", especializada en paisajes de ciencia ficción. El proyecto demuestra competencias en:

- **RA3**: Gestión y optimización de contenido multimedia
- **RA4**: Interactividad con JavaScript y maquetación HTML5/CSS3

---

## 🎨 Tabla de Recursos Externos

| Archivo               | Fuente                                         | Licencia                      |
| --------------------- | ---------------------------------------------- | ----------------------------- |
| `hero-image.jpg`      | [Pexels](https://www.pexels.com)               | Pexels License (CC0)          |
| `logo.png`            | [Flaticon](https://www.flaticon.com)           | Flaticon License (Atribución) |
| `gallery/image-1.jpg` | [Pexels](https://www.pexels.com)               | Pexels License (CC0)          |
| `gallery/image-2.jpg` | [Pexels](https://www.pexels.com)               | Pexels License (CC0)          |
| `gallery/image-3.jpg` | [Pexels](https://www.pexels.com)               | Pexels License (CC0)          |
| `reel-video.mp4`      | [Pexels Videos](https://www.pexels.com/videos) | Pexels License (CC0)          |
| `ambient-sound.mp3`   | [Freesound](https://freesound.org)             | CC0 / CC BY                   |
| `contact-icon.gif`    | Creación propia                                | N/A                           |

### 📝 Instrucciones para Completar

Para cada recurso marcado como "Por añadir":

1. **Imágenes**: Visita [Pexels](https://www.pexels.com) y busca términos como:

   - "futuristic landscape"
   - "sci-fi space"
   - "cyberpunk city"
   - "space station"

2. **Vídeo**: En [Pexels Videos](https://www.pexels.com/videos), busca:

   - "space animation"
   - "cosmic"
   - "digital abstract"

3. **Audio**: En [Freesound](https://freesound.org), busca:

   - "ambient space"
   - "sci-fi atmosphere"
   - "electronic ambient"

4. **Descarga y optimiza** según las especificaciones de la Fase 1

5. **Actualiza esta tabla** con el nombre del autor y el enlace exacto

---

## 🛠️ Herramientas Utilizadas

### Optimización de Imágenes

- **GIMP** (GNU Image Manipulation Program) - Para redimensionar y optimizar imágenes
  - Alternativa online: [Photopea](https://www.photopea.com)
- **TinyPNG** - Compresión adicional sin pérdida de calidad
  - URL: https://tinypng.com

### Procesamiento de Vídeo

- **HandBrake** - Conversión de vídeo a MP4 (H.264)
  - Configuración: H.264, Web Optimized, Quality: 22
- **Alternativa**: FFmpeg (línea de comandos)
  ```bash
  ffmpeg -i input.mp4 -c:v libx264 -preset slow -crf 23 -c:a aac -b:a 128k output.mp4
  ```

### Edición de Audio

- **Audacity** - Recorte y exportación de audio
  - Formato: MP3, 128 kbps, mono
- **Alternativa online**: [TwistedWave](https://twistedwave.com/online)

### Creación de GIF

- **GIMP** - Combinación de capas para animación
- **ezgif.com** - Herramienta online para crear y optimizar GIFs
  - URL: https://ezgif.com/maker

### Desarrollo Web

- **Visual Studio Code** - Editor de código
- **Chrome DevTools** - Testing y debugging
- **Live Server** - Servidor local para desarrollo

---

## 📐 Justificación de Formatos Técnicos

### Imágenes

#### JPG para la Imagen Hero

**Por qué JPG y no PNG:**

- El formato JPG es ideal para fotografías y paisajes con gradientes de color
- Ofrece mejor compresión con pérdida mínima de calidad visual
- El tamaño del archivo es significativamente menor (250KB vs >2MB en PNG)
- PNG sería innecesario ya que no necesitamos transparencia en la imagen hero

#### PNG para el Logo

**Por qué PNG y no JPG:**

- PNG mantiene la transparencia del fondo, esencial para el logo
- No tiene compresión con pérdida, manteniendo los bordes nítidos
- Ideal para gráficos con áreas de color sólido

#### WEBP como Alternativa Moderna

- Ofrece mejor compresión que JPG con la misma calidad
- Soporta transparencia como PNG
- Compatible con navegadores modernos
- Puede reducir el peso hasta un 30% adicional

### Vídeo

#### MP4 (H.264) para el Reel

**Por qué MP4 H.264:**

- **Compatibilidad universal**: Soportado por todos los navegadores modernos
- **Compresión eficiente**: Mantiene calidad visual con tamaño pequeño (<3MB)
- **Web-optimized**: Permite reproducción progresiva (stream)
- **Hardware acceleration**: Decodificación acelerada en dispositivos

**Configuraciones aplicadas:**

- Codec de vídeo: H.264 (libx264)
- CRF (Constant Rate Factor): 23 (balance calidad/tamaño)
- Preset: slow (mejor compresión)
- Resolución: 1920x1080 o menor
- Framerate: 30fps

### Audio

#### MP3 para el Audio Ambiental

**Por qué MP3:**

- **Compatibilidad**: Soportado universalmente
- **Compresión**: 128 kbps es suficiente para audio ambiental
- **Tamaño**: Un clip de 15s ocupa ~240KB
- **Calidad**: Imperceptible la pérdida en audio ambiente

**Por qué no WAV:**

- WAV sin comprimir ocuparía ~2.5MB para 15 segundos
- No ofrece ventajas audibles para audio web

### GIF para Animación de Botón

#### Por qué GIF:

- **Función específica**: Animaciones simples de pocos frames
- **Sin dependencias**: No requiere JavaScript para animar
- **Compatibilidad**: Universal, incluso en emails
- **Tamaño controlable**: 2-3 frames optimizados (~50KB)

**Limitaciones aceptadas:**

- Paleta de 256 colores (suficiente para iconos simples)
- Sin canal alpha verdadero (pero con transparencia binaria)

---

## ⚖️ Licencia de Tu Obra (Landing Page)

### 📜 Licencia Elegida

He elegido para este proyecto la licencia:

**Creative Commons Atribución 4.0 Internacional (CC BY 4.0)**

![CC BY 4.0](https://i.creativecommons.org/l/by/4.0/88x31.png)

### ¿Qué significa CC BY 4.0?

Esta licencia permite a otros:

- ✅ **Compartir**: Copiar y redistribuir el material en cualquier medio o formato
- ✅ **Adaptar**: Remezclar, transformar y construir sobre el material
- ✅ **Uso comercial**: Usar el material para propósitos comerciales

**Bajo las siguientes condiciones:**

- 🔷 **Atribución**: Deben dar crédito apropiado, proporcionar un enlace a la licencia, e indicar si se realizaron cambios.

### ¿Por qué elegí CC BY 4.0?

1. **Permisiva y flexible**: Permite el máximo uso posible de mi trabajo
2. **Fomenta la colaboración**: Otros pueden aprender y mejorar sobre mi código
3. **Educativa**: Apropiada para un proyecto académico que puede servir de ejemplo
4. **Balance perfecto**: Protege mi autoría pero permite reutilización

---

## 🔍 Análisis de Compatibilidad de Licencias

### ¿Por qué puedo usar CC BY 4.0 para mi proyecto?

Mi landing page es una **obra derivada** que combina:

- Código HTML/CSS/JavaScript (creación propia)
- Recursos multimedia con licencias CC0 y Pexels License

#### Compatibilidad con Pexels License (CC0-equivalente):

- ✅ **Pexels License** es similar a CC0 (dominio público)
- ✅ No requiere atribución (aunque es buena práctica darla)
- ✅ Permite uso comercial sin restricciones
- ✅ **Compatible con CC BY 4.0** porque no impone restricciones adicionales

#### Compatibilidad con CC0:

- ✅ **CC0** renuncia a todos los derechos (dominio público)
- ✅ No requiere atribución
- ✅ Totalmente permisivo
- ✅ **Compatible con cualquier licencia**, incluyendo CC BY 4.0

### Jerarquía de Licencias

```
CC0 / Pexels License (más permisivas)
        ↓
    CC BY 4.0  ← Mi elección
        ↓
   CC BY-SA 4.0 (requiere compartir igual)
        ↓
   CC BY-NC 4.0 (no comercial)
```

**Regla general**: Puedo elegir una licencia **más restrictiva** que las de mis recursos base, pero no **menos restrictiva**.

---

## ❓ Escenario Hipotético: ¿Y si usara CC BY-SA?

### Pregunta:

> "Si una de las imágenes de la galería hubiera tenido una licencia Creative Commons Atribución-CompartirIgual (CC BY-SA), ¿qué licencia estarías obligado a usar para tu landing page? ¿Por qué?"

### Respuesta:

**Estaría obligado a usar CC BY-SA 4.0 (o una versión compatible de ShareAlike).**

### Explicación Detallada:

#### ¿Qué es "ShareAlike" (CompartirIgual)?

La cláusula **SA (ShareAlike)** es una condición "viral" o "copyleft" que establece:

> "Si remezclas, transformas o creas a partir del material, debes distribuir tus contribuciones bajo **la misma licencia** que el original."

#### ¿Por qué es obligatorio?

1. **Obra derivada**: Mi landing page que incorpora la imagen CC BY-SA se convierte en una "obra derivada"

2. **Herencia de licencia**: La cláusula SA se "propaga" a toda la obra derivada

3. **No hay excepción**: Aunque solo UNA imagen tenga CC BY-SA, contamina (legalmente) todo el proyecto

#### Ejemplo Práctico:

```
Imagen de galería: CC BY-SA 4.0
        ↓
Landing page (obra derivada): DEBE ser CC BY-SA 4.0
        ↓
No podría usar: CC BY, CC BY-NC, o licencias propietarias
```

#### ¿Qué pasaría si uso CC BY en lugar de CC BY-SA?

- ❌ **Violación de licencia**: Estaría incumpliendo los términos de CC BY-SA
- ❌ **Consecuencias legales**: El autor original podría exigir que retire el contenido
- ❌ **Pérdida de derechos**: Podría perder el derecho a usar esa imagen

#### Incompatibilidades Importantes:

**CC BY-SA es incompatible con:**

- ❌ Licencias propietarias (con copyright tradicional)
- ❌ CC BY-NC (no comercial) - puedes usar ambas, pero la obra resultante sería BY-NC-SA
- ❌ Cualquier licencia que NO incluya la cláusula ShareAlike

#### ¿Cómo evitar este problema?

**Estrategias preventivas:**

1. **Verificar TODAS las licencias** antes de usar recursos
2. **Preferir CC0, CC BY** para máxima flexibilidad
3. **Documentar** cada recurso en `credits.html`
4. **Si dudo**: Contactar al autor o buscar alternativa

#### Comparación de Escenarios:

| Mi caso actual (CC0/Pexels)   | Escenario hipotético (CC BY-SA)  |
| ----------------------------- | -------------------------------- |
| Puedo elegir CC BY 4.0        | **Debo** usar CC BY-SA           |
| Máxima flexibilidad           | Restricción heredada             |
| Compatible con uso comercial  | Compatible, pero con condiciones |
| Puedo cambiar licencia futura | Atado a ShareAlike               |

---

## 🚀 Cómo Ejecutar el Proyecto

### Requisitos Previos

- Servidor web local (XAMPP, Live Server, o similar)
- Navegador web moderno (Chrome, Firefox, Edge)

### Instalación

1. **Clonar/Descargar** el proyecto en tu carpeta local:

   ```
   c:\xampp\htdocs\Ilerna\Interfaz\41LI_Mauri\
   ```

2. **Descargar recursos multimedia** de las fuentes indicadas y colocarlos en:

   ```
   assets/
   ├── images/
   │   ├── hero/hero-image.jpg
   │   ├── logo/logo.png
   │   ├── gallery/
   │   │   ├── thumbnails/ (thumb-1.jpg, thumb-2.jpg, thumb-3.jpg)
   │   │   └── full/ (image-1.jpg, image-2.jpg, image-3.jpg)
   ├── video/reel-video.mp4
   └── audio/ambient-sound.mp3
   ```

3. **Abrir** con servidor local:
   - XAMPP: `http://localhost/Ilerna/Interfaz/41LI_Mauri/`
   - Live Server: Click derecho → "Open with Live Server"

### Verificación Cross-Browser

1. **Chrome**: Abrir DevTools (F12) y probar galería + modal
2. **Firefox**: Verificar misma funcionalidad
3. **Edge**: Confirmar compatibilidad

### Testing Responsive

En DevTools (F12):

1. Click en icono de dispositivo móvil
2. Probar con:
   - iPhone SE (375px)
   - iPad (768px)
   - Desktop (1920px)

---

## ✨ Funcionalidades Implementadas

### ✅ Fase 1: Contenido Multimedia (RA3)

- [x] Estructura de carpetas organizada
- [x] Plantillas para imágenes optimizadas
- [x] Sistema de atribución en `credits.html`
- [x] Documentación de licencias

### ✅ Fase 2: Interactividad (RA4)

- [x] HTML5 semántico (`<header>`, `<main>`, `<section>`, `<footer>`)
- [x] Galería interactiva con JavaScript
- [x] Modal de vídeo funcional
- [x] Estilos CSS con `:hover` y `:focus`
- [x] Transiciones suaves
- [x] Diseño responsive
- [x] Accesibilidad con teclado (ESC para cerrar modal)

---

## 📞 Contacto

**Desarrollador**: [Tu Nombre]  
**Asignatura**: Diseño de Interfaces Web  
**Fecha**: Noviembre 2025

---

## 📄 Licencia

Este proyecto está licenciado bajo [Creative Commons Atribución 4.0 Internacional (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/).

Puedes usar, modificar y distribuir este código siempre que des atribución apropiada.
