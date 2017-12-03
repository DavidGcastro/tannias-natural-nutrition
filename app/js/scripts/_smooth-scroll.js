var headerHeight = $(".site-header").outerHeight();
var headerTop = parseInt($('.site-header').css("top"), 10);
var trueHeight = headerHeight + headerTop;
var content = document.getElementsByClassName("site-header--content");


$(document).ready(function () {
    $(document).on("scroll", onScroll);
    //smoothscroll
    $('nav li a').on('click', function (e) {
        //icon switch when clicking a link in the mobile menu


        $("nav li a").removeClass("active")
        $(this).addClass("active")
        // stop the damn mobile nav behavior on 768 and above!
        var windowWidth = $(window).width();

        if (windowWidth < 768) {
            $("#icon > i").removeClass("fa fa-times").addClass("fa fa-bars")



            $(content).slideUp(500, function () {
                $(this).toggleClass("content-medium").css("display", "");

            });
        }
        // If this method is called, the default action of the event will not be triggered.
        //As the .scroll() method is just a shorthand for .on( "scroll", handler ), detaching is possible using .off( "scroll" ).
        // The off() method is most often used to remove event handlers attached with the on() method.

        $(document).off("scroll");
        // Iterate over a jQuery object, executing a function for each matched element.
        $('a').each(function () {
            //remove color from link
            $(this).removeClass('active');
        })
        $(this).addClass('active');
        //Return the anchor part of a URL
        var target = this.hash,
            menu = target;
        $target = $(target);
        //The stop() method stops the currently running animation for the selected elements.
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - trueHeight
        }, 500, 'swing', function () {
            //window.location.href returns the href (URL) of the current page
            //window.location.hostname returns the domain name of the web host
            //window.location.pathname returns the path and filename of the current page
            //window.location.protocol returns the web protocol used (http: or https:)
            //window.location.assign loads a new document
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });

    // icon smooth scroll


    $('#logoLink').on("click", function (e) {
        var logoDest = this.hash;
        $("nav li a ").removeClass("active")
        $(logoDest).addClass('active')

        $('html, body').animate({
            'scrollTop': $(logoDest).offset().top - trueHeight

        }, 500, 'swing')

    })

});









function onScroll(event) {
    // The scrollTop property sets or returns the number of pixels an element 's content is scrolled vertically.
    // how many pixels from the top of the window
    var scrollPos = $(document).scrollTop();
    // on each nav link
    $('nav li a ').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        //position: Get the current coordinates of the first element in the set of matched elements, relative to the offset parent.
        //.offset() method allows us to retrieve the current position of an element (specifically its border box, which excludes margins) relative to the document. Contrast this with .position(), which retrieves the current position relative to the offset parent. When positioning a new element on top of an existing one for global manipulation (in particular, for implementing drag-and-drop), .offset() is more useful.
        //.offset() returns an object containing the properties top and left.
        if (refElement.position().top - trueHeight <= scrollPos && refElement.position().top + refElement.height() >
            scrollPos) {
            $('nav li a').removeClass("active");
            currLink.addClass("active");
        } else {
            currLink.removeClass("active");
        }
    });
}
