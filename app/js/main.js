function change(){changeWord[0].innerHTML=words[counter],++counter>=words.length&&(counter=0)}function onScroll(e){var t=$(document).scrollTop();$("nav li a ").each(function(){var e=$(this),n=$(e.attr("href"));n.position().top-trueHeight<=t&&n.position().top+n.height()>t?($("nav li a").removeClass("active"),e.addClass("active")):e.removeClass("active")})}var changeWord=document.getElementsByClassName("changeWord"),words=[" SERENITY"," TRANQUILITY"," HAPPINESS"," RELAXATION"],counter=0;setInterval(change,5e3);var menuIcon=document.getElementsByClassName("site-header--close-icon"),siteHeader=document.getElementsByClassName("site-header"),content=document.getElementsByClassName("site-header--content"),addMe=document.getElementsByClassName("content-medium"),openNavHeight=$(content).outerHeight();$(menuIcon).on("click",function(){$(content).slideToggle(500,function(){$(this).toggleClass("content-medium").css("display",""),$("i",".icon").toggleClass("fa fa-bars").toggleClass("fa fa-times aria-hidden='true'")})});var headerHeight=$(".site-header").outerHeight(),headerTop=parseInt($(".site-header").css("top"),10),trueHeight=headerHeight+headerTop,content=document.getElementsByClassName("site-header--content");$(document).ready(function(){$(document).on("scroll",onScroll),$("nav li a").on("click",function(e){$(".icon i").removeClass("fa fa-times").addClass("fa fa-bars"),$("nav li a").removeClass("active"),$(this).addClass("active"),$(window).width()<768&&$(content).slideUp(500,function(){$(this).toggleClass("content-medium").css("display","")}),$(document).off("scroll"),$("a").each(function(){$(this).removeClass("active")}),$(this).addClass("active");var t=this.hash;$target=$(t),$("html, body").stop().animate({scrollTop:$target.offset().top-trueHeight},500,"swing",function(){window.location.hash=t,$(document).on("scroll",onScroll)})})});