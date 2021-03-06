var $menu = $('.main-nav ul');
var $menuIcon = $('#navTrigger');
var $demoForm = $('#mc-embedded-subscribe-form');
var $demoFormSubmit = $('#mc-embedded-subscribe');

$('.loader').fadeOut('slow');

function _clearNav() {
  $menuIcon.removeAttr('checked');
  $('body').removeClass('overflow');
}

$menuIcon.on('click', function () {
  if ($menuIcon.prop('checked')) {
    $('body').addClass('overflow');
    $menu.on('click', 'a', function () {
      _clearNav();
    });
  } else {
    $('body').removeClass('overflow');
  }
});

$(window).on('orientationchange', function () {
  _clearNav()
});

$(':required, .non-required').on('blur keydown', function () {
  $(this)[$(this).val() ? 'addClass' : 'removeClass']('touched');
});

$('form').on('reset', function () {
  $(':required').removeClass('touched');
});

$demoFormSubmit.on('click', function () {
  $demoForm.submit();
});

$demoForm.ajaxChimp({
  callback: function (data) {
    if (data.result === 'success') {
      window.location = '/demo-confirmation'
    }
  }
});

$('.modal-inner').on('click', 'label a', function () {
  window.open($(this).attr('href'), $(this).attr('target'));
  return false;
});

if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
  $('body').addClass('mobile');
}
