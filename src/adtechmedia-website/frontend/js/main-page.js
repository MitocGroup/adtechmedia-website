/**
 * Created by pycoding on 4/28/17.
 */

var headerHeight = $('header').height();
var $slideHeight = $('.main-slide').height();

$('.scroll-down').on('click', function(){
  $('body,html').animate({'scrollTop': $slideHeight}, 1000);
});

$(window).on('scroll', function(){
  if($(window).scrollTop() >= $slideHeight) {
    $('header').addClass('with-shadow');
  } else {
    $('header').removeClass('with-shadow');
  }
});