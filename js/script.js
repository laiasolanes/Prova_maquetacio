/**
  * @desc add a class active to nav buttons
*/
let buttons = document.querySelectorAll('.button');
console.log(buttons);
buttons.forEach(button => {
    button.addEventListener('click', function() {
        buttons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    })
})


/**
  * @desc accordion buttons in Why Choose us column
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