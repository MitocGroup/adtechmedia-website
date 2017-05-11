/*eslint no-undef:0, no-unused-vars:0 */

// @todo: split this file into related functionality (video, maps, etc)

var $menu = $('.main-nav ul');
var headerHeight = $('header').height();
var $menuIcon = $('#navTrigger');


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
    $('body').addClass('menu-shown');
    $menu.on('click', 'a', function() {
      _clearNav();
    });
  } else {
    $('body').removeClass('menu-shown');
  }
});

$(window).on('orientationchange', function(){
  _clearNav()
});

$(':required, .non-required').on('blur keydown', function() {
  $(this)[ $(this).val() ? 'addClass' : 'removeClass' ]('touched');
});

$('form').on('reset', function () {
  $(':required').removeClass('touched');
});

$('#mc-embedded-subscribe').on('click', function() {
  $('#mc-embedded-subscribe-form').submit();
});

