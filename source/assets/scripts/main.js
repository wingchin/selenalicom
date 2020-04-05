/*
==============================

  IMAGES LAZY LOAD

==============================
*/
$(document).ready(function() {
  $('img[data-src]').each(function() {
    $(this).attr('src', $(this).data('src'));
  });
});

/*
==============================

  NAVIGATION
  https://github.com/IronSummitMedia/startbootstrap-grayscale

==============================
*/

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
  if ($('.navbar').offset().top > 50) {
    $('.fixed-top').addClass('top-nav-collapse');
    $('.navbar-brand img').attr('src', '/assets/images/logo.png');
  } else {
    $('.fixed-top').removeClass('top-nav-collapse');
    $('.navbar-brand img').attr('src', '/assets/images/logo-diap.png');
  }
});

$('.navbar-toggler:visible').click(function() {
  if($('.navbar-collapse:visible').length) {
    $('.fixed-top').removeClass('top-nav-collapse');
  } else {
    $('.fixed-top').addClass('top-nav-collapse');
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
  $('html, body').animate({
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
  $('.btn-scroll').click(function() {
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