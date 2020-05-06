function changeColor(){
  var Arraycolor=new Array("rgb(21,82,139)","rgb(21,84,144)","rgb(208,182,169)","rgb(210,171,162)");
  var n=0;
  function turncolors(){
    n++;
    if (n==(Arraycolor.length-1)) n=0;
    document.bgColor = Arraycolor[n];
    setTimeout("turncolors()",1000);
  }
  turncolors();
}



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
clickChangePage("#Signup_container_button", "#SignupPage");
clickChangePage("#Login_container_button", "#SignupPage");

$(function () {
  $('#BackToTop').click(function () {
      $('html, body').animate({ scrollTop: 0 }, 333);
  });
  
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 300) {
      $('#BackToTop').fadeIn(222);
  } else {
      $('#BackToTop').stop().fadeout(222);
  }
}).scroll();