'use strict'


var rounds;
var roundWinner;
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

var params = {
    gameRounds: 0,
    userScore: 0,
    computerScore: 0,  
    winerIs: "",
    userChoice: "",
    computerMove: "",
    progress: [],
}

initialize ();


function initialize () {
    disableButtons(true);
    registerListeners();
}

function registerListeners(){
    reset.addEventListener('click', function() {
    params.userScore = 0;
    params.computerScore = 0;
    params.gameRounds++;
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
            params.userChoice = this.getAttribute("data-move"); 
        startPlay(params.userChoice);
        });
    }
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
    return rounds ;

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

    return compChoice;
};



function compare(userChoice, compChoice) {
    if (userChoice === compChoice) {
    roundWinner = 'NO ONE WINS this round:';
    params.winerIs = "it /'s tie";
    }
    else if ((userChoice === "rock" && compChoice === "scissors") || 
        (userChoice === "paper" && compChoice === "rock")||
        (userChoice === "scissors" && compChoice === "paper")) {
        roundWinner = 'YOU WON:';
        params.userScore++;
        params.winerIs = "player";
           
    } 
    else {
        roundWinner = 'COMPUTER WON this round:';
        params.computerScore++;
        params.winerIs = "computer";
        
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
    document.getElementById('result').innerHTML = (params.userScore + ' - ' + params.computerScore);   
};


function gameIsOver() {
    if (params.userScore === rounds) {
        
        modalOverlay.classList.add("show");
        modals.classList.add('show');
        output.classList.add('hide');
        document.getElementById('result').classList.add('hide');
        document.getElementById('limit').classList.add('hide');
        modalContent.innerHTML = 'YOU WON THE ENTIRE GAME!!!';   
        disableButtons(true);

    }
    else if (params.computerScore === rounds) {
        
        modalOverlay.classList.add("show");
        modals.classList.add('show');
        output.classList.add('hide');
        document.getElementById('result').classList.add('hide');
        document.getElementById('limit').classList.add('hide');
        
        modalContent.innerHTML = 'YOU LOSE, COMPUTER WAS BETTER!!!';
        
        disableButtons(true);
    
    }
    function hideModal(event) {
        event.preventDefault();
        modalOverlay.classList.remove('show');
    };
      
    for(var i = 0; i < closeButtons.length; i++){
        closeButtons[i].addEventListener('click', hideModal);
        
    }
    modalOverlay.addEventListener('click', hideModal);
    
    for(var i = 0; i < modals.length; i++){
        modals[i].addEventListener('click', function(event){
                event.stopPropagation();
        });
    }
    
}

params.progress.push({
    gameRounds: params.gameRounds,
    userChoice: params.userChoice,
    computerMove: params.computerMove,
    winerIs: params.winerIs,
    userScore: params.userScore,
    computerWin: params.computerScore,
    
});

var summary = '<table> \
                <thead> \
                    <tr> \
                        <th>Number of rounds:</th> \
                        <th>Players move:</th> \
                        <th>Computers move:</th> \
                        <th>The winner</th> \
                        <th>Game rasults</th>\
                    </tr> \
                </thead> \
                <tbody>';

                for (var i=0; i < params.progress.length; i++) {
                    summary += '<tr> \
                        <td>' + params.progress[i].gameRounds + '</td> \
                        <td>' + params.progress[i].userChoice + '</td> \
                        <td>' + params.progress[i].computerMove + '</td> \
                        <td>' + params.progress[i].winerIs + '</td> \
                        <td>' + params.progress[i].userScore + ' - ' + params.progress[i].computerScore + '</td> \
                    </tr>';
                }

                summary += '</tbody></table>';

                table.innerHTML = summary

function startPlay(userChoice) {
    
    var compChoice = computerChoice();
    roundWinner = compare(userChoice,compChoice);
    clearBox(output);
    roundResultDisplay(roundWinner);
    output.insertAdjacentHTML('beforeend', ' You chose '+ userChoice + ' and computer chose ' + compChoice +'<br>' ); 
    setScore();
    gameIsOver();
       
    
    
     
};