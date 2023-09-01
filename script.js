const again = document.querySelector('.again');
const check = document.querySelector('.check');
const body = document.querySelector('body');
let message = document.querySelector('.message');
let guess = document.querySelector('.guess');
let number = document.querySelector('.number');
let newScore = document.querySelector('.score');
let highScore = document.querySelector('.highscore');

let newNumber = Math.trunc(Math.random()*30)+1;
number.value = newNumber;
let score = 30;
let winnerScore = 0;

function guessNumber(){
    check.addEventListener('click',(e)=>{
        console.log('click')
        if(!Number(guess.value)){
            message.textContent = "Sorry, try again"
        }
        else if(newNumber < Number(guess.value)){
            message.textContent = "Much lower"
            score--;
            newScore.textContent = score;
            stopScore();
        }
        else if(newNumber > Number(guess.value)){
            message.textContent = "Much higher"
            score--;
            newScore.textContent = score;
            stopScore();
        }
        else if(newNumber === Number(guess.value)){
            rightGuessNumber();
            wonPlay();
            calcHighScore();
        }
    })
}

 guessNumber()

function rightGuessNumber(){
    winnerScore++ ;
    message.textContent = `You won ${winnerScore} round`;
    highScore.textContent = winnerScore;
    number.textContent = newNumber;
    body.style.backgroundColor = "green";
}


function stopScore(){
    if( score <= 0){
        message.textContent = "Try again play"
        newScore.textContent = 0;
    }
}


function tryAgain(){
    again.addEventListener('click',(e)=>{
        newNumber = Math.trunc(Math.random()*30)+1;
        number.value = newNumber;
        number.textContent = "?";
        newScore.textContent = score;
        body.style.backgroundColor = "#575454";
        guess.value = '';
    })
 }
tryAgain();

 function wonPlay(){
    if(winnerScore === 5){
        highScore.textContent = winnerScore;
        message.textContent = "You won, congratulations";
        }
 }


function calcHighScore(){
    again.addEventListener('click',(e)=>{
        if(winnerScore === 5){
            highScore.textContent = 0;
            message.textContent = "Start guessing...";
            winnerScore = 0;
          } 
})
}
