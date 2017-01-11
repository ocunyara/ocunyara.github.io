$(document).ready(function () {


	var nav = $('.top_line');
	var height = $('.header').height();
   	$(window).scroll(function () {
		if ($(this).scrollTop() > 200) {
			nav.addClass("f-nav");
		} else {
			nav.removeClass("f-nav");
		}
	});

    $(".scropll_bottom").on("click", "a", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1000);
    });

});