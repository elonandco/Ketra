$(document).ready(function() {

  $(".info-container").bind("click", function() {
    section = $(this).attr("value");
    arrow = $(this).find('.right-arrow');

    download = $(".downloads-container#" + section);

    if(download.attr('vis')=='hide') {
      download.slideDown();
      download.attr('vis','show');
      arrow.animateRotate(90, 0);
    }
    else {
      download.slideUp();
      download.attr('vis','hide');
      arrow.animateRotate(0, 90);
    }
  });
  $(".check").bind("click", function() {
    check = $(this).find('.checkmark');

    if(check.attr('vis')=='hide') {
      check.show();
      check.attr('vis','show');
      check.addClass('active');
    }
    else {
      check.hide();
      check.attr('vis','hide');
      check.removeClass('active');
    }

    var group = $('.resource-container').find('.checkmark');

    if(group.hasClass('active')){
      $(".resources-page .download-all").show();
      resize();
    }
    else {
      $(".resources-page .download-all").hide();
    }
  });

  resize();

  $(window).on('resize', function(){
    resize();
  });

  function resize() {

    half_body_width = $(".body").width() / 2;

    title_margin = half_body_width - ($(".download-all .title-container").width() / 2) + "px";
    $(".download-all .title-container").css("margin-left", title_margin);

    button_margin = half_body_width - ($(".download-all .download-button-container").width() / 2) + "px";
    $(".download-all .download-button-container").css("margin-left", button_margin);
  }

  $.fn.animateRotate = function(angle, old, duration, easing, complete) {
    return this.each(function() {
      var $elem = $(this);

      $({deg: old}).animate({deg: angle}, {
        duration: duration,
        easing: easing,
        step: function(now) {
          $elem.css({
             transform: 'rotate(' + now + 'deg)'
           });
        },
        complete: complete || $.noop
      });
    });
  };
});
