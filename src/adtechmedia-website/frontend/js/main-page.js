var header = $('header');
var headerHeight = header.height();
var $slideHeight = $('.main-slide').height();
var scrollBtn = $('.scroll-down');
var players = {};


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

function closeVideo() {
  window.setTimeout(function () {
    for(var x in players) {
      if(players.hasOwnProperty(x)) {
        players[x].destroy();
      }
    }
  }, 100);

  $('body').removeClass('overflow');

  $('.youtube-overlay').addClass('hidden');
}

$('.video-show').on('click', function() {
  var $video = $('.youtube-overlay');
  var videoId = $video.data('video-id');

  $video.removeClass('hidden');

  $('body').addClass('overflow');

  // shows youtube video player
  var player = new YT.Player($video.children('.youtube-video').attr('id'), {
    height: '100%',
    width: '100%',
    videoId: videoId,
    playerVars: {
      autoplay: 1,
      showinfo: 0,
      rel: 0,
      modestbranding: 1
    },
    events: {
      'onStateChange': function(event) {
        if (event.data === YT.PlayerState.ENDED) {
          closeVideo();
        }
      }
    }
  });

  players[videoId] = player;
});

$('.video-close').on('click', function() {
  closeVideo();
});
