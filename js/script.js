'use strict'

var userScore;
var computerScore;
var rounds;
var roundWinner;
var output = document.getElementById('output');
var rock = document.getElementById('rock');
var paper = document.getElementById('paper');
var scissors = document.getElementById('scissors');
var reset = document.getElementById('reset');

initialize ();

function initialize () {
    disableButtons(true);
    registerListeners();
}

function registerListeners(){
    reset.addEventListener('click', function() {
    userScore = 0;
    computerScore = 0;
    disableButtons(false);
    roundsLimit();  
    output.innerHTML = "";
    result.innerHTML = "";
    gameResult.innerHTML = "";
});

rock.addEventListener('click', function() {
    var userChoice = 'ROCK';
    startPlay(userChoice);
});
paper.addEventListener('click', function() {
    var userChoice = 'PAPER';
    startPlay(userChoice);
});
scissors.addEventListener('click', function() {
    var userChoice ='SCISSORS';
    startPlay(userChoice);
});
};

function disableButtons(state) {
    rock.disabled = state;
    paper.disabled = state;   
    scissors.disabled = state;
};

function roundsLimit() {
    
    rounds = parseInt(window.prompt('How many round would you play?'));
    if (rounds > 0) {
       limit.innerHTML = 'We will play up to ' + rounds + ' wins';
    }
    else if (isNaN(rounds) || rounds <= 0) {
       limit.innerHTML = 'Please type correct number of rounds';
   }
    return rounds;
};



function computerChoice() {
    var compChoice = Math.floor(Math.random() * 3 + 1);
    if (compChoice === 1) {
        compChoice = 'ROCK';
    } 
    else if (compChoice === 2) {
        compChoice = 'PAPER';
    } 
    else {
        compChoice = 'SCISSORS';
    }
    return compChoice;
};



function compare(userChoice, compChoice) {
    if (userChoice === compChoice) {
    roundWinner = 'NO ONE WINS this round:';
    }
    else if ((userChoice === "rock" && compChoice === "scissors") || 
        (userChoice === "paper" && compChoice === "rock")||
        (userChoice === "scissors" && compChoice === "paper")) {
        roundWinner = 'YOU WON:';
        userScore++;
    } 
    else {
        roundWinner = 'COMPUTER WON this round:';
        computerScore++;
    }
    return roundWinner ;
    
};


function clearBox(idElement) {
    idElement.innerHTML= "";
};

function roundResultDisplay(roundWinner) {
    output.insertAdjacentHTML('afterbegin', roundWinner);
};

function setScore() {
    document.getElementById('result').innerHTML = (userScore + ' - ' + computerScore);
};


function gameIsOver() {
    if (userScore === rounds) {
        gameResult.innerHTML = 'YOU WON THE ENTIRE GAME!!!';
        disableButtons(true);
    }
    else if (computerScore === rounds) {
        gameResult.innerHTML = 'YOU LOSE, COMPUTER WAS BETTER!!!';
        disableButtons(true);
    }
};


function startPlay(userChoice) {
    var compChoice = computerChoice();
    roundWinner = compare(userChoice,compChoice);
    clearBox(output);
    roundResultDisplay(roundWinner);
    output.insertAdjacentHTML('beforeend', ' You chose '+ userChoice + ' and computer chose ' + compChoice +'<br>' ); 
    setScore();
    gameIsOver();
        
};