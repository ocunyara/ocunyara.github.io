$(document).ready(function() {

    $('.menu').click(function() {
        $('.menu').toggleClass('on', function() {});
        $('nav').slideToggle(400, function() {});
    });

    $('input, select').styler();
    $('.tabs *').styler('destroy');
    $('.tabs2 *').styler('destroy');
    $('.tabs_form input[type="text"], .tabs_form input[type="mail"], .tabs_form input[type="password"], .tabs_form input[type="radio"]').styler('destroy');



    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        asNavFor: '.slider-nav'
    });
    $('.slider_tyres').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
    });
    $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        focusOnSelect: true,
        responsive: [{
            breakpoint: 540,
            settings: {
                slidesToShow: 3,
            }
        }]
    });


    $('.madia_slick').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
    });


    var menuItems = $(".btn_radio a");
    menuItems.click(function(event) {
        event.preventDefault();
        menuItems.removeClass("current");
        $(this).addClass("current");
        $(this).siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".content_tab").not(tab).hide();
        $(tab).fadeIn();
    });



    var bodyHeight = $("body").height();
    var vwptHeight = $(window).height();
    if (vwptHeight > bodyHeight) {
        $("footer#footer").css("position", "absolute").css("bottom", 0);
    }



    new PhotoSwipe();


    $('.readall').click( function() {
        $('.text_wrap').toggle();
    });

});
