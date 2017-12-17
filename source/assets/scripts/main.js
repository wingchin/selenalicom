//= require bootstrap/transition
//= require bootstrap/tab

/*
==============================

  IMAGES LAZY LOAD

==============================
*/
$('img[data-src]').each(function() {
  $(this).attr('src', $(this).data('src'));
});

/*
==============================

  NAVIGATION
  https://github.com/IronSummitMedia/startbootstrap-grayscale

==============================
*/

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
  if ($(".navbar").offset().top > 50) {
    $(".navbar-fixed-top").addClass("top-nav-collapse");
  } else {
    $(".navbar-fixed-top").removeClass("top-nav-collapse");
  }
});

$('.navbar-toggle:visible').click(function() {
  if($('.navbar-collapse:visible').length) {
    $(".navbar-fixed-top").removeClass("top-nav-collapse");
  } else {
    $(".navbar-fixed-top").addClass("top-nav-collapse");
  }
});

/*
==============================

  BACK TO TOP
  http://jsfiddle.net/neeklamy/RpPEe/

==============================
*/
$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
      $('#back-to-top').fadeIn();
  } else {
      $('#back-to-top').fadeOut();
  }
});

$('#back-to-top').click(function() {
  $("html, body").animate({
     scrollTop: 0
    }, 750);
    return false;
});


/*
==============================

  SMOOTH SCROLL
  http://css-tricks.com/snippets/jquery/smooth-scrolling/

==============================
*/
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


/*
==============================

  TABS

==============================
*/
$('#myTab a').click(function (e) {
  e.preventDefault()
  $(this).tab('show');
});


/*
==============================

  FB FEED

==============================
*/
if ($('#fbfeed').length) {
  $.getJSON('https://graph.facebook.com/401954999912036/photos?access_token=766464950145722|U5qfHX3LPjP2ru4Rj4MdHjlFfI4&limit=4&fields=name,link,images', function(json) {
    var photoList = '';

    for (var i = 0; i < 4; i++) {
      var data = json.data[i];
      var last = data.images.length - 3;

      photo = '<figure class="item col-sm-4 col-md-3">' +
                '<figcaption class="hover">' +
                  '<a href="' + data.link + '" target="_blank">' +
                    '<div class="block text-center">' +
                      '<h3 class="hidden-xs">' + (data.name ? data.name : '') + '</h3>' +
                    '</div>' +
                  '</a>' +
                '</figcaption>' +
                '<img src="' + data.images[last].source + '" width="100%" height="100%" alt="" />' +
              '</figure>';

      photoList += photo;
    }

    $('#fbfeed').append(photoList);
  }).done( function() {
    $('#fbfeed img').height($('#fbfeed .item').width());
  });
};


/*
==============================

  ISOTOPE

==============================
*/
if ($('#isotope-grid').length) {
  $(window).load( function() {
    var $container = $('#isotope-grid .container > .row').isotope({
      filter: '*',
      layoutMode: 'fitRows'
    });

    // Filter on button click
    $('#filter button').on( 'click', function() {
      var selector = $(this).attr('data-filter');
      $container.isotope({
        filter: selector,
        layoutMode: 'fitRows'
      });
    });

    // Change active class on buttons
    $('.btn-group').each( function( i, buttonGroup ) {
      $( buttonGroup ).on( 'click', 'button', function() {
        $( buttonGroup ).find('.active').removeClass('active');
        $( this ).addClass('active');
      });
    });
  });
}


/*
==============================

  UNSLIDER

==============================
*/
if ($('.my-slider').length) {
  $(document).ready(function($) {
    $('.my-slider').unslider();
  });
}


/*
==============================

  GOOGLE MAPS
  http://www.labnol.org/internet/embed-google-maps-background/28457/

==============================
*/
if ($('#map').length) {
  function showGoogleMaps() {
    var latLng = new google.maps.LatLng(position[0], position[1]);

    // Basic options for a simple Google Map
    var mapOptions = {
      zoom: 15,
      center: latLng,

      // Disables the default Google Maps UI components
      disableDefaultUI: true,

      // Styles from Snazzy Maps
      // https://snazzymaps.com/style/19/subtle
      styles: [
        {
          "stylers": [{ "saturation": -70 }, { "lightness": 37 }, { "gamma": 1.15 }]
        },
        {
          "featureType": "poi",
          "stylers": [{ "visibility": "off" }]
        },
        {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [{ "lightness": 10 }]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [{ "lightness": 50 }, { "saturation": 20 }, { "hue": "#ffffff" }]
        }
      ]
    };

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Show the marker at the location
    var pinImage = new google.maps.MarkerImage(
      "http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|cccccc"
    );

    var marker = new google.maps.Marker({
      position: latLng,
      map: map,
      icon: pinImage,
    });
  }

  // When the window has finished loading create our google map below
  google.maps.event.addDomListener(window, 'load', showGoogleMaps);
}