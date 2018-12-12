// Burguer btn Movil menu
const $btnHamburger = document.getElementById('hamburger');
const $spanburger = document.getElementById('spanburger');

$btnHamburger.addEventListener('click', ()=>{
  $btnHamburger.classList.toggle('is-active');
  
});
// Fin Burguer btn Movil menu
// Light Box
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});
// Fin Light Box

// Preguntas Frecuentes
//Fin Preguntas Frecuentes