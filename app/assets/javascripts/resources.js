$(document).ready(function() {
  prev = null;

  $(".info-container").bind("click", function() { //This function is called when a resource is clicked which will then reveal the resource's download links.

    current = $(this);

    if(prev !=null) {
      if(prev.attr("value") == current.attr("value")) {
        current = null;
      }
      // alert(prev.attr("value") + " " + current.attr("value"))
    }

    // section = $(this).attr("value");
    // arrow = $(this).find('.right-arrow');

    // download = $(".downloads-container#" + section);

    // if(download.attr('vis')=='hide') {
    //   download.slideDown();
    //   download.attr('vis','show');
    //   arrow.animateRotate(90, 0);
    // }
    // else {
    //   download.slideUp();
    //   download.attr('vis','hide');
    //   arrow.animateRotate(0, 90);
    // }

    if(current != null) {
      $(".downloads-container#" + current.attr("value")).slideDown();
      current.find('.right-arrow').animateRotate(90, 0);
    }
    if(prev != null) {
      $(".downloads-container#" + prev.attr("value")).slideUp();
      prev.find('.right-arrow').animateRotate(0, 90);
    }

    prev = null;

    if(current != null)
      prev = current;
  });
  $(".check").bind("click", function() { //This function is called when a resource is clicked which will then hide the resource's download links.
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

  function resize() { //======================Each of these functions are called to ensure that each section will be centered on the browser.==============

    half_body_width = $(".body").width() / 2;

    title_margin = half_body_width - ($(".download-all .title-container").width() / 2) + "px";
    $(".download-all .title-container").css("margin-left", title_margin);

    button_margin = half_body_width - ($(".download-all .download-button-container").width() / 2) + "px";
    $(".download-all .download-button-container").css("margin-left", button_margin);

    $(".download-all .download-images-container img.main-image").css("height", $(".download-all .download-images-container img").width());
  }

  //This function adds an animation for the right arrow image so that it will rotate gradually instead of snapping into place.

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