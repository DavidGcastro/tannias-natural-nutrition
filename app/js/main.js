function change(){changeWord[0].innerHTML=words[counter],++counter>=words.length&&(counter=0)}var changeWord=document.getElementsByClassName("changeWord"),words=[" SERENITY"," TRANQUILITY"," HAPPINESS"," RELAXATION"],counter=0;setInterval(change,5e3),$(document).ready(function(){var e=$(".site-header").outerHeight()+parseInt($(".site-header").css("top"),10);$("nav li a ").on("click",function(t){console.log(e);var n=$(this).attr("href");$("html, body").animate({scrollTop:$(n).offset().top-e},1e3),t.preventDefault()})});