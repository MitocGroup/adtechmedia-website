var header = $('header');
var headerHeight = header.height();
var $slideHeight = $('.main-slide').outerHeight(true);
var scrollBtn = $('.scroll-down');


scrollBtn.on('click', function(){
  scrollBtn.addClass('no-click');
  if (window.matchMedia('(min-width: 1025px)').matches) {
    if($(window).scrollTop() >= ($slideHeight / 3)) {
      $(window).off();
      onScrollUp();
      $('body,html').animate({'scrollTop': 0}, 1000, function(){
        $(window).on('scroll', scrollDir);
        $(window).on('scroll resize', mobileAnim);
        scrollBtn.removeClass('no-click');
      });
    } else {
      $(window).off();
      onScrollDown();
      $('body,html').animate({'scrollTop': $slideHeight}, 1000, function(){
        $(window).on('scroll', scrollDir);
        $(window).on('scroll resize', mobileAnim);
        scrollBtn.removeClass('no-click');
      });
    }
  } else {
    $('body,html').animate({'scrollTop': 0}, 1000, function(){
      header.removeClass('with-shadow');
      scrollBtn.removeClass('no-click');
    });
  }
});

$(window).on('scroll', scrollDir);

$(window).on('scroll resize', mobileAnim);

function mobileAnim(){
  if (window.matchMedia('(max-width: 1024px)').matches) {
    if($(window).scrollTop() >= $slideHeight) {
      scrollBtn.fadeIn();
    } else {
      scrollBtn.fadeOut();
    }
  } else {
    scrollBtn.removeAttr('style');
  }
}

function scrollDir(){
  if($(window).scrollTop() >= ($slideHeight / 3)) {
    onScrollDown();
  } else {
    onScrollUp();
  }
}

function onScrollUp() {
  header.removeClass('with-shadow');
  scrollBtn.removeClass('rotate');
}

function onScrollDown() {
  header.addClass('with-shadow');
  scrollBtn.addClass('rotate');
}