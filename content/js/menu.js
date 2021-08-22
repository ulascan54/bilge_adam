// Sticky Header
$(window).scroll(function() {
  if ($(window).scrollTop() > 100) {
    $(".main_h .container-fluid").addClass("sticky");
  } else {
    $(".main_h .container-fluid").removeClass("sticky");
  }
});

// Navigation Scroll - ljepo radi materem
// $("nav a").click(function(event) {
//   var id = $(this).attr("href");
//   var offset = 70;
//   var target = $(id).offset().top - offset;
//   $("html, body").animate(
//     {
//       scrollTop: target
//     },
//     500
//   );
//   event.preventDefault();
// });
