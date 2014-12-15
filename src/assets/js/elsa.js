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
    //sortBy: 'random',
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
  $(document).ready(function() {
    var $container = $('#isotope-grid .row').isotope({
      filter: '*',
      layoutMode: 'fitRows',
      sortAscending: false,
      sortBy : 'original-order'
    });

    $container.imagesLoaded( function() {
      $container.isotope('layout');
    });
  });

  $('#filter a').click(function() {
    $('#filter a.active').removeClass('active');
    $(this).addClass('active');

    var selector = $(this).attr('data-filter');
    var $container = $('#isotope-grid .row').isotope({
      filter: selector,
      layoutMode: 'fitRows',
      sortAscending: false
    });
    $container.imagesLoaded( function() {
      $container.isotope('layout');
    });
  });
}



/*
==============================

  MEDIAELEMENT

==============================
*/
if ($('#video-post').length) {
  $('video').mediaelementplayer();
}