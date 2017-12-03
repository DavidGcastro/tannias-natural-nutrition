var changeWord = document.getElementsByClassName('changeWord');

var words = [' SERENITY', ' TRANQUILITY', ' HAPPINESS', ' RELAXATION'];
var counter = 0;
setInterval(change, 1000);


function change() {
    //    changeWord[0].innerHTML = words[counter];
    $(".changeWord").css("opacity", "0").html(words[counter]).css("opacity", "1");
    counter++;
    if (counter >= words.length) {
        counter = 0;
    }
}
