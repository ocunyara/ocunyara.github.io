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

$('.slider_rooms,.slider_roomes').slick({
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

$('.slider_gellery1, .slider_gellery2, .slider_gellery3, .slider_room').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: true
});
    $('#nav-icon3').click( function() {
        $(this).next('.menu').slideToggle(300)
    });


   function initialize() {
        var mapProp = {
            center: new google.maps.LatLng(46.0662541, 30.4528371),
            zoom: 14,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP

        };
        // var image = new google.maps.MarkerImage('./image/arker.png',
        //     new google.maps.Size(36, 57),
        //     new google.maps.Point(0, 0),
        //     new google.maps.Point(16, 35)
        // );
         var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

        // marker = new google.maps.Marker({
        //     map: map,
        //     draggable: true,
        //     // icon: image,
        //     animation: google.maps.Animation.DROP,
        //     position: { lat: 49.42707, lng: 26.976718 }

        // });

    }
    google.maps.event.addDomListener(window, 'load', initialize);




    $('.toggle_article').click(function() {
        $(this).next('.dropdavt').slideToggle(300);
    });

    $('.advantages_item').mouseenter(function() {
      $(this).find('.inner_item').toggle();
    })
    $('.advantages_item').mouseleave(function() {
      $(this).find('.inner_item').toggle();
    })
    

});
