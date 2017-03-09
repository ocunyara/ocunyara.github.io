$(document).ready(function() {
    $('.mob_slider_popular, .main_slider, .mob_slider_popular2').slick({
        dots: false,
        arrows: true
    })
    $('.slider_brends').slick({
        dots: false,
        slidesToShow: 15,
        arrows: true,
        responsive: [{
            breakpoint: 1890,
            settings: {
                slidesToShow: 13
            }
        }, {
            breakpoint: 1590,
            settings: {
                slidesToShow: 13
            }
        }, {
            breakpoint: 1400,
            settings: {
                slidesToShow: 9
            }
        }, {
            breakpoint: 1140,
            settings: {
                slidesToShow: 6
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 3 
            }
        }]
    })



    // $(".hero__title").each(function (idx, item) {
    //  var carouselId = "carousel" + idx;
    //  this.id = carouselId;


    $('.slider-for, .slider-for1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        fade: true,
        asNavFor: '.slider-nav, .slider-nav1'
    });
    $('.slider-nav, .slider-nav1').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for, .slider-for1',
        dots: false,
        arrows: true,
        infinite: true,
        centerMode: true
    });


    $('.cart_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.cart_slider_list'
    });
    $('.cart_slider_list').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        asNavFor: '.cart_slider',
        dots: false,
        arrows: true,
        infinite: true,
        focusOnSelect: true,
        responsive: [{
            breakpoint: 1760,
            settings: {
                slidesToScroll: 1,
                infinite: false
            }
        }]
    });


    $('.slider_tovar1, .slider_tovar2, .slider_tovar3').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        infinite: true,
        responsive: [{
            breakpoint: 1760,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }]
    });



    var w = $(window).width();

    var ravenous = function() {
        if (window.matchMedia('(max-width: 1450px)').matches) {
            $('.prost').removeClass('general_page');
            $('.inner_tovar').append($('.sidebar'));
            $('.inner_tovar').append($('.right_sidebar'));
        } else {
            $('.prost').addClass('general_page')
            $('.content').append();
            $('.content').append($('.right_sidebar'));
        }
    };
    ravenous();

    $(window).resize(ravenous);

    var ravenous2 = function() {
        if (window.matchMedia('(max-width: 768px)').matches) {
            $('.js_modul').append($('.form_search'));
            $('.prost').append($('.sidebar'));
            $('.prost').append($('.inner_header'));
            $('.prost').append($('.inner_tovar'));
            $('.title_count').click(function() {
                $('.top_lint').slideToggle()
                $('.tavar_count').slideToggle(300)
            });
        } else {
            $('.js_search').append($('.form_search'));
        }
    }
    ravenous2();
    $(window).resize(ravenous2);


    var toggle_btn = function() {
        $('.toggle_btn').click(function() {
            $('.main_menu ul').slideToggle(300);
        });
    };
    toggle_btn();


    $('.name_categori').click(function() {
        $(this).next('ul,img,p,div,a').slideToggle(300)
    });
    $('.sidebar_title').click(function() {
        $('.ac-container').slideToggle(300)
    });
    $('.title_filter').click(function() {
        $('.mobi_filter .categori_brend').slideToggle(300)
    });
    $('.brends_title').click(function() {
        $('.filter_table').slideToggle(300);
        $('.brends_title>span').toggleClass('transform');
    });
    $('.title_filter').click(function() {
        $(this).next('.filter_table').slideToggle(300);
    });

    var select = function() {
        $('.selectbox .text').click(function() {
            $(this).next('.dropdown').slideToggle(300);
        });
        $('.dropdown1 li').click(function() {
            var selectedText = $(this).text();
            console.log(selectedText);
            $('#text1').empty();
            $('#text1').append(selectedText);
        });
        $('.dropdown2 li').click(function() {
            var selectedText = $(this).text();
            console.log(selectedText);
            $('#text2').empty();
            $('#text2').append(selectedText);
        })
    };

    select();

    var select2 = function() {
        $('.delivery .text').click(function() {
            $(this).next('.dropdown').slideToggle(300);
        });
        $('.dropdown2 li').click(function() {
            var selectedText = $(this).text();
            console.log(selectedText);
            $('#text3').empty();
            $('#text3').append(selectedText);
        });
    };
    select2();


    var select = function() {
        $('.selectbox .text').click(function() {
            $(this).next('.dropdown').slideToggle(300);
        });
        $('.dropdown1 li').click(function() {
            var selectedText = $(this).text();
            console.log(selectedText);
            $('#text4').empty();
            $('#text4').append(selectedText);
        });
        $('.dropdown2 li').click(function() {
            var selectedText = $(this).text();
            console.log(selectedText);
            $('#text5').empty();
            $('#text5').append(selectedText);
        })
    };


  // Cart

    var map;
    ymaps.ready(function(){
        moscow_map = new ymaps.Map("map", {
            center: [55.76, 37.64],
            zoom: 10
        });
    });

  

    $('.slider_pows').slider({
          range: true,
          min: 0,
          max: 15000,
          values: [ 0, 15000 ],
          step: 50,
          slide: function( event, ui ) {
            $("#amount").val(ui.values[ 0 ]);
            $('#amount2').val(ui.values[ 1 ])
          }
    });

    //  spinner

 var spinner = $( ".spinner" ).spinner();

 $( ".input" ).checkboxradio();


});
