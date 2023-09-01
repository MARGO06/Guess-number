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
    check.addEventListener('click',()=>{
        console.log('click')
        if(!Number(guess.value)){
            message.textContent = "Sorry, try again"
        }
        else if(newNumber < Number(guess.value)){
            message.textContent = "Try more low"
            score--;
            newScore.textContent = score;
            stopScore();
        }
        else if(newNumber > Number(guess.value)){
            message.textContent = "Try more hight"
            score--;
            newScore.textContent = score;
            stopScore();
        }
        else if(newNumber === Number(guess.value)){
            message.textContent = "You won";
            winnerScore++ ;
            highScore.textContent = winnerScore;
            body.style.backgroundColor = "green";
        }
    })
}

 guessNumber()

function stopScore(){
    if( score <= 0){
        message.textContent = "Try again play"
        newScore.textContent = 0;
    }
}
 stopScore()