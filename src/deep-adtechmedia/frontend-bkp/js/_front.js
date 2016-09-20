/* Top Level - Main JS */

var SiteStartDate = '2016/09/01 12:00'; // The Date Of Site Opening
var VideoBgId = 'sfKhFktHtsI'; // Code of Youtube Video Background


jQuery(window).load(function() {
    vertAlign($('#countdown_block'));
    vertAlign($('#demo_thumbs'));
});


jQuery(document).ready(function() {

    /* Flex Slider */
    if ($('#bg_slideshow').length > 0) {

        var slider = $('#bg_slideshow').flexslider({
            controlNav: true,
            directionNav: false,
            manualControls: jQuery('#bg_slides_controls').length > 0 ? '#bg_slides_controls .slider_pages' : false,
            animationSpeed: 1200,
            start: function(slider) {
                $('.preloader').fadeOut();
            }
        });

        jQuery('.bg_slides_nav').click(function() {
            if (jQuery(this).attr('id') == 'bg_slides_next') {
                slider.flexslider('next');
            } else {
                slider.flexslider('prev');
            }
        });

    }

    if ($('#tab_contents').length > 0) {
        $('#tab_contents').flexslider({
            controlNav: true,
            directionNav: false,
            animationLoop: false,
            animationSpeed: 1000,
            animation: 'slide',
            slideshow: false,
            manualControls: '#mainmenu li a'
        }).mCustomScrollbar({
            autoHideScrollbar: false,
            alwaysShowScrollbar: 2,
            mouseWheel: true
        });
    }

    if ($('#countdown').length > 0) {
        $('#countdown').countdown({
            until: new Date(SiteStartDate),
            format: 'DHMS'
        });
    }

    $('.form_submit').click(function() {
        var form = $(this).parents('form');
        form.find('.form_item').removeClass('error');
        form.find('.error_block').remove();
        var post_data;
        var errors = formValidation(form),
            output;
        if (Object.keys(errors).length > 0) {
            showErrors(form, errors);
        } else {
            if (form.attr('id') == 'contacts_form') {
                post_data = {
                    'name': $('input[name=name]').val(),
                    'email': $('input[name=email]').val(),
                    'message': $('textarea[name=message]').val()
                };

                //Ajax post data to server
                jQuery.post('contacts.php', post_data, function(response) {

                    if (response.type == 'error') { //load json data from server and output message    
                        output = '<div class="error_block">' + response.text + '</div>';
                    } else {
                        output = '<div class="success">' + response.text + '</div>';
                        //reset values in all input fields
                        $("#contacts_form .form_item").val('');
                    }
                    form.find('.form_row').slideUp();
                    form.find("#contact_results").hide().html(output).slideDown();
                }, 'json');
            } else {
                post_data = {
                    'subscribe_email': $('input[name=subscribe_email]').val(),
                };

                jQuery.post('subscribe.php', post_data, function(response) {

                    output = '<div class="success">' + response.text + '</div>';
                    //reset values in all input fields
                    $("#contacts_form .form_item").val('');
                    form.find('.form_inner').slideUp();
                    form.find("#form_results").hide().html(output).slideDown();
                }, 'json');
            }

        }
        return false;
    });

    $('#show_content').click(function() {
        $('#content').toggleClass('visible');
        $('body').toggleClass('content_vis');
        return false;
    });

    $('.close_content').click(function() {
        $('#content').removeClass('visible');
        $('body').removeClass('content_vis');
        return false;
    });

    if ($('#video_bg').length > 0) {
        $('#video_bg').tubular({
            videoId: VideoBgId,
            start: 3
        });
    }

});

/* Vertical Alignment */
function vertAlign(elem) {
    if (elem) {
        elem.css({
            'marginTop': -elem.height() / 2
        }).fadeIn();
    }
}

/* Forms Validation */
function formValidation(form) {

    var error = {};

    if (form) {
        form.find('.form_item').each(function() {
            var $th = $(this);

            if ($th.val() != '') {
                if ($th.attr('type') == 'email') {
                    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    if (!emailReg.test(jQuery.trim($th.val()))) {
                        error[$th.attr('id')] = 'not_email';
                    }
                }
            } else {
                error[$th.attr('id')] = 'empty';
            }

        });
    }
    return error;
}

/* Validation Errors */
function showErrors(form, errors) {
    var error_message = ''
    for (var i in errors) {
        var form_item = form.find($('#' + i)),
            form_item_name = form_item.attr('placeholder');

        form_item.addClass('error');
        if (errors[i] == 'empty')
            error_message += '<div class="error">Field ' + form_item_name + ' is required</div>';
        else
            error_message += '<div class="error">You entered an invalid email</div>';
    }
    if (form.find('.error_block').length > 0) {
        form.find('.error_block').html(error_message);
    } else {
        form.append('<div class="error_block">' + error_message + '</div>');
    }
}
