(function() {
  function carouselSlide(selector, paginationId) {
    var slides = document.querySelectorAll(selector);
    var currentSlide = 0;
    var slideInterval = setInterval(nextSlide,4000);
    var p = document.getElementById(paginationId);
    var phtml = '';
    var players = {};

    for(var i=1; i<=slides.length; i++){
      phtml+='<button></button>';
    }

    p.innerHTML = phtml;

    var pbuttons = p.querySelectorAll('button');
    pbuttons[0].className = 'active';

    for(var j=0; j<pbuttons.length; j++){
      pbuttons[j].onclick = (function(n){
        return function(){
          pauseSliding();
          goToSlide(n);
          setTimeout(function(){
            resumeSliding();
          }, 1000);
        };
      })(j);
    }

    function nextSlide(){
      goToSlide(currentSlide+1);
    }

    function pauseSliding(){
      clearInterval(slideInterval);
    }

    function resumeSliding() {
      for(var x in players) {
        if(players.hasOwnProperty(x)) {
          players[x].stopVideo();
        }
      }

      $('.carousel-overlay.youtube-overlay').add('.video-close').addClass('hidden');

      slideInterval = setInterval(nextSlide,4000);
    }

    function goToSlide(n){
      pbuttons[currentSlide].className = '';
      slides[currentSlide].className = 'slide';
      currentSlide = (n+slides.length)%slides.length;
      slides[currentSlide].className = 'slide showing';
      pbuttons[currentSlide].className = 'active';
    }

    $('.video-show').on('click', function() {
      // stops slides
      pauseSliding();

      var $close = $(this).siblings('.video-close');
      var $video = $(this).siblings('.carousel-overlay.youtube-overlay');
      var videoId = $video.data('video-id');

      $video.add($close).removeClass('hidden');

      if (players[videoId]) {
        players[videoId].playVideo();
        return;
      }

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

              // show slides again
              resumeSliding();
            }
          }
        }
      });

      players[videoId] = player;
    });

    /**
     * Force currently playing video to stop
     */
    $('.video-close').on('click', function() {
      resumeSliding();
    });

  }

  carouselSlide('#home-slides .slide', 'home-pagination');
})(window);
