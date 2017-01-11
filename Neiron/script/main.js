$(document).ready(function () {

  //  Carusel
    $(".owl-carousel").owlCarousel({
      items: 1,
      dots: true
    });

    $(".owl-carousel2").owlCarousel({
      items: 5,
      loop: true,
      margin: 30,
      responsive:{
          0:{
              items:2,
              margin: 5
          },
          600:{
              items:3
          },
          770:{
              items:4
          },
          955:{
              items:5
          }
        }
    });

    $(".owl-carousel3").owlCarousel({
      items: 6,
      loop: true,
      margin: 30,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          770:{
              items:4
          },
          955:{
              items:5
          }
        }
    });
     $('.next').click(function() {
         $(".owl-carousel2").trigger('next.owl.carousel',[]);
     })
     $('.prev').click(function() {
         $(".owl-carousel2").trigger('prev.owl.carousel',[]);
     })
     $('.next').click(function() {
         $(".owl-carousel3").trigger('next.owl.carousel',[]);
     })
     $('.prev').click(function() {
         $(".owl-carousel3").trigger('prev.owl.carousel',[]);
     })

  //

  //   Form

  $( ".header_tutorial>button" ).click(function() { 
    $(".header_tutorial>form").toggle();
  });
  $( ".footer_tutorial>button" ).click(function() { 
    $(".footer_tutorial>form").toggle();
  });
  $( ".tutorial>button" ).click(function() { 
    $(".tutorial>form").toggle();
  });
  $( ".seil_tutorial>button" ).click(function() { 
    jQuery(".seil_tutorial>form").fadeOut(100);
    jQuery(this).parent().find('form').toggle();
  });

  //    Tabs

    jQuery('.main_menu a').on('click', function(e) {
      e.preventDefault();
      var my_link = jQuery(this).attr('href').toString();
      jQuery('.main_menu a').removeClass('activebtn');
      jQuery(this).addClass('activebtn');
      jQuery('.tabs-item').fadeOut(200);
      jQuery('[data-tab='+ my_link +']').fadeIn(400);
    })
      $('*').click(function(e) {
      e.preventDefault();
      jQuery('.main_menu a').removeClass('activebtn');
    });

  //
    
    function initialize() {
  var styles = [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#e2e2e2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#bdbebe"},{"visibility":"on"}]}];
  var mapProp = {
    center:new google.maps.LatLng(49.42190692,26.98787481),
    zoom:17,
    mapTypeId:google.maps.MapTypeId.ROADMAP,
    styles: styles

  };
  var image = new google.maps.MarkerImage('./image/marcer.png',
   new google.maps.Size(36, 57),
   new google.maps.Point(0,0),
   new google.maps.Point(16, 35)
  );
  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
    marker = new google.maps.Marker({
    map: map,
    draggable: true,
    icon: image,
    animation: google.maps.Animation.DROP,
    position: {lat: 49.42184062, lng: 26.98981673}

  });
}
google.maps.event.addDomListener(window, 'load', initialize);
    
    
    
});