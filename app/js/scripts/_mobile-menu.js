    var menuIcon = document.getElementsByClassName("site-header--close-icon");
    var siteHeader = document.getElementsByClassName("site-header");
    var content = document.getElementsByClassName("site-header--content");
    var addMe = document.getElementsByClassName("content-medium");
    var openNavHeight = $(content).outerHeight();






    $(menuIcon).on("click", function () {

//        $("body").toggleClass("bodyMobileOpen", 500)
        $(content).slideToggle(500, function () {
//            $("body").css("top", "");
            $(this).toggleClass("content-medium").css("display", "");
        })

    });
