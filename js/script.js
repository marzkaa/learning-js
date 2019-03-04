'use strict'

var buttons = document.querySelectorAll(".player-move");
var output = document.getElementById('output');
var rock = document.getElementById('rock');
var paper = document.getElementById('paper');
var scissors = document.getElementById('scissors');
var reset = document.getElementById('reset');
var modalContent = document.querySelector(".modal-content")
var closeButtons = document.querySelector('.modal .close');
var modals = document.querySelector('.modal');
var modalOverlay = document.querySelector('#modal-overlay');
var table = document.querySelector('.table');


var state = {
    roundWinner: "",
    rounds: 0,
    gameRounds: 0,
    userScore: 0,
    computerScore: 0,  
    lastWinner: "",
    userChoice: "",
    computerChoice: "",
    progress: [],
    winner: "",
}

initialize ();


function initialize () {
    disableButtons(true);
    registerListeners();
}

function registerListeners() {
    reset.addEventListener('click', function() {
        state.userScore = 0;
        state.computerScore = 0;
        state.gameRounds++;
        disableButtons(false);
        roundsLimit();  
        output.classList.remove('hide');
        document.getElementById('result').classList.remove('hide');
        document.getElementById('limit').classList.remove('hide');
        output.innerHTML = "";
        result.innerHTML = "";
    });
    for (var i = 0; i < buttons.length; i++) { 
        buttons[i].addEventListener("click", function () {
            state.userChoice = this.getAttribute("data-move"); 
            startSingleRound(state.userChoice);
        });
    }
};

function disableButtons(state) {
    rock.disabled = state;
    paper.disabled = state;   
    scissors.disabled = state;    
};

function roundsLimit() {
     
    state.rounds = parseInt(window.prompt('How many round would you play?'));
    if (state.rounds > 0) {
       limit.innerHTML = 'We will play up to ' + state.rounds + ' wins';
    }
    else if (isNaN(state.rounds) || state.rounds <= 0) {
       limit.innerHTML = 'Please type correct number of rounds';
    }
    return state.rounds ;
};

function computerChoice() {
    var compChoice = Math.floor(Math.random() * 3 + 1);
    if (compChoice === 1) {
        compChoice = 'rock';
    } 
    else if (compChoice === 2) {
        compChoice = 'paper';    
    } 
    else {
        compChoice = 'scissors';
    }
    state.computerChoice = compChoice;
    return compChoice;
};



function compare(userChoice, compChoice) {
    if (userChoice === compChoice) {
        state.roundWinner = 'NO ONE WINS this round:';
        state.lastWinner = "it \'s tie";
    }
    else if ((userChoice === "rock" && compChoice === "scissors") || 
        (userChoice === "paper" && compChoice === "rock")||
        (userChoice === "scissors" && compChoice === "paper")) {
        state.roundWinner = 'YOU WON:';
        state.userScore++;
        state.lastWinner = "player";          
    } 
    else {
        state.roundWinner = 'COMPUTER WON this round:';
        state.computerScore++;
        state.lastWinner = "computer";
        
    }
    return state.roundWinner ;   
};


function clearBox(idElement) {
    idElement.innerHTML= "";
};

function roundResultDisplay(roundWinner) {
    output.insertAdjacentHTML('afterbegin', roundWinner);
    
};

function setScore() {
    document.getElementById('result').innerHTML = (state.userScore + ' - ' + state.computerScore);   
};


function gameIsOver() {
    if (state.userScore === state.rounds) {  
        showHideModalContent()     
        state.winner = 'YOU WON THE ENTIRE GAME!!!';   
    }
    else if (state.computerScore === state.rounds) {
        showHideModalContent()
        state.winner = 'YOU LOSE, COMPUTER WAS BETTER!!!';        
    }
    function hideModal(event) {
        event.preventDefault();
        modalOverlay.classList.remove('show');
    };      
    for (var i = 0; i < closeButtons.length; i++) {
        closeButtons[i].addEventListener('click', hideModal);      
    }
    modalOverlay.addEventListener('click', hideModal);
    
    for (var i = 0; i < modals.length; i++) {
        modals[i].addEventListener('click', function(event) {
                event.stopPropagation();
        });
    }
    return modalContent.innerHTML = state.winner;
}

function showHideModalContent() {
    modalOverlay.classList.add("show");
    modals.classList.add('show');   
    output.classList.add('hide');
    document.getElementById('result').classList.add('hide');
    document.getElementById('limit').classList.add('hide');
    disableButtons(true);
    
}

function updateState () {
    state.progress.push( {
        gameRounds: state.gameRounds,
        userChoice: state.userChoice,
        computerChoice: state.computerChoice,
        lastWinner: state.lastWinner,
        userScore: state.userScore,
        computerScore: state.computerScore,
        
    });
};

function generateSummary() {
    var summary = '<table> \
                        <thead> \
                            <tr> \
                                <th>Number of rounds:</th> \
                                <th>Player\'s move:</th> \
                                <th>Computer\'s move:</th> \
                                <th>The winner</th> \
                                <th>Game results</th>\
                            </tr> \
                        </thead> \
                    <tbody>';

    for (var i=0; i < state.progress.length; i++) {
        summary += '<tr> \
        <td>' + state.progress[i].gameRounds + '</td> \
        <td>' + state.progress[i].userChoice + '</td> \
        <td>' + state.progress[i].computerChoice + '</td> \
        <td>' + state.progress[i].lastWinner + '</td> \
        <td>' + state.progress[i].userScore + ' - ' + state.progress[i].computerScore + '</td> \
        </tr>';
    }
    summary += '</tbody></table>';
    table.innerHTML = summary
};


function startSingleRound(userChoice) {   
    var compChoice = computerChoice();
    state.roundWinner = compare(userChoice,compChoice);
    clearBox(output);
    roundResultDisplay(state.roundWinner);
    output.insertAdjacentHTML('beforeend', ' You chose '+ userChoice + ' and computer chose ' + compChoice +'<br>' ); 
    setScore();
    gameIsOver();
    updateState();
    generateSummary();  
};