var offset = - (window.innerHeight.toFixed(2) / 7.8);

$(document).ready(function() {

  navChange();

  $("#back2Top").click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

  $("#product-link").click(function(event) {
    event.preventDefault();
    $("html, body").animate({
      scrollTop: $("#project").offset().top + offset},
        'slow');
    return false;
  });

  $("#about-link").click(function(event) {
    event.preventDefault();
    $("html, body").animate({
      scrollTop: $("#about").offset().top  + offset},
        'slow');
    return false;
  });

  $("#contact-link").click(function(event) {
    event.preventDefault();
    $("html, body").animate({
      scrollTop: $("#contact").offset().top + offset},
        'slow');
    return false;
  });

});



$(window).scroll(function() {
  var height = $(window).scrollTop();
  if (height > 350) {
    $('#back2Top').fadeIn();
    $('#hint').fadeOut();
  } else {
    $('#back2Top').fadeOut();
    $('#hint').fadeIn();
  }



  navChange();

});

function navChange() {
  offset = - (window.innerHeight.toFixed(2) / 7.8);
  var secondOffset = - (window.innerHeight.toFixed(2) / 2.6);

  var about = $("#about").offset().top;
  var product = $("#project").offset().top;

  if ($(window).scrollTop() >= (about + offset + secondOffset)) {
    $('#about-link').addClass('visit');
    $('#product-link').removeClass('visit');
  } else if ($(window).scrollTop() >= (product + offset + secondOffset)) {
    $('#about-link').removeClass('visit');
    $('#product-link').addClass('visit');
  } else {
    $('#about-link').removeClass('visit');
    $('#product-link').removeClass('visit');
  }
}
