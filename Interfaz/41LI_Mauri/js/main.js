/**
 * Portfolio Interactivo MiArma
 * JavaScript para funcionalidad de galería y modal de vídeo
 */

/**
 * Actualiza la imagen principal de la galería cuando se hace clic en una miniatura
 * @param {Event} event - El evento de clic en la miniatura
 */
function updateGalleryImage(event) {
    const thumbnail = event.target;
    
    // Verificar que el elemento clickeado es una miniatura
    if (!thumbnail.classList.contains('thumbnail')) {
        return;
    }
    
    // Obtener la ruta de la imagen completa desde el atributo data
    const fullImageSrc = thumbnail.dataset.fullImage;
    
    // Actualizar la imagen principal
    const mainImage = document.getElementById('gallery-main-image');
    mainImage.src = fullImageSrc;
    
    // Actualizar la clase 'active' en las miniaturas
    const allThumbnails = document.querySelectorAll('.thumbnail');
    allThumbnails.forEach(thumb => thumb.classList.remove('active'));
    thumbnail.classList.add('active');
    
    // Actualizar el texto alternativo
    mainImage.alt = thumbnail.alt.replace('Miniatura -', 'Obra de galería -');
}

/**
 * Abre el modal de vídeo y reproduce el vídeo
 */
function openVideoModal() {
    const modal = document.getElementById('video-modal');
    const video = document.getElementById('modal-video');
    
    // Mostrar el modal
    modal.classList.add('active');
    
    // Reproducir el vídeo automáticamente
    video.play();
    
    // Prevenir scroll del body cuando el modal está abierto
    document.body.style.overflow = 'hidden';
}

/**
 * Cierra el modal de vídeo y pausa el vídeo
 */
function closeVideoModal() {
    const modal = document.getElementById('video-modal');
    const video = document.getElementById('modal-video');
    
    // Ocultar el modal
    modal.classList.remove('active');
    
    // Pausar y reiniciar el vídeo
    video.pause();
    video.currentTime = 0;
    
    // Restaurar scroll del body
    document.body.style.overflow = 'auto';
}

/**
 * Maneja el clic fuera del contenido del modal para cerrarlo
 * @param {Event} event - El evento de clic
 */
function handleModalBackdropClick(event) {
    const modal = document.getElementById('video-modal');
    
    // Si se hace clic en el fondo del modal (no en el contenido)
    if (event.target === modal) {
        closeVideoModal();
    }
}

/**
 * Maneja la tecla ESC para cerrar el modal
 * @param {KeyboardEvent} event - El evento del teclado
 */
function handleEscapeKey(event) {
    if (event.key === 'Escape') {
        const modal = document.getElementById('video-modal');
        if (modal.classList.contains('active')) {
            closeVideoModal();
        }
    }
}

/**
 * Inicializa todos los event listeners cuando el DOM está listo
 */
function initializeEventListeners() {
    // Event listeners para la galería
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', updateGalleryImage);
        
        // Accesibilidad: permitir navegación con teclado
        thumbnail.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                updateGalleryImage(event);
            }
        });
        
        // Hacer las miniaturas focusables
        thumbnail.setAttribute('tabindex', '0');
    });
    
    // Event listeners para el modal de vídeo
    const btnOpenModal = document.getElementById('btn-open-modal');
    const btnCloseModal = document.getElementById('btn-close-modal');
    const modal = document.getElementById('video-modal');
    
    btnOpenModal.addEventListener('click', openVideoModal);
    btnCloseModal.addEventListener('click', closeVideoModal);
    modal.addEventListener('click', handleModalBackdropClick);
    
    // Event listener para cerrar con la tecla ESC
    document.addEventListener('keydown', handleEscapeKey);
}

/**
 * Función de inicialización principal
 * Se ejecuta cuando el DOM está completamente cargado
 */
function init() {
    console.log('Portfolio MiArma inicializado');
    initializeEventListeners();
}

// Iniciar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
