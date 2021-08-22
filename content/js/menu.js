// Sticky Header
$(window).scroll(function() {
  if ($(window).scrollTop() > 100) {
    $(".main_h .container-fluid").addClass("sticky");
  } else {
    $(".main_h .container-fluid").removeClass("sticky");
  }
});