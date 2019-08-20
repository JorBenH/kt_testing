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
var lastId = "";

function clickg(clicked_id){
  if(clicked_id != "closebtn")
  {
      var aidis = "#" + clicked_id + "_imgslider";
      lastId = aidis;
  }

  if(flag) {
    $(lastId).removeClass("d-none");
    $("#closebtn").removeClass("d-none");
    $("#bg_is").removeClass("d-none");
    document.body.style.overflow = 'hidden';
    flag = false;
  }
  else {
    $(lastId).addClass("d-none");
    $("#closebtn").addClass("d-none");
    $("#bg_is").addClass("d-none");
    document.body.style.overflow = 'visible';
    flag = true;
  }
}
