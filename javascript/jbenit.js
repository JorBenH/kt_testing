// function for navbar
$(function () {
  $(document).scroll(function () {
    var $nav = $("#mainNavbar");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

// function for background animation
$(document).ready(function() {
  $(window).scroll(function() {
    var barra = $(window).scrollTop();
    var position = barra * 0.25;

    $('body').css({
      'background-position': "0 -" + position + 'px'
    });
  });
});

// function for image slider
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 7000);
}
