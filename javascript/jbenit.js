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
