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
          clearInterval(slideInterval);
          goToSlide(n);
          slideInterval = setInterval(nextSlide,4000);
        };
      })(j);
    }

    function nextSlide(){
      goToSlide(currentSlide+1);
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
      clearInterval(slideInterval);

      // @todo - hide slide buttons

      // shows youtube video player
      var $slide = $(this).siblings('.carousel-overlay.youtube-overlay');
      $slide.children('iframe').attr('src', $slide.data('src'));
      $slide.removeClass('hidden');
    });
  }

  carouselSlide('#ny-slides .slide', 'ny-pagination');
//carouselSlide('#wp-slides .slide', 'wp-pagination');
//carouselSlide('#bmg-slides .slide', 'bmg-pagination');
})(window);




