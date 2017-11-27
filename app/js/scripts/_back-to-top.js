var backToTop = document.getElementById("back-to-top");



$(window).scroll(function () {
	if ($(window).scrollTop() > 800) {
		$(backToTop).fadeIn('fast');
	} else {
		$(backToTop).fadeOut('fast');
    }
});



$(backToTop).click(function() {
	$('html, body').animate({
		scrollTop: 0
	}, 700, 'swing');
	return false;
});


alert($(".footer").outerHeight())