/*eslint no-undef:0, no-unused-vars:0 */

// @todo: split this file into related functionality (video, maps, etc)

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

//show spinner while page loads
$(window).load(function() {
  $(".loader").fadeOut("slow");
});

// Main nav on mobile
function _clearNav(){
  $menuIcon.removeAttr('checked');
  $('body').removeClass('menu-shown');
}

$menuIcon.on('click', function(){
  if($menuIcon.prop('checked')) {
    if($(window).height() > $menu.height() + headerHeight){
      $(window).on('scroll', function() {
        _clearNav();
      });
    } else {
      $('body').addClass('menu-shown');
      $menu.on('click', 'a', function() {
        _clearNav();
      });
    }
  } else {
    $('body').removeClass('menu-shown');
  }
});

$(window).on('orientationchange', function(){
  _clearNav()
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

