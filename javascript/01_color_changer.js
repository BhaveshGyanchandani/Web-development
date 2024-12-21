const buttons = document.querySelectorAll('.button'); // Use querySelectorAll to get all elements with class 'button'
const body = document.querySelector('body');

buttons.forEach(function (button) {
    button.addEventListener('click', (e) => {
     body.style.background = window.getComputedStyle(button).background; 
        
        
    });
});