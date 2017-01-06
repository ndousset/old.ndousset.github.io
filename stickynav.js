$(function(){
  $(window).scroll(function() {
    if ($(this).scrollTop()>= 255) {
       $('nav.main-nav').addClass('stickytop');
    }
    else {
      $('nav.main-nav').removeClass('stickytop');
    }
  });
});
