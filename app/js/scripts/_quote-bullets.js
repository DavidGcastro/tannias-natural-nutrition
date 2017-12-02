var bullets = $('.quote-block__pagenation-bullets a');
var quotes = $('.quote-block__innerContent');


$(bullets).on('click', function (e) {
    e.preventDefault();
    var hideQuote = this.hash;
    // toggles bullet active state


    $(bullets).removeClass("active");
    $(this).addClass("active");


    $(quotes).addClass("quoteHidden");
    $(hideQuote).fadeIn(300).css("display", "").removeClass("quoteHidden");



})



// auto loop thru reviews

var i = 1;

function timedLoop() {
    setTimeout(function () {
        $(bullets[i]).click();
        i++;
        if (i < bullets.length) {
            timedLoop();
            console.log(i);
        }
        else {

            i = 0;
            console.log("done");
            timedLoop();
        }
    }, 10000)
}
timedLoop();

