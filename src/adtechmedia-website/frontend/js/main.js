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

