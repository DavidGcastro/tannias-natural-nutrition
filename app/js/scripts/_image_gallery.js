var image = $('.img-gallery--imgWrapper');
var modalImage = $('#myModal');
var close =  $('.closeImageGallery');
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var displayCaption = $('#caption')
var captionText = $('.img-gallery--img--textContainer').html();
var left = $('#left');
var right = $('#right');
var imgSrc;


image.on('click', function () {
//    e.stopPropagation();
  imgSrc = $(this).find("img").attr('src');
    $(modalImage).css('display', 'block')
    $('#img01').attr('src', imgSrc)
    $(displayCaption).html(captionText)
})



close.on('click', function (){
    $(modalImage).css('display', 'none')
})



$(left).on('click', function(){
    
})


$(right).on('click', function(){
  console.log(imgSrc);
})


