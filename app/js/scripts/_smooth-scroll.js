$(document).ready(function () {
    //find the height of nav, since nav is position relative and hasa negative top, i need another var, to find the
    //value of the top and parese that into an integer
    //then i hadd the height of the nav as detected by outerheight and add it with the value of my top
    var headerHeight = $(".site-header").outerHeight();
    var headerTop = parseInt($('.site-header').css("top"), 10);
    var trueHeight = headerHeight + headerTop;
    var content = document.getElementsByClassName("site-header--content");




    // when u click on a link in the nav
    $("nav li a ").on("click", function (e) {
        $("nav li a").css("color", "#575756");
        $(this).css("color", "#88c1ba");
        
        // stop the damn mobile nav behavior on 768 and above!
        var windowWidth = $(window).width();
        if (windowWidth < 768) {
            $(content).slideUp(500, function () {
                $(this).toggleClass("content-medium").css("display", "");

            });

        }



        var linkHref = $(this).attr('href');
        //clicked nav is equal to this, we set the href to a variable



        $('html, body').animate({
            //we select the dom element that has the same id or class as the clicked anchors tags href
            scrollTop: $(linkHref).offset().top - trueHeight
            //scroll to the element clicked, BUT get the coordinate of the divs top position minus the height of the nav, to prevent overlap
        }, 1000); //slow it down

        e.preventDefault(); //prevent the defualt fast scroll
    });

});
