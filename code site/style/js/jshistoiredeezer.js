
const progressbar = document.querySelector('progress');
const article = document.querySelector('.corps');
const allRonds = document.querySelectorAll('.date');
const allBoxes = document.querySelectorAll('.box');
const date = document.querySelector('d');

const logoHeight = $(".logo1").height();
const titres = $(".titre").height() / 2;
const menuHeight = $(".id").height();
const mainhead = $(".mainhead").height();
const hglobal = $(".corps").height();


const controller = new ScrollMagic.Controller();

$(function(){
    
  
       let isScrolling = false;
    
             document.addEventListener('scroll', e => isScrolling = true);
             render();
    
    
             function render() {
    
               requestAnimationFrame(render);
               var documentHeight = $(".corps").height();
               var scrollAmount = $(window).scrollTop();
               $('progress').css('width', (documentHeight * 95 / 100));
               console.log (window.scrollY);

               const decal = $("progress").width();
               progressbar.max = decal;

                $(function(){
                    var documentHeight = $(".corps").height();
                    $("progress").css('top', decal / 2 + 4 + "px");
                });

               

               if (!isScrolling) return;


                    progressbar.value = window.scrollY - 150;
                    $('.d1').css('color', "rgb(112, 254, 232)");

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
  
    if (window.matchMedia("(min-width: 1000px)").matches) {

     }
  
   else {

    
   }
      
  });
