$(document).ready(function() {


    $(".main_menu").on("click", "a", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top - 60;
        $('body,html').animate({ scrollTop: top }, 1000);
    });

    var nav = $('.top_line');
    var height = $('.top_line').height();
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            nav.addClass("f-nav");
        } else {
            nav.removeClass("f-nav");
        }
        if (window.matchMedia('(max-width: 600px)').matches) {
            nav.removeClass("f-nav");
        }
    });

    $(".chzn-select").chosen()
});
