var image = $('.img-gallery--imgWrapper');
var modalImage = $('#myModal');
var close = $('.closeImageGallery');
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var displayCaption = $('#caption')
var left = $('#left');
var right = $('#right');
var captionText = $('.img-gallery--img--textContainer');
var imgSrc;
var index;
var caption;

image.on('click', function () {

    index = ($(image).index(this));
    imgSrc = $(this).find("img").attr('src');
    caption = $(captionText[index]).html();
    $(modalImage).css('display', 'block')
    $('#img01').attr('src', imgSrc)
    $(displayCaption).html(caption)

    $(right).css('display', 'block');
    $(left).css('display', 'block');

    if (index == image.length - 1) {
        $(right).css('display', 'none');
    }


    if (index == 0) {
        $(left).css('display', 'none');
    }
})


close.on('click', function () {
    $(modalImage).css('display', 'none')
})

$(left).on('click', function () {
    console.log(index)
    if (index !== 0) {
        index--;
        caption = $(captionText[index]).html();
        var next = ($(image[index]).find("img").attr('src'));
        $('#img01').attr('src', next);
        $(displayCaption).html(caption)
    }
    if (index === 0) {

        $(this).css("display", "none");
    }

    $(right).css('display', 'block')
});


$(right).on('click', function () {
    console.log(index)
    $(left).css('display', 'block');
    if (index == image.length - 2) {
        $(right).css('display', 'none');
    }
    index++;
    var next = ($(image[index]).find("img").attr('src'));
    $('#img01').attr('src', next)
    caption = $(captionText[index]).html();
    $(displayCaption).html(caption)
})
