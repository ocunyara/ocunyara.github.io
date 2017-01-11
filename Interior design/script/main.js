$(document).ready(function() {



    $(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});

    //

function initialize() {
  var mapProp = {
    center:new google.maps.LatLng(49.412338,27.0312485),
    zoom:18,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
    marker = new google.maps.Marker({
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: {lat: 49.412438, lng: 27.0328485}

  });
}
google.maps.event.addDomListener(window, 'load', initialize);

    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      centerMode: false,
      focusOnSelect: true
    });


    $('.single-item').slick( {
        dots: true
    });
});
