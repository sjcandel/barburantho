/* ******************************************************************** */
/* menu hamburger */
/* ******************************************************************** */

$(document).ready(function() {
  console.log("Jquery ok");
  $("#menu-close").hide();
  $("#menu-open").click(function() {
    $("#menu").slideDown();
    $("#menu-open").hide();
    $("#menu-close").show();
    console.log("menu-open mobile nav");
  });

  $("#menu-close").click(function() {
    $("#menu").slideUp();
    $("#menu-close").hide();
    $("#menu-open").show();
    console.log("menu-close mobile nav");
  });

  $(window).resize(function() {
    if ($(window).width() >= 600) {
      $("#menu:hidden").hide();
    }
  });
});

/* ******************************************************************** */
/* smooth scroll */
/* ******************************************************************** */
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top
          },
          1000
        );
        return false;
      }
    }
  });
});
