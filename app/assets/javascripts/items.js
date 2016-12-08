$(document).ready(function() {
  itemSetWidth();
  half_body_width = $(".body").width() / 2;

  function itemSetWidth() { //This function is used for the Product Specification Section so that the width of each spec will be enough for the whole width of the browser.
    setSpecificItemWidth(".spec-container.size");
    setSpecificItemWidth(".spec-container.output");
    setSpecificItemWidth(".spec-container.color");
    setSpecificItemWidth(".spec-container.type");
  } 

  function setSpecificItemWidth(className) { //This function is called for the formula of fetching the width of each spec.
    $(className).css("width", $(className).width() + 0.5 + "px");
    $(className + " .title").attr("style", "padding-right:0px; width:100%");
    $(className + " .specs").css("width", "100%");
  }

  //======================Each of these functions are called to ensure that each section will be centered on the browser.==============
  width = $(".product-specs").width() - ($(".spec-container.size").width() + $(".spec-container.output").width() + $(".spec-container.color").width() + $(".spec-container.type").width());
  $(".spec-container.last").css("width", width - 10 + "px");
  $(".spec-container.last .title").css("width", "100%");

  margin_left = half_body_width - ($(".item-image-slideshow .sliders").width() / 2) + "px";
  $(".item-image-slideshow .sliders").css("margin-left", margin_left);

  button_margin = half_body_width - ($(".button.main-button").width() / 2) + "px";
  $(".button.main-button").css("margin-left", button_margin);

  title_margin = ($(".downloads-container").width() / 2) - ($(".downloads .title-container").width() / 2) + "px";
  $(".downloads .title-container").css("margin-left", title_margin);

  title_margin = half_body_width - ($(".related .title-container").width() / 2) + "px";
  $(".related .title-container").css("margin-left", title_margin);

  image_margin = half_body_width - ($(".related .related-product").width() / 2) + "px";
  $(".related .related-product").css("margin-left", image_margin);


  product_text = $(".main-product .product-text");
  product_image = $(".main-product .product-image");

  if (product_text.height() < product_image.height())
    product_text.css("height", product_image.height());

  //========================================================================================================

  $(window).on('resize', function(){ //This function is called so that when the browser is resized while the page is open, it will automatically center the sections that needs to be centered.

    half_body_width = $(".body").width() / 2;

    margin_left = half_body_width - ($(".item-image-slideshow .sliders").width() / 2) + "px";
    $(".item-image-slideshow .sliders").css("margin-left", margin_left);

    button_margin = half_body_width - ($(".button.main-button").width() / 2) + "px";
    $(".button.main-button").css("margin-left", button_margin);

    title_margin = ($(".downloads-container").width() / 2) - ($(".downloads .title-container").width() / 2) + "px";
    $(".downloads .title-container").css("margin-left", title_margin);

    title_margin = half_body_width - ($(".related .title-container").width() / 2) + "px";
    $(".related .title-container").css("margin-left", title_margin);

    image_margin = half_body_width - ($(".related .related-product").width() / 2) + "px";
    $(".related .related-product").css("margin-left", image_margin);

    if (product_text.height() < product_image.height())
      product_text.css("height", product_image.height());
    else
      product_text.css("height", "auto");
  
  });


  //===== This function is used for the Product Images Slideshow Section so that the images is periodically replaced by the next one.=====
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

  //========================================================================================================
  
});