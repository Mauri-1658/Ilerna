/**
 * main.js — JavaScript principal de Pizzería Franver
 * Refactorizado desde custom.js
 * Mejoras: uso de const/let, addEventListener, mejor estructura
 */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // ============================
  // NIVO SLIDER — Inicialización
  // ============================
  jQuery(window).on('load', function () {
    if (jQuery('#slider').length > 0) {
      jQuery('#slider').nivoSlider({
        effect: 'fade',
        pauseTime: 5000,
        animSpeed: 600,
        directionNav: true,
        controlNav: true
      });
    }
  });

  // ============================
  // NAVEGACIÓN RESPONSIVE
  // ============================
  const toggleMenu = document.querySelector('.toggleMenu');
  const siteNav = document.querySelector('.sitenav');

  // Añadir clase "parent" a enlaces con submenú
  document.querySelectorAll('.sitenav li a').forEach(function (link) {
    if (link.nextElementSibling) {
      link.classList.add('parent');
    }
  });

  // Toggle del menú en móvil
  if (toggleMenu) {
    toggleMenu.addEventListener('click', function (e) {
      e.preventDefault();
      this.classList.toggle('active');
      jQuery(siteNav).slideToggle('fast');
    });
  }

  /**
   * Ajusta el comportamiento del menú según el ancho de pantalla
   */
  function adjustMenu() {
    const windowWidth = window.innerWidth;

    if (windowWidth < 981) {
      if (toggleMenu) toggleMenu.style.display = 'block';

      if (toggleMenu && !toggleMenu.classList.contains('active')) {
        if (siteNav) siteNav.style.display = 'none';
      } else {
        if (siteNav) siteNav.style.display = 'block';
      }

      // Desactivar hover en móvil
      jQuery('.sitenav li').unbind('mouseenter mouseleave');
    } else {
      if (toggleMenu) toggleMenu.style.display = 'none';
      if (siteNav) siteNav.style.display = 'block';

      jQuery('.sitenav li').removeClass('hover');
      jQuery('.sitenav li a').unbind('click');
      jQuery('.sitenav li').unbind('mouseenter mouseleave').bind('mouseenter mouseleave', function () {
        jQuery(this).toggleClass('hover');
      });
    }
  }

  adjustMenu();

  // Recalcular en resize
  window.addEventListener('resize', adjustMenu);

  // ============================
  // ANIMACIONES AL SCROLL
  // ============================
  function handleScrollAnimations() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const triggerOffset = 400;

    // Animar sección de servicios
    document.querySelectorAll('.services-wrap').forEach(function (el) {
      if (el.getBoundingClientRect().top + scrollTop < scrollTop + triggerOffset) {
        el.classList.add('fadeInLeft');
      }
    });

    // Animar posts del blog
    document.querySelectorAll('#FrontBlogPost .BlogPosts').forEach(function (el) {
      if (el.getBoundingClientRect().top + scrollTop < scrollTop + triggerOffset) {
        el.classList.add('fadeInRight');
      }
    });
  }

  window.addEventListener('scroll', handleScrollAnimations);

  // ============================
  // BOTÓN DE PEDIDO ONLINE
  // ============================
  const btnPedido = document.querySelector('.btn-pedido-online');
  if (btnPedido) {
    btnPedido.addEventListener('click', function () {
      const url = this.getAttribute('data-url');
      if (url) {
        window.open(url, '_self');
      }
    });
  }
});
