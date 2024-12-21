const check = document.querySelector('.check');
let guess = document.querySelector('.guess');
const again = document.querySelector('.again');
let score = 20;
let highscore = 0;

check.addEventListener('click', () => {
if(guess.value > 20){
    document.querySelector('.message').innerHTML = "enter value from 1 to 20"
}

else if(guess.value < 1){
    
        document.querySelector('.message').innerHTML = "enter positive value from l to 20"
    
}

    const randomValue = Math.floor(Math.random() * 20) + 1;
    if (guess.value == randomValue) {
        document.querySelector('.message').innerHTML = "🥳 You won";
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        document.body.style.background = "aqua";
        document.querySelector('.number').textContent = randomValue;
        setTimeout(restart, 1000);
    } else {
        score -= 1;
        document.querySelector('.score').textContent = score;

        if (score <= 0) {
            document.querySelector('.message').innerHTML = "SORE LOSER....RESTART";
            restart();
        }

        console.log(randomValue);
    }
});

again.addEventListener('click', () => {
   restart();
});

function restart() {
    guess.value = '';
    score = 20;
    document.querySelector('.score').textContent = score;
    setInterval(()=>document.querySelector('.message').innerHTML = "Start guessing...",2000)
    document.querySelector('.number').textContent = '?';
    document.body.style.background = '#222';
}

