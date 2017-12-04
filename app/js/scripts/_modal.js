$(".modalToggle").on("click", function(e){
    e.preventDefault();
    $(".modal").fadeIn(500).scrollTop(0);
    
//    $('body').toggleClass("noScroll").attr('aria-hidden')
})


$(".modal-close").on('click', function(e){
    e.preventDefault();
    $('.modal').fadeOut(500);
    
    
})