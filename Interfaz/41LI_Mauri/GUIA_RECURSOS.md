# Guía: Cómo Descargar Recursos Creative Commons

Esta guía te ayudará paso a paso a encontrar y descargar todos los recursos multimedia necesarios para el Portfolio MiArma.

---

## 📸 1. Imágenes (Pexels)

### Imagen Hero (Paisaje Futurista)

1. **Ve a**: https://www.pexels.com
2. **Busca**: "futuristic landscape" o "sci-fi planet"
3. **Filtra** por orientación horizontal (landscape)
4. **Descarga**:
   - Click en la imagen que te guste
   - Click en botón verde "Download"
   - Elige tamaño "Large" (1920px)
5. **Guarda** en: `assets/images/hero/hero-image.jpg`
6. **Anota**:
   - Nombre del fotógrafo (aparece debajo de la imagen)
   - Link de la foto (copia la URL)

### Imágenes de Galería (3 imágenes)

Repite el proceso para estas búsquedas:

**Imagen 1 - Estación Espacial:**

- Busca: "space station" o "sci-fi architecture"
- Guarda en: `assets/images/gallery/full/image-1.jpg`

**Imagen 2 - Ciudad Cyberpunk:**

- Busca: "cyberpunk city neon"
- Guarda en: `assets/images/gallery/full/image-2.jpg`

**Imagen 3 - Portal Espacial:**

- Busca: "cosmic portal" o "space abstract"
- Guarda en: `assets/images/gallery/full/image-3.jpg`

### Logo

1. **Ve a**: https://www.flaticon.com
2. **Busca**: "digital art" o "abstract logo"
3. **Descarga**:
   - Click en el icono
   - Elige formato PNG (512px)
   - Click "Download free"
4. **Guarda** en: `assets/images/logo/logo.png`
5. **IMPORTANTE**: Copia el texto de atribución que te proporciona Flaticon

---

## 🎬 2. Vídeo (Pexels Videos)

1. **Ve a**: https://www.pexels.com/videos
2. **Busca**: "space animation" o "digital abstract"
3. **Filtra**:
   - Duración: 10-20 segundos
   - Orientación: Horizontal
4. **Descarga**:
   - Click en el vídeo
   - Elige calidad "HD" o "Full HD"
5. **Guarda temporalmente** y luego necesitarás optimizarlo

---

## 🎵 3. Audio (Freesound)

1. **Ve a**: https://freesound.org
2. **Crea cuenta gratuita** (necesaria para descargar)
3. **Busca**: "ambient space" o "sci-fi atmosphere"
4. **Filtra**:
   - License: CC0 o CC BY
   - Duration: 30-60 segundos
5. **Descarga** el que más te guste
6. **Guarda temporalmente** para después optimizar

---

## 🛠️ Optimización de Recursos

### Imágenes

#### Usando TinyPNG (Online - Más Fácil):

1. Ve a https://tinypng.com
2. Arrastra tu imagen hero
3. Espera a que se comprima
4. Descarga y reemplaza si es <250KB

#### Usando GIMP (Más Control):

1. Abre la imagen en GIMP
2. Imagen > Escalar imagen
3. Establece ancho: 1920px (hero) o 400px (thumbnails)
4. Archivo > Exportar como
5. Formato: JPG, Calidad: 85%
6. Verifica que sea <250KB

### Vídeo

#### Usando HandBrake (Recomendado):

1. Descarga HandBrake: https://handbrake.fr
2. Abre tu vídeo
3. Presets > Web > "Gmail Small 3 Minutes 480p30"
4. Ajusta para que quede <3MB
5. Click "Start"
6. Guarda en: `assets/video/reel-video.mp4`

#### Usando FFmpeg (Línea de comandos):

```bash
ffmpeg -i input.mp4 -vcodec libx264 -crf 28 -preset slow -c:a aac -b:a 128k assets/video/reel-video.mp4
```

### Audio

#### Usando Audacity:

1. Descarga Audacity: https://www.audacityteam.org
2. Abre tu archivo de audio
3. Selecciona solo 15 segundos (la mejor parte)
4. Archivo > Exportar > Exportar como MP3
5. Bitrate: 128 kbps
6. Guarda en: `assets/audio/ambient-sound.mp3`

---

## 📝 Actualizar Atribuciones

Después de descargar cada recurso:

1. **Abre** `credits.html`
2. **Reemplaza** "Por añadir" con:
   - Nombre del autor
   - Link exacto del recurso
3. **Haz lo mismo** en `README.md`

### Ejemplo:

**Antes:**

```html
<td>Por determinar</td>
<td><a href="https://www.pexels.com">Pexels</a></td>
```

**Después:**

```html
<td>Felix Mittermeier</td>
<td>
  <a href="https://www.pexels.com/photo/purple-and-pink-galaxy-957061/"
    >Ver imagen</a
  >
</td>
```

---

## ✅ Checklist Final

Antes de terminar, verifica que tienes:

```
assets/
├── images/
│   ├── hero/
│   │   └── hero-image.jpg (1920px, <250KB)
│   ├── logo/
│   │   └── logo.png (512px, transparente)
│   └── gallery/
│       ├── full/
│       │   ├── image-1.jpg (1920px optimizado)
│       │   ├── image-2.jpg (1920px optimizado)
│       │   └── image-3.jpg (1920px optimizado)
│       └── thumbnails/
│           ├── thumb-1.jpg (400x250px)
│           ├── thumb-2.jpg (400x250px)
│           └── thumb-3.jpg (400x250px)
├── video/
│   └── reel-video.mp4 (<3MB, H.264)
└── audio/
    └── ambient-sound.mp3 (15s, 128kbps)
```

¡Listo! Tu portfolio estará completo y funcional.
