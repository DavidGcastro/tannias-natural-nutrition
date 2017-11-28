var backToTop = document.getElementById("back-to-top");
var footer = $(".footer").outerHeight();
var top = $(".footer").scrollTop();


$(window).scroll(function () {
    console.log($(window).height());
    console.log($(window).scrollTop());
    console.log($(document).height());

    if ($(window).scrollTop() > 800 && $(window).height() + $(window).scrollTop() < $(document).height() - footer) {
        $(backToTop).fadeIn('fast');
    } else {
        $(backToTop).fadeOut('fast');
    }
});



$(backToTop).click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 700, 'swing');
    return false;
});



//$(window).scroll(function () {
//    // Check if the window is almost at the bottom (-230 for the height of the footer)
//    if ($(window).height() + $(window).scrollTop() >= $(document).height() - footer) {
//        console.log("goo");
//    }
//});
