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