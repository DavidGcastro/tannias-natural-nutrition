function change(){changeWord[0].innerHTML=words[counter],++counter>=words.length&&(counter=0)}var changeWord=document.getElementsByClassName("changeWord"),words=[" SERENITY"," TRANQUILITY"," HAPPINESS"," RELAXATION"],counter=0;setInterval(change,5e3);var menuIcon=document.getElementsByClassName("site-header--close-icon"),siteHeader=document.getElementsByClassName("site-header"),content=document.getElementsByClassName("site-header--content"),addMe=document.getElementsByClassName("content-medium");$(menuIcon).on("click",function(){$(content).slideToggle(400,function(){$(this).toggleClass("content-medium").css("display","")})}),$(document).ready(function(){var e=$(".site-header").outerHeight()+parseInt($(".site-header").css("top"),10),t=document.getElementsByClassName("site-header--content");$("nav li a ").on("click",function(n){$("nav li a").css("color","#575756"),$(this).css("color","#88c1ba"),$(window).width()<768&&$(t).slideUp(500,function(){$(this).toggleClass("content-medium").css("display","")});var s=$(this).attr("href");$("html, body").animate({scrollTop:$(s).offset().top-e},1e3),n.preventDefault()})});