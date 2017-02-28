(function() {
  function carouselSlide(selector, paginationId) {
    var slides = document.querySelectorAll(selector);
    var currentSlide = 0;
    var slideInterval = setInterval(nextSlide,4000);
    var p = document.getElementById(paginationId);
    var phtml = '';

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
          resumeSliding();
        };
      })(j);
    }

    function nextSlide(){
      goToSlide(currentSlide+1);
    }

    function pauseSliding(){
      clearInterval(slideInterval);
    }

    function resumeSliding(){
      slideInterval = setInterval(nextSlide,4000);
    }

    function goToSlide(n){
      pbuttons[currentSlide].className = '';
      slides[currentSlide].className = 'slide';
      currentSlide = (n+slides.length)%slides.length;
      slides[currentSlide].className = 'slide showing';
      pbuttons[currentSlide].className = 'active';
    }

    $('.video-show').click(function() {
      // stops slides
      pauseSliding();

      var $video = $(this).siblings('.carousel-overlay.youtube-overlay');
      $video.removeClass('hidden');

      // shows youtube video player
      var player = new YT.Player($video.children('.youtube-video').attr('id'), {
        height: '100%',
        width: '100%',
        videoId: $video.data('video-id'),
        playerVars: {
          autoplay: 1,
          showinfo: 0,
          rel: 0,
          modestbranding: 1
        },
        events: {
          'onStateChange': function(event) {
            if (event.data === YT.PlayerState.ENDED) {
              $video.addClass('hidden');

              // show slides again
              resumeSliding();
              player.destroy();
            }
          }
        }
      });
    });
  }

  carouselSlide('#home-slides .slide', 'home-pagination');
})(window);




