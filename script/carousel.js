/*
the idea for this carousel is W3 school
How TO - Slideshow
https://www.w3schools.com/howto/howto_js_slideshow.asp
*/

var slideIndex = 1;
showSlides(slideIndex);

$(document).ready(function() {
  var nIntervId;

  nIntervId = setInterval(function() {
    showSlides(++slideIndex)
  }, 10000); // Wait 2000ms before running again

});

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}