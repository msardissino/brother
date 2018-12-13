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
const $preg1 = document.querySelector('[data-target="#collapseOne"]');
const $span1 = document.querySelector('[data-target="spanOne"]');
const $preg2 = document.querySelector('[data-target="#collapseTwo"]');
const $span2 = document.querySelector('[data-target="spanTwo"]');
const $preg3 = document.querySelector('[data-target="#collapseThree"]');
const $span3 = document.querySelector('[data-target="spanThree"]');

$preg1.addEventListener('click', ()=>{
  $span1.classList.toggle('icon-menos');
  $span1.classList.toggle('icon-mas');

});
$preg2.addEventListener('click', ()=>{
  $span2.classList.toggle('icon-menos');
  $span2.classList.toggle('icon-mas');

});
$preg3.addEventListener('click', ()=>{
  $span3.classList.toggle('icon-menos');
  $span3.classList.toggle('icon-mas');

});

//Fin Preguntas Frecuentes