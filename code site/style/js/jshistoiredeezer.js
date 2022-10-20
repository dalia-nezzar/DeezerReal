
const progressbar = document.querySelector('progress');
const article = document.querySelector('.corps');
const allRonds = document.querySelectorAll('.date');
const allBoxes = document.querySelectorAll('.box');
const date = document.querySelector('d');

const logoHeight = $(".logo1").height();
const titres = $(".titre").height() / 2;
const menuHeight = $(".id").height();

$(function(){
    var documentHeight = $(".corps").height();
    $(".corps").css('height', (documentHeight + 1000));
});

const controller = new ScrollMagic.Controller();

$(function(){
    if (window.matchMedia("(min-width: 1000px)").matches) {
  
       let isScrolling = false;
    
             document.addEventListener('scroll', e => isScrolling = true);
             render();
    
    
             function render() {
    
               requestAnimationFrame(render);
               var documentHeight = $(".corps").height();
               var scrollAmount = $(window).scrollTop();
               var scrollAmountofcorps = $(window).scrollTop() - logoHeight;
               $('progress').css('width', (documentHeight * 90 / 100));
               $('progress').css('top', ((documentHeight * 95 / 100) / 2) - 20 + "px");

               

               if (!isScrolling) return;
                if(scrollAmount <= logoHeight){
                    progressbar.value = 0;
                    $('.date').css('color', "white");
                }
                else{
                    console.log (scrollAmountofcorps);
                    progressbar.value = scrollAmountofcorps * 100 / (documentHeight - logoHeight);
                    $('.d1').css('color', "rgb(112, 254, 232)");
                }
                if(progressbar.value <= 22){
                    $('.d2').css('color', "white");
                }
                else{
                    $('.d2').css('color', "rgb(112, 254, 232)");
                }
                
               isScrolling = false;
    
             }
    
            allBoxes.forEach(box => {
    
                for(i = 0; i < allRonds.length; i++){
    
                    if(allRonds[i].getAttribute('data-anim') === box.getAttribute('data-anim')){
    
                        let tween = gsap.from(box, {y: -50, opacity: 0, duration: 0.5});
    
                        let scene = new ScrollMagic.Scene({
                            triggerElement: allRonds[i],
                            reverse: true
                        })
                        .setTween(tween)
                        .addIndicators()
                        .addTo(controller)
                    }
    
                }
    
    
    
            });
  
            
    
    }
  
   else {
    let tween = gsap.from(box, {y: -50, opacity: 0, duration: 0.5})
    .setTween(tween)
    progressbar.value = 100
   }
      
  });
