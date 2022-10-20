const beforenav = $(".id").height();



$(function(){
  if (window.matchMedia("(min-width: 1000px)").matches) {


    $(window).scroll(function (event) {
      var y = $(this).scrollTop();
    
      if (y >= beforenav) {
        $('.menut').addClass('fixed');
      } else {
        $('.menut').removeClass('fixed');
      }
      if(y >= beforenav){
        $('.scrollUp').addClass('visible');
      }
      else {
        $('.scrollUp').removeClass('visible');
      }
    });

  }else{

  }
});






