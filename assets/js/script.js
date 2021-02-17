//Fixed Header

window.onscroll = function showHeader() {

	if (window.pageYOffset > 1) {
		$('.header').addClass('header-fixed');
		$('.logo-dark').addClass('logo-dark-show');
		$('.logo-light').addClass('logo-light-hide');
		$('.nav-title').addClass('nav-title-color');
    }else{
    	$('.header').removeClass('header-fixed');
    	$('.logo-dark').removeClass('logo-dark-show');
    	$('.logo-light').removeClass('logo-light-hide');
    	$('.nav-title').removeClass('nav-title-color');
    };
};

//Nav-Hover

$(document).ready(function(){
  $('.nav-title').hover(function() {
    $(this).addClass('opacity');
  }, function() {
    $(this).removeClass('opacity');
  });
});

//Carousel 

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items:1,
    loop: true,
    autoplay:true
  });
});

//Google Map 

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.1347265, lng: -76.7272867},
    zoom: 6,
    scrollwheel: false
  });

  let image = {
    url: 'gmap-pin.png',
    scaledSize: new google.maps.Size(45, 45)
  };

  let marker = new google.maps.Marker({
   position: {lat: 41.1347265, lng: -76.7272867},
   map: map,
   title: 'Brooklyn',
   icon: image
  });
}

//Video 

$('[data-fancybox]').fancybox({
    youtube : {
        controls : 1,
        showinfo : 1
    }
});


