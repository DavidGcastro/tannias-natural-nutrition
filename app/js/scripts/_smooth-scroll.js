$(document).ready(function () {

    var headerHeight = $(".site-header").outerHeight();


    $("nav li a ").on("click", function (e) {
        var linkHref = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(linkHref).offset().top - headerHeight
        }, 1000);

        e.preventDefault();
    });

});
