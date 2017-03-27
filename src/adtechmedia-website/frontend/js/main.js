/*eslint no-undef:0, no-unused-vars:0 */

// @todo: split this file into related functionality (video, maps, etc)

var videoBlock = document.getElementById('video-block');
var videoFile = document.getElementById('video-file');
var $menu = $('.main-nav ul');
var headerHeight = $('header').height();
var $menuIcon = $('#navTrigger');

function _initGoogleMaps() {
  var mapContainer = document.getElementById('googleMap');

  if (mapContainer) {
    var myCenter = new google.maps.LatLng(41.043671, -74.0764);

    google.maps.event.addDomListener(window, 'load', function initialize() {
      var map = new google.maps.Map(mapContainer, {
        center: myCenter,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });

      var marker = new google.maps.Marker({
        position: myCenter,
      });

      marker.setMap(map);
    });
  }
}

function _videoShow() {
  videoBlock.classList.remove('hidden');
  videoFile.autoplay = true;
  videoFile.load();
}

function _videoHide() {
  videoBlock.classList.add('hidden');
  videoFile.pause();
  videoFile.currentTime = 0;
}

function autoGrow(element) {
  if (element.scrollHeight < 100) {
    element.style.height = 32 + 'px';
    element.style.height = (element.scrollHeight) + 'px';
  }
}

//show spinner while page loads
$(window).load(function() {
  $(".loader").fadeOut("slow");
});

// Main nav on mobile
$menuIcon.on('click', function(){
  if($menuIcon.prop('checked')) {
    if($(window).height() > $menu.height() + headerHeight) {
      $(window).on('scroll touchmove', function() {
        $menuIcon.removeAttr('checked');
      });
    } else {
      $('body').addClass('menu-shown');
      $menu.on('click touchmove', 'a', function() {
        $menuIcon.removeAttr('checked');
        $('body').removeClass('menu-shown');
      });
    }
  } else {
    $('body').removeClass('menu-shown');
  }
});

$('.show-toggle').click(function() {
  $(this).closest('.member-info').toggleClass('shown');
});

$(':required').on('blur keydown', function() {
  $(this)[ $(this).val() ? 'addClass' : 'removeClass' ]('touched');
});

$('form').on('reset', function () {
  $(':required').removeClass('touched');
});

new InputMask().Initialize(
  document.querySelectorAll('#phone-field'),
  {mask: InputMaskDefaultMask.Phone}
);

_initGoogleMaps();
