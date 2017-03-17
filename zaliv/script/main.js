$(document).ready(function() {



    // $('.slider_tovar1, .slider_tovar2, .slider_tovar3').slick({
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     arrows: true,
    //     infinite: true,
    //     responsive: [{
    //         breakpoint: 1760,
    //         settings: {
    //             slidesToShow: 3
    //         }
    //     }, {
    //         breakpoint: 1560,
    //         settings: {
    //             slidesToShow: 2
    //         }
    //     }, {
    //         breakpoint: 768,
    //         settings: {
    //             slidesToShow: 3 
    //         }
    //     }]
    // });
    // $('.addbasket_slider').slick({
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     arrows: true,
    //     infinite: true
    // });



    // var w = $(window).width();

    // var ravenous = function() {
    //     if (window.matchMedia('(max-width: 1450px)').matches) {
    //         $('.prost').removeClass('general_page');
    //         $('.inner_tovar').append($('.sidebar'));
    //         $('.inner_tovar').append($('.right_sidebar'));
    //     } else {
    //         $('.prost').addClass('general_page')
    //         $('.content').append();
    //         $('.content').append($('.right_sidebar'));
    //     }
    // };
    // ravenous();

    // $(window).resize(ravenous);

AOS.init({
  duration: 1200,
})

$('.slider_room').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  dots: true
});
$('.slider_reviews').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  dots: true
});

});
