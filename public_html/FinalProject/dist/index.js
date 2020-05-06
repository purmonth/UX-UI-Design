
function openPage(element) {
  $(element).removeClass("hidden");
}
function closeWholePage() {
  $("#HomePage").addClass("hidden");
  $("#LoginPage").addClass("hidden");
  $("#SignupPage").addClass("hidden");
}
function scrollTop(element) {
  $(element).click(function () {
    $("html, body").animate({ scrollTop: 0 }, 333);
  });
}
function clickChangePage(button, pagename) {
  $(button).click(function () {
    closeWholePage();
    openPage(pagename);
  });
}
console.log("Connetct")

clickChangePage("#Signin_button", "#LoginPage");
clickChangePage(".slider_close", "#HomePage");
clickChangePage(".footer_button", "#SignupPage");

$(function () {
  $('#BackToTop').click(function () {
      $('html, body').animate({ scrollTop: 0 }, 333);
  });
  $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
          $('#BackToTop').fadeIn(222);
      } else {
          $('#BackToTop').stop().fadeout(222);
      }
  }).scroll();
});