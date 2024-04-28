$(document).ready(function() {
    $(".hamburger").click(function() {
        $(".nav").slideToggle();
        $("body").toggleClass("active");
    });
});