// function for navbar
$(function () {
  $(document).scroll(function () {
    var $nav = $("#mainNavbar");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

$(function () {
  $(document).scroll(function () {
    var $scrollPos = $(this).scrollTop();
    if ($scrollPos <= 0) {
        $("#float-button").hide(1000);
    } else {
        $("#float-button").show(1000);
    }
  });
});

// function for background scroll
$(document).ready(function() {
  $(window).scroll(function() {
    var barra = $(window).scrollTop();
    var position = barra * 0.25;

    $('body').css({
      'background-position': "0 -" + position + 'px'
    });
  });
});

var flag = true;

function clickg(clicked_id){
  console.log(clicked_id);
  if(flag) {
    $("#imgslider01").removeClass("d-none");
    $("#closebtn").removeClass("d-none");
    flag = false;
  }
  else {
    $("#imgslider01").addClass("d-none");
    $("#closebtn").addClass("d-none");
    flag = true;
  }
}
