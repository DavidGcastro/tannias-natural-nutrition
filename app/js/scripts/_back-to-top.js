var backToTop = document.getElementById("back-to-top");
var footer = $(".footer").outerHeight();
var top = $(".footer").scrollTop();

$(backToTop).css("display", "none");

$(window).scroll(function () {
    //    console.log($(window).height());
    //    console.log($(window).scrollTop());
    //    console.log($(document).height());
    //     
   
    if ($(window).scrollTop() + $(window).height() > 4000 && $(window).height() + $(window).scrollTop() < $(document).height() - footer) {
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
