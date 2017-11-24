
//// when u click on a link in the nav
//$("nav li a ").on("click", function(e) {
//	$("nav li a").css("color", "#575756");
//	$(this).css("color", "#88c1ba");
//	// stop the damn mobile nav behavior on 768 and above!
//	var windowWidth = $(window).width();
//	if (windowWidth < 768) {
//		$(content).slideUp(500, function() {
//			$(this).toggleClass("content-medium").css("display", "");
//		});
//	}
//	var linkHref = $(this).attr('href');
//	//clicked nav is equal to this, we set the href to a variable
//	$('html, body').animate({
//		//we select the dom element that has the same id or class as the clicked anchors tags href
//		scrollTop: $(linkHref).offset().top - trueHeight
//		//scroll to the element clicked, BUT get the coordinate of the divs top position minus the height of the nav, to prevent overlap
//	}, 1000); //slow it down
//	e.preventDefault(); //prevent the defualt fast scroll
//});


var headerHeight = $(".site-header").outerHeight();
var headerTop = parseInt($('.site-header').css("top"), 10);
var trueHeight = headerHeight + headerTop;
var content = document.getElementsByClassName("site-header--content");


$(document).ready(function () {
    $(document).on("scroll", onScroll);
    //smoothscroll
    //The off() method is most often used to remove event handlers attached with the on() method.
    $('nav li a').on('click', function (e) {
      
        $("nav li a").css("color", "#575756");
        $(this).css("color", "#88c1ba");
        // stop the damn mobile nav behavior on 768 and above!
        var windowWidth = $(window).width();
        if (windowWidth < 768) {
            $(content).slideUp(500, function () {
                $(this).toggleClass("content-medium").css("display", "");
                
            });
        }
        // If this method is called, the default action of the event will not be triggered.
        //		e.preventDefault();
        //As the .scroll() method is just a shorthand for .on( "scroll", handler ), detaching is possible using .off( "scroll" ).
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
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});


function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('nav li a ').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top - trueHeight <= scrollPos && refElement.position().top + refElement.height() >
            scrollPos) {
            $('nav li a').removeClass("active");
            currLink.addClass("active");
        } else {
            currLink.removeClass("active");
        }
    });
}
