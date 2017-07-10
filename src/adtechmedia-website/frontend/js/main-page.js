var players = {};


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