// src/scripts/main.ts

import AOS from 'aos';
import 'aos/dist/aos.css';

// Le decimos al navegador: "Espera a que todo el contenido HTML de la página esté listo..."
document.addEventListener('DOMContentLoaded', () => {
  // "...y SÓLO ENTONCES, inicializa las animaciones."
  AOS.init({
    duration: 800,
    once: true,
  });
});