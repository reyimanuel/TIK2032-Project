window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;
    
    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("appear");
    }
    else {
      reveals[i].classList.remove("appear");
    }
  }
};    

/* Hamburger Menu */
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('header ul');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('active');
});
/* Hamburger Menu */

/* Sticky Navigation Bar */
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});
/* Sticky Navigation Bar */