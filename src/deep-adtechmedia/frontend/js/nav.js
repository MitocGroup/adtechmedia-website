/*eslint no-use-before-define:0*/

jQuery(document).ready(function ($) {
  var secondaryNav = $('.cd-secondary-nav'),
    contentSections = $('.cd-section');

  $(window)
    .on('scroll', function () {
      updateSecondaryNavigation();
    })
    .on('load', function (e) {
      e.preventDefault();
      updateSecondaryNavigation();
    });

  /**
   *
   */
  function updateSecondaryNavigation() {
    contentSections.each(function () {
      var actual = $(this),
        actualHeight = actual.height() + parseInt(actual.css('paddingTop').replace('px', ''))
          + parseInt(actual.css('paddingBottom').replace('px', '')),
        actualAnchor = secondaryNav.find('a[href="#' + actual.attr('id') + '"]');

      if (( actual.offset().top - secondaryNav.height() <= $(window).scrollTop() ) &&
        ( actual.offset().top + actualHeight - secondaryNav.height() > $(window).scrollTop() )) {
        actualAnchor.addClass('active');
      } else {
        actualAnchor.removeClass('active');
      }
    });
  }

  //smooth scrolling when clicking on the secondary navigation items
  secondaryNav.find('ul a').on('click', function (event) {
    if (this.hash) {
      event.preventDefault();
      var target = $(this.hash);

      $('body,html').animate(
        {
          'scrollTop': target.offset().top - secondaryNav.height() + 1
        },
        500
      );
    }
  });
});
