$(document).ready(function () {

    var menuIcon = document.getElementsByClassName("site-header--close-icon");
    var siteHeader = document.getElementsByClassName("site-header");
    var content = document.getElementsByClassName("site-header--content");

    $(menuIcon).on("click", function () {
        $(content).slideToggle(300, function(){
           $(this).toggleClass("content-medium").css("display", "");
        });

    });


});