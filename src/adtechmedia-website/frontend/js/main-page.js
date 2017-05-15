var headerHeight = $('header').height();
var $slideHeight = $('.main-slide').height();
var players = {};


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