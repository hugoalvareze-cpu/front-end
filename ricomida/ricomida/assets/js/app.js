

//inicio tooltip//
  document.addEventListener("DOMContentLoaded", function() {
    // Selecciona todos los elementos con data-bs-toggle="tooltip"//
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    // Inicializa cada uno con Bootstrap//
    const tooltipList = [...tooltipTriggerList].map(el => new bootstrap.Tooltip(el));
  });


// para carrusel //
document.addEventListener('DOMContentLoaded', initComponents);

const carousel = new bootstrap.Carousel('#myCarousel')


      
