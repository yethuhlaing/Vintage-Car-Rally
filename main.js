const selectElement = function ( element) {
     return document.querySelector(element);
};
let menuToggler = selectElement(".menu-toggle");
let body = selectElement( "body" ) ;

menuToggler.addEventListener("click", function () {
     body.classList.toggle("open");
});
// Scrol reveal
window.sr = new ScrollReveal();
sr.reveal(".animate-left", {
   origin: "left",
   duration: 1000,
   distance: "50rem",
   delay: 300 
});
sr.reveal(".animate-right", {
   origin: "right",
   duration: 1000,
   distance: "50rem",
   delay: 600 
});
sr.reveal(".animate-top", {
   origin: "top",
   duration: 1000,
   distance: "50rem",
   delay: 600 
});
sr.reveal(".animate-bottom", {
   origin: "bottom",
   duration: 1000,
   distance: "50rem",
   delay: 600 
});

document.querySelector('.img__btn').addEventListener('click', function() {
   document.querySelector('.cont').classList.toggle('s--signup');
 });

