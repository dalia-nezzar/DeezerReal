const menu2 = document.querySelector('.menut');
const logo_titre = document.querySelector('.id');
let ht = logo_titre.offsetHeight;
let hm = menu2.offsetHeight;



$(function(){
  if (window.matchMedia("(min-width: 1000px)").matches) {


    $(window).scroll(function (event) {
      var y = $(this).scrollTop();
    
      if (y >= (ht)) {
        $('.menut').addClass('fixed');
      } else {
        $('.menut').removeClass('fixed');
      }
      if(y >= (ht + hm)){
        $('.scrollUp').addClass('visible');
      }
      else {
        $('.scrollUp').removeClass('visible');
      }
    });

  }else{

  }
});






