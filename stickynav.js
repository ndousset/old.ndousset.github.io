$(function(){
  $(window).scroll(function() {
    if ($(this).scrollTop()>= 250) {
       $('nav.main-nav').addClass('stickytop');
    }
    else {
      $('nav.main-nav').removeClass('stickytop');
    }
  });
});
