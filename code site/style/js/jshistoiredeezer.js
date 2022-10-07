
const progressbar = document.querySelector('progress');
const article = document.querySelector('div.corps');
const allRonds = document.querySelectorAll('.date');
const allBoxes = document.querySelectorAll('.box');
const date = document.querySelector('d');

const controller = new ScrollMagic.Controller();

$(function(){
    if (window.matchMedia("(min-width: 1000px)").matches) {
  
      let isScrolling = false;
    
            document.addEventListener('scroll', e => isScrolling = true);
            render();
    
    
            function render() {
    
              requestAnimationFrame(render);
    
              if (!isScrolling) return;
    
              progressbar.value = (window.scrollY - 50) / (article.offsetHeight - window.innerHeight + 500) * 100;
    
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