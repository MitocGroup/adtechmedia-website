/**
 * Created by pycoding on 4/28/17.
 */

var headerHeight = $('header').height();
var $slideHeight = $('.main-slide').height();


$('.scroll-down').on('click', function(){
  if($(window).scrollTop() >= $slideHeight) {
    $('body,html').animate({'scrollTop': 0}, 1000);
    $('.scroll-down').removeClass('rotate');
  } else {
    $('body,html').animate({'scrollTop': $slideHeight}, 1000);
    $('.scroll-down').addClass('rotate');
  }
});

$(window).on('scroll', function(){
  if($(window).scrollTop() >= $slideHeight) {
    $('header').addClass('with-shadow');
    $('.scroll-down').addClass('rotate');
  } else {
    $('header').removeClass('with-shadow');
    $('.scroll-down').removeClass('rotate');
  }
});