//= require bootstrap/transition
//= require bootstrap/tab


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

  INSTAFEED

==============================
*/
if ($('#instafeed').length) {
  var feed = new Instafeed({
    clientId: '40ad1c9fce424950a42a335b9fa42e59',
    accessToken:'575570396.40ad1c9.985e0b416bff4243b2ffd47219e41a9d',
    get: 'user',
    userId: 575570396,
    template: '<figure class="item col-md-2">' +
                '<figcaption class="hover">' +
                  '<a href="{{link}}">' +
                    '<div class="block text-center">' +
                      /*'<h3 class="hidden-xs">{{caption}}</h3>' +
                      '<span class="line hidden-xs"></span>' +*/
                      '<h3>&hearts; {{likes}}</h3>' +
                    '</div>' +
                  '</a>' +
                '</figcaption>' +
                '<img src="{{image}}" class="img-responsive" width="100%" height="100%" alt="">' +
              '</figure>',
    limit: 12,
    resolution: 'thumbnail'
  });

  feed.run();
}


/*
==============================

  ISOTOPE

==============================
*/
if ($('#isotope-grid').length) {
  var $container = $('#isotope-grid .container > .row').imagesLoaded( function() {
    $container.isotope({
      filter: '*',
      layoutMode: 'fitRows'
    });
  });

  $('#filter a').click(function() {
    $('#filter a.active').removeClass('active');
    $(this).addClass('active');

    var selector = $(this).attr('data-filter');
    var $container = $('#isotope-grid .container > .row').imagesLoaded( function() {
      $container.isotope({
        filter: selector,
        layoutMode: 'fitRows'
      });
    });
  });
}