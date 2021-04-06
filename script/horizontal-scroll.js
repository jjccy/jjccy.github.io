$(function() {
  var print = function(msg) {
    alert(msg);
  };

  var setInvisible = function(elem) {
    elem.css('visibility', 'hidden');
  };
  var setVisible = function(elem) {
    elem.css('visibility', 'visible');
  };

  var elem = $("#elem");
  var items = elem.children();

  // Inserting Buttons
  elem.prepend('<div id="left-button" class="flex-item-min" style="visibility: hidden;"><a href="#"><</a></div>');
  elem.append('<div id="right-button" class="flex-item-min"><a href="#">></a></div>');

  // // Inserting Inner
  // items.wrapAll('<div id="inner" />');
  //
  // // Inserting Outer
  // elem.find('#inner').wrap('<div id="outer"/>');
  // $('#outer').addClass('flex-spaceholder-max');

  var outer = $('#outer');
  var actualWidth = 0;

  var updateUI = function() {
    var maxWidth = outer.outerWidth(true);
    $.each($('#inner >'), function(i, item) {
      actualWidth += $(item).outerWidth(true);
    });

    if (actualWidth <= maxWidth) {
      setInvisible($('#right-button'));
    }
  };
  updateUI();



  $('#left-button').click(function() {
    setVisible($('#right-button'));
    var leftPos = outer.scrollLeft();
    outer.animate({
      scrollLeft: leftPos - 450
    }, 800, function() {
      if ($('#outer').scrollLeft() <= 0) {
        setInvisible($('#left-button'));
      }
    });

    return false;
  });

  $('#right-button').click(function() {
    setVisible($('#left-button'));
    var leftPos = outer.scrollLeft();
    outer.animate({
      scrollLeft: leftPos + 450
    }, 800, function() {
      console.log("leftPos: " + leftPos);
      if ($('#outer').scrollLeft() >= (actualWidth - outer.outerWidth(true)) * 0.95) {
        setInvisible($('#right-button'));
      }
    });

    return false;
  });

  $(window).resize(function() {
    updateUI();
  });
});



// modal image


var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");

function modalClick(n) {
  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var imgId = "modal" + n;
  var img = document.getElementById(imgId);

  modal.style.display = "block";
  modalImg.src = img.src;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
