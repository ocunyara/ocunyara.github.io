$(document).ready(function() {
    $(window).load(function() {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
            $('body').addClass('ios');
        };
        $('body').removeClass('loaded');
    });
    /* viewport width */
    function viewport() {
        var e = window,
            a = 'inner';
        if (!('innerWidth' in window)) {
            a = 'client';
            e = document.documentElement || document.body;
        }
        return { width: e[a + 'Width'], height: e[a + 'Height'] }
    };
    /* viewport width */
    $(function() {
        /* placeholder*/
        $('input, textarea').each(function() {
            var placeholder = $(this).attr('placeholder');
            $(this).focus(function() { $(this).attr('placeholder', ''); });
            $(this).focusout(function() {
                $(this).attr('placeholder', placeholder);
            });
        });
        /* placeholder*/

        $('.button-nav').click(function() {
            $(this).toggleClass('active'),
                $('.main-nav-list').slideToggle();
            return false;
        });


    });

    var handler = function() {

        var height_footer = $('footer').height();
        var height_header = $('header').height();


        var viewport_wid = viewport().width;

        if (viewport_wid <= 991) {

        }

    }

    $('.slider_products').slick();
    $('.slider_reviews').slick({
        dots: true
    }) 



    $("nav").on("click", "a", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top - 60;
        $('body,html').animate({ scrollTop: top }, 1000);
    });

    var ravenous = function() {
        if (window.matchMedia('(max-width: 992px)').matches) {
            $('toggle_btn').click(function(){
                $('.main_menu ul').slideToggle(300);
            });
        } else if (window.matchMedia('(min-width: 992px)').matches) {
            $('.main_menu ul').show(); 
        }
    };

 


    var nav = $('header');
    var height = $('header').height();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            nav.addClass("f-nav");
        } else {
            nav.removeClass("f-nav");
        }
        if (window.matchMedia('(max-width: 600px)').matches) {
            nav.removeClass("f-nav");
        }
    });


      $(window).resize(ravenous);
      // Call the function
      ravenous(); 

      function initialize() {
        var styles = [{"featureType":"landscape","stylers":[{"hue":"#FFBB00"},{"saturation":43.400000000000006},{"lightness":37.599999999999994},{"gamma":1}]},{"featureType":"road.highway","stylers":[{"hue":"#FFC200"},{"saturation":-61.8},{"lightness":45.599999999999994},{"gamma":1}]},{"featureType":"road.arterial","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":51.19999999999999},{"gamma":1}]},{"featureType":"road.local","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":52},{"gamma":1}]},{"featureType":"water","stylers":[{"hue":"#0078FF"},{"saturation":-13.200000000000003},{"lightness":2.4000000000000057},{"gamma":1}]},{"featureType":"poi","stylers":[{"hue":"#00FF6A"},{"saturation":-1.0989010989011234},{"lightness":11.200000000000017},{"gamma":1}]}]
        var mapProp = {
            center: new google.maps.LatLng(53.35029835, 83.67791265),
            zoom: 17,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: styles

        };
        var image = new google.maps.MarkerImage('./image/mapker.png',
            new google.maps.Size(50, 57),
            new google.maps.Point(0, 0),
            new google.maps.Point(16, 35)
        );
        var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

        marker = new google.maps.Marker({
            map: map,
            draggable: false,
            icon: image,
            animation: google.maps.Animation.DROP,
            position: { lat: 53.35029835, lng: 83.67791265}

        });

    }
    google.maps.event.addDomListener(window, 'load', initialize);



     $("#form1, #form2, #form3").submit(function() { //устанавливаем событие отправки для формы с id=form
            var form_data = $(this).serialize(); //собераем все данные из формы
            $.ajax({
            type: "POST", //Метод отправки
            url: "mail.php", //путь до php фаила отправителя
            data: form_data,
            success: function() {
                   //код в этом блоке выполняется при успешной отправке сообщения
                   alert("Ваше сообщение отпрвлено!");
            }
        });

    })


    //  function sendform() {
    //     var form = $('#form1');
    //     if ($('.form_input2').val('')) {
    //         console.log('false');
    //         alert( "Привет" );
    //         $('.btn_download').disabled = false;
    //     } else {
    //         console.log('true');
    //         alert( "Привет мой свет" );
    //         $('.btn_download').disabled = true;
    //     }
    // }

    $(function() {
       $('.btn_download').on('click', sendform());
    })


        // if (document.form[0].name.value == “”)||(document.forms[0].email.value == “”) {
        //     alert (введите ваше имя и телефон”);
        //     document.mailform.name.focus();
        //     $('btn_download').css()
        //     return false
        // }

        // return true;
        // }
});