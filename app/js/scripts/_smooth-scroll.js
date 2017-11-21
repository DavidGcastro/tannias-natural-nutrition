$(document).ready(function () {

    var headerHeight = $(".site-header").outerHeight();
    var headerTop = parseInt($('.site-header').css("top"),10);
    var trueHeight = headerHeight + headerTop;
    


    $("nav li a ").on("click", function (e) {
        
      
        console.log(trueHeight);
        var linkHref = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(linkHref).offset().top - trueHeight
        }, 1000);

        e.preventDefault();
    });

});
