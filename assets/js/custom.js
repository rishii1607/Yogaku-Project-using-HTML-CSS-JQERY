$(document).ready(function() {
    $(".hamburger").click(function() {
        $(".nav").slideToggle();
        $("body").toggleClass("active");
    });
    $('.banner-slider').slick({
        arrows: false,
        dots: true,
      });
});