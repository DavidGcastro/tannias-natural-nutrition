var menuIcon = document.getElementsByClassName("site-header--close-icon");
var siteHeader = document.getElementsByClassName("site-header");
var content = document.getElementsByClassName("site-header--content");
var addMe = document.getElementsByClassName("content-medium");
var openNavHeight = $(content).outerHeight();





$(menuIcon).on("click", function () {
    $(content).slideToggle(500, function () {
        $(this).toggleClass("content-medium").css("display", "");
        //icon switch
        $("i", "#icon").toggleClass("fa fa-bars").toggleClass("fa fa-times aria-hidden='true'");
        
        
    })


});



