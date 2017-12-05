$(".modalToggle").on("click", function (e) {
    e.preventDefault();
    $(".modal").fadeIn(500).scrollTop(0);
    $("body, html").toggleClass("overFlow").css("overflow-x", "visible");



})


$(".modal-close").on('click', function (e) {
    e.preventDefault();
    $('.modal').fadeOut(500);
    $("body").toggleClass("overFlow");
    $("body, html").css("overflow-x","hidden");



})
