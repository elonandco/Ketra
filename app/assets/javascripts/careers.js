$(document).ready(function(){
  var text = $(".products .product-container .text");
  text.css("line-height", text.height() + 'px');

  //=====This function is called so that each award will be displayed gradually=====
  // Careers carousel
  var owl = $('#awards-pat');
  owl.owlCarousel({
    // autoPlay: 3000, //Set AutoPlay to 3 seconds
    items : 5,
    itemsDesktop : [1199,5],
    itemsDesktopSmall : [979,3],
    pagination : false,
  });
  $('.next-holder').bind("click", function(e){
    e.preventDefault();
    owl.trigger('owl.next');
  });
  $('.prev-holder').bind("click", function(e){
    e.preventDefault();
    owl.trigger('owl.prev');
  });
  $('.owl-wrapper').css({"display": "flex", "align-items": "center", "height": "160px"});
  //==================================================================================

  //This function is called when a current opening is clicked so that it will reveeal it's contents and vice versa
  // Careers Accordion
  var selectedCat = "",
      selectedAcc = "";
  $('.accordion-icon').click(function(e) {
    e.preventDefault(); 
    daccIcon = $(this).find("i");
    if(daccIcon.hasClass("fa fa-chevron-right"))
      daccIcon.removeClass("fa-chevron-right").addClass("fa-chevron-down");
    else
      daccIcon.removeClass("fa-chevron-down").addClass("fa-chevron-right");
    var careerCategory = $(this).text().toLowerCase();
    careerCategory = "." + careerCategory.replace(/[\s\W]/g, '');
    if($(selectedCat).is(":visible") && selectedCat !== careerCategory){
      $(selectedCat).slideUp();
      $(careerCategory).slideDown();
      $('.'+selectedAcc).find("i").removeClass("fa-chevron-down").addClass("fa-chevron-right");
      daccIcon.removeClass("fa-chevron-right").addClass("fa-chevron-down");
    }
    else
      $(careerCategory).slideToggle("fast");
    selectedCat = careerCategory;
    selectedAcc = $(this).attr('class');
  });

});
