/**
  * @desc Active class to nav buttons
*/

let buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        buttons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    })
})


/**
  * @desc Accordion buttons in Why Choose us column
*/

let accordion = document.querySelectorAll(".accordion");
let i;

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function() {
    /* Toggle adding and removing the "active" class */
    this.classList.toggle("active");

    /* Toggle hiding and showing the active panel */
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


/**
  * @desc Blog slider
*/

const slide = {};
const cardsSlider = (function() {
  
let slides    = document.querySelectorAll('.cards__item'),
    NEXT      = document.querySelector('.cards__controls--next'),
    PREVIOUS  = document.querySelector('.cards__controls--prev'),
    count     = 0;
  
  NEXT.addEventListener('click', (event) => {
    event.preventDefault();
    
    if(count < (slides.length - 1)) {
      count++;
      
      for(let i = 0; i < slides.length; i++) {
        let element = slides[i],
            trans   = 20 + element.clientWidth;
        
        slide.transform = trans * count;
        element.style.transform = 'translateX(-' + slide.transform + 'px)'
      }
    }
  })
  
  
  PREVIOUS.addEventListener('click', (event) => {
    event.preventDefault();
    
    if(count > 0) {
      count--;
      
      for (let i = 0; i < slides.length; i++) {
        let element = slides[i],
            trans   = 20 + element.clientWidth;
        
        slide.transform = trans * count;    
        element.style.transform = 'translateX(-' + slide.transform + 'px)'        
      }
    }
  })
  
})();