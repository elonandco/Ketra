$(document).ready(function(){
  $(".header .menu-button").bind("click", function() {
    $(".header .menu-hover").show();
  });
  $(".menu-hover-container .x-button").bind("click", function(){
    $(".header .menu-hover").hide();
  });
});
