$(document).ready(function() {

  $(".project-page .project").bind("click", function() {
    $(".project-page .popup").show();
  });

  $(".project-page .x-button").bind("click", function() {
    $(".project-page .popup").hide();
  });

  half_body_width = $(".body").width() / 2;

  margin_left = half_body_width - ($(".item-image-slideshow .sliders").width() / 2) + "px";
  $(".item-image-slideshow .sliders").css("margin-left", margin_left);

  $(window).on('resize', function(){

    half_body_width = $(".body").width() / 2;

    margin_left = half_body_width - ($(".item-image-slideshow .sliders").width() / 2) + "px";
    $(".item-image-slideshow .sliders").css("margin-left", margin_left);
  });

  ctr = 1;

  $(".item-image-slideshow .sliders .image-index").bind("click", function() {
    $(".item-image-slideshow .item-images img").fadeOut(500);
    index = $(this).attr("value");

    ctr = index;

    setTimeout(function() {
      $(".item-image-slideshow .item-images .image_" + index).fadeIn(500);
    }, 500);

    $(".item-image-slideshow .sliders .image-index").removeClass("picked");
    $(this).addClass("picked");
  });

  max = 5;
  window.setInterval(function(){
    $(".item-image-slideshow .item-images img").fadeOut(500);
    ctr++;

    if (ctr > max) {
      ctr = 1;
    }

    setTimeout(function() {
      $(".item-image-slideshow .item-images .image_" + ctr).fadeIn(500);
    }, 500);

    $(".item-image-slideshow .sliders .image-index").removeClass("picked");
    $(".item-image-slideshow .sliders .image-index.index-" + ctr).addClass("picked");
    
  }, 5000);

});
