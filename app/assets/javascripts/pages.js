$(document).ready(function(){

  //These functions are used for the Menu button on the Header Upper right corner
  $(".header .menu-button").bind("click", function() {
    $(".header .menu-hover").show();
  });
  $(".menu-hover-container .x-button").bind("click", function(){
    $(".header .menu-hover").hide();
  });

  video = document.getElementsByTagName("video")[0];

  if(video != undefined) {
    fraction = 0.8;
    function checkScroll() {


      var x = video.offsetLeft, y = video.offsetTop, w = video.offsetWidth, h = video.offsetHeight, r = x + w, //right
          b = y + h, //bottom
          visibleX, visibleY, visible;

      visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
      visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));

      visible = visibleX * visibleY / (w * h);

      if (visible > fraction) {
        video.play();
        $(".video-container .mask").hide();
      } else {
        video.pause();
        $(".video-container .mask").show();
        $(".video-container .mask").css("height",$(".video-container").height());
      }

    }

    $(".main-vid").bind("click", function() {
      video.pause();
      $(".video-container .mask").show();

      $(".video-container .mask").css("height",$(".video-container").height());
    });

    $(".video-container .mask").bind("click", function() {
      video.play();
      $(".video-container .mask").hide();
    });

    window.addEventListener('scroll', checkScroll, false);
    window.addEventListener('resize', checkScroll, false);
  }
});
