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

    $('.slider').slick({
        dots: true
    });

    $(window).bind('load', handler);
    $(window).bind('resize', handler);


    //	menu

    var timer;

    $(".click_arrow, .dropdown-menu").on("mouseover", function() {
        clearTimeout(timer);
        openSubmenu();
    }).on("mouseleave", function() {
        timer = setTimeout(
            closeSubmenu, 1000);
    });

    function openSubmenu() {
        $(".dropdown-menu").addClass("open");
    }

    function closeSubmenu() {
        $(".dropdown-menu").removeClass("open");
    }


    // Set the matchMedia

    var ravenous = function() {
        if (window.matchMedia('(max-width: 992px)').matches) {
            $('.js_block').append($('#js_carry'));
        } else {
        	$('.navbar_right2').append($('#js_carry'));
        }
    };

      $(window).resize(ravenous);
	  // Call the function
	  ravenous();  
});
