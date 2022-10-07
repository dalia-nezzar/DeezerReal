
const mainhead = document.querySelector('.mainhead');
const menu2 = document.querySelector('.menu');
let tmenu = menu2.offsetHeight;
let thead =  mainhead.offsetHeight;



$(function(){
  if (window.matchMedia("(min-width: 1000px)").matches) {


    $(window).scroll(function (event) {
      var y = $(this).scrollTop();
    
      if (y >= (thead - tmenu)) {
        $('.menu').addClass('fixed');
      } else {
        $('.menu').removeClass('fixed');
      }
      if(y >= (thead + 110)){
        $('.scrollUp').addClass('visible');
      }
      else {
        $('.scrollUp').removeClass('visible');
      }
    });

  }else{

  }
});






