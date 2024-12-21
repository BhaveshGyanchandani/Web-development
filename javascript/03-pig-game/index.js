// 'use-strict';

// const scoreP1 = document.querySelector('#score--0');
// const scoreP2 = document.querySelector('#score--1');
// const curscoreP1 = document.querySelector('#current--0');
// const curscoreP2 = document.querySelector('#current--1');


// const diceEl= document.querySelector('.dice');

// const [dice1 , dice2 , dice3, dice4 ,dice5 ,dice6] = ['./dice-1.png' ,'./dice-2.png','./dice-3.png','./dice-4.png','./dice-5.png','./dice-6.png']
// const dicearr= [dice1 , dice2 , dice3, dice4 ,dice5 ,dice6];
// const diceval=[1,2,3,4,5,6]

// scoreP1.textContent=0;
// scoreP2.textContent=0;

// let activePlayer=curscoreP1;

// diceEl.classList.add('hidden');

// const roll = document.querySelector('.btn--roll');
// const hold=document.querySelector('.btn--hold')


// function switchPlayer() {
//     activePlayer = (activePlayer === curscoreP1) ? curscoreP2 : curscoreP1;
//     turn(activePlayer); // Call turn with the new active player
// }

// turn(activePlayer);
// function turn(player){
//     roll.addEventListener('click' , ()=> {
//     diceEl.classList.add('open');
//     const index =Math.floor(Math.random() * dicearr.length);
//     const randomItem = dicearr[index];
//     const value=diceval[index];

//     player.textContent=value+parseInt(player.textContent);
//     diceEl.src=randomItem;
    
//         if(value==1){
//             player.textContent=0;
//             switchPlayer()
//         } 
//     });
// }

// function Hold(player){
    
//     if(player==curscoreP1){
//         scoreP1.textContent=parseInt(player.textContent)+parseInt(scoreP1.textContent);
//     }
//     else{
//         scoreP2.textContent=parseInt(player.textContent)+parseInt(scoreP2.textContent);
//     }
//     player.textContent=0;
// }

// hold.addEventListener('click',()=>{

//     Hold(activePlayer);
//     switchPlayer();
// })

'use-strict';

const scoreP1 = document.querySelector('#score--0');
const scoreP2 = document.querySelector('#score--1');
const curscoreP1 = document.querySelector('#current--0');
const curscoreP2 = document.querySelector('#current--1');
const newgame = document.querySelector('.btn--new');
const diceEl = document.querySelector('.dice');

const [dice1, dice2, dice3, dice4, dice5, dice6] = ['./dice-1.png', './dice-2.png', './dice-3.png', './dice-4.png', './dice-5.png', './dice-6.png'];
const dicearr = [dice1, dice2, dice3, dice4, dice5, dice6];
const diceval = [1, 2, 3, 4, 5, 6];

scoreP1.textContent = 0;
scoreP2.textContent = 0;
curscoreP1.textContent = 0;
curscoreP2.textContent = 0;

let activePlayer = curscoreP1;
let currentScore = 0;

diceEl.classList.add('hidden');

const roll = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');

function switchPlayer() {
    currentScore = 0;
    activePlayer = (activePlayer === curscoreP1) ? curscoreP2 : curscoreP1;
}

function turn() {
    roll.removeEventListener('click', rollDice);
    roll.addEventListener('click', rollDice);
}

function rollDice() {
    diceEl.classList.remove('hidden');
    const index = Math.floor(Math.random() * dicearr.length);
    const randomItem = dicearr[index];
    const value = diceval[index];

    currentScore += value;
    activePlayer.textContent = currentScore;

    diceEl.src = randomItem;

    if (value === 1) {
        activePlayer.textContent = 0;
        switchPlayer();
    }
}

function Hold(player) {
    if (player === curscoreP1) {
        scoreP1.textContent = parseInt(scoreP1.textContent) + currentScore;
    } else {
        scoreP2.textContent = parseInt(scoreP2.textContent) + currentScore;
    }
    currentScore = 0;
    player.textContent = currentScore;
}

function reset() {
    curscoreP1.textContent = 0;
    curscoreP2.textContent = 0;
    scoreP1.textContent = 0;
    scoreP2.textContent = 0;
    diceEl.classList.add('hidden');
}

newgame.addEventListener('click', reset);

turn();

hold.addEventListener('click', () => {
    if (parseInt(activePlayer.textContent) !== 0) {
        Hold(activePlayer);
        switchPlayer();
    }
});
