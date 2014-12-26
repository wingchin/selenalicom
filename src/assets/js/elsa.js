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
})


/*
==============================

  INSTAFEED

==============================
*/
if ($('#instafeed').length) {
  var feed = new Instafeed({
    clientId: '43293bb9936f4b8192a7c9b2ff7f5908',
    accessToken:'1312202491.5b9e1e6.e2edf242cb86496692d7fbf34555e635',
    template: '<figure class="item col-lg-3 col-md-3 col-sm-4 col-xs-6">' +
                '<figcaption class="hover">' +
                  '<a href="{{link}}">' +
                    '<div class="block text-center">' +
                      '<h3 class="hidden-xs">{{caption}}</h3>' +
                      '<span class="line hidden-xs"></span>' +
                      '<h4>&hearts; {{likes}}</h4>' +
                    '</div>' +
                  '</a>' +
                '</figcaption>' +
                '<img src="http:{{image}}" class="img-responsive" alt="">' +
              '</figure>',
    get: 'user',
    userId: 221786646,
    limit: 4,
    resolution: 'standard_resolution'
  });

  feed.run();
}


/*
==============================

  ISOTOPE

==============================
*/
if ($('#isotope-grid').length) {
  var $container = $('#isotope-grid .row').imagesLoaded( function() {
    $container.isotope({
      filter: '*',
      layoutMode: 'fitRows'
    });
  });

  $('#filter a').click(function() {
    $('#filter a.active').removeClass('active');
    $(this).addClass('active');

    var selector = $(this).attr('data-filter');
    var $container = $('#isotope-grid .row').imagesLoaded( function() {
      $container.isotope({
        filter: selector,
        layoutMode: 'fitRows'
      });
    });
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
      zoom: 12,
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