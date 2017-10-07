var changeWord = document.getElementsByClassName('changeWord');
var words = [
    'SERENITY',
    'TRANQUILITY',
    'HAPPINESS',
    'RELAXATION'
];

var counter = 0;



setInterval(function() {
 
    if (counter == words.length) {
       counter = 0;
   
    } 
    
    else {
         changeWord[0].addClass = ("animate");

         changeWord[0].innerHTML = (words[counter]) ;
      
         counter++;
    }
       

}, 5000);

