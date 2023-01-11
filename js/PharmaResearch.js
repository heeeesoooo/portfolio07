$(function () {
    $('.main_slide').slick({
        arrows: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 4000,
    })

    $(window).on('scroll', function () {

        if ($(window).scrollTop() > 0) {
            $('#header').addClass('on');
        } else {
            $('#header').removeClass('on');
        }
    })

})