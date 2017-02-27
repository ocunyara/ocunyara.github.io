$(document).ready(function() {
    $('.main_slider').slick({
        dots: true,
        arrows: false
    })



   // $(".hero__title").each(function (idx, item) {
   //  var carouselId = "carousel" + idx;
   //  this.id = carouselId;


    $('.hero__title').slick({
        autoplay: false,
        arrows: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        vertical: false,
        speed: 500,
        cssEase: 'linear',
        adaptiveHeight: true,
        asNavFor: '.slider-nav',
    });
    $('.slider-nav').slick({
        slidesToShow: 10,
        slidesToScroll: 1,
        asNavFor: '.hero__title',
        dots: false,
        centerMode: true,
        focusOnSelect: true
    });


var w = $(window).width();

 var ravenous = function() {
    if (window.matchMedia('(max-width: 1450px)').matches) {
        $('.prost').removeClass('general_page');
        $('.inner_tovar').append( $('.sidebar') );
        $('.inner_tovar').append( $('.right_sidebar') );
    } else {
        $('.prost').addClass('general_page')
        $('.content').append(  );
        $('.content').append( $('.right_sidebar') );
    }
};
      ravenous(); 

      $(window).resize(ravenous);

 var ravenous2 = function() {
    if (window.matchMedia('(max-width: 768px)').matches) {
        $('.js_modul').append( $('.form_search') );
        $('.prost').append($('.sidebar'));
        $('.prost').append($('.inner_header'));
        $('.prost').append($('.inner_tovar'));
    } else {
        $('.js_search').append($('.form_search'));
    }
}
    ravenous2();
    $(window).resize(ravenous2);


    var toggle_btn = function() {
        $('.toggle_btn').click(function(){
            $('.main_menu ul').slideToggle(300);
        });
    };
    toggle_btn();


    $('.name_categori').click(function() {
        $(this).next('ul').slideToggle(300)
    });
    $('.sidebar_title').click(function() {
        $('.ac-container').slideToggle(300)
    });
    $('.title_filter').click(function() {
        $('.mobi_filter ul').slideToggle(300)
    });
});
