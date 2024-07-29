$(document).ready(function(){

    $('.back_to_top').click(function() {
        $('html, body').animate({scrollTop: 0}, 500)
    });

    $(window).on('load', function () {
        $('.preloader_area').fadeOut(1000)
    });

    $(window).scroll(function() {
        var scrolling = $(this).scrollTop()

        if (scrolling > 200) {
            $('.navbar').addClass('BtnColor')
            $('.back_to_top').fadeIn(500)
        }
        else{
            $('.navbar').removeClass('BtnColor')
            $('.back_to_top').fadeOut(500)
        }
    });

    $('.home_btn').click(function() {
        alert('This section is made under constarction')
    });
});