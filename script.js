//create computer turn computerPlay
//write a function to play single round playRound() - two parameters playerSelection computerSelection
//write new function game() play 5 rounds - use conole.log()
//use prompt() to get input from user


 
function computerPlay(){    //computer choose randomly between rock paper scissors, use randome number 1 to 3 and link to
    let randomNumber = Math.floor(Math.random() * 3); //create number 1 through 3
    let computerChoice = 
    (randomNumber == 1) ? 'rock':
    (randomNumber == 2) ? 'paper':
    'scissors';
    //console.log(computerChoice);
    return computerChoice;  
}

function caseFix(toFix){
    firstLetter = toFix.substr(0,1);    //get first letter 
    firstLetter = firstLetter.toUpperCase(); //convert to upper case
    fixedCase = firstLetter + toFix.substr(1); // add together
    return fixedCase;
}

function displayResults(computerMessage, message){     //displays messages to DOM
    document.getElementById("computerplayer").innerText = computerMessage;
    document.getElementById("message").innerText = message;
    document.getElementById("gamesplayed").innerText = gamesPlayed + "/5";
}

function gameRoutine(player){    //compare results and decide winner 
      
    gamesPlayed++;
    
    let message = " ";    
    let computer = computerPlay();
    let computerMessage = "I choose " +  caseFix(computer) + "."; 

    if (player == computer){        //check game tied
        message = "We Tied! We both chose " + caseFix(player) + ".";
    }
    else{           //check if game has been won        
        let gameWin =
                        (player === 'rock' && computer === 'scissors') ? true:
                        (player === 'paper' && computer === 'rock') ? true:
                        (player === 'scissors' && computer === 'paper') ? true:
                        false;
            if(gameWin === true){       //game won
                gamesWon = gamesWon + 1;
                message = "You Win! " + caseFix(player) + " beats " + caseFix(computer) + "!"; 
            }
            else{    //game lost
                message = "You Lose! " + caseFix(computer) + " beats " + caseFix(player) + "!";
            }
    }
    
    displayResults(computerMessage, message);
}

function playGame(player){  //checks if you've played over 5 games and if you won enough times
    
    if(gamesPlayed >= 5){
    return;
    }
    else{
        console.log(gamesWon);
        gameRoutine(player);

        if(gamesPlayed >= 5 ){
            message =   (gamesWon >=3) ? "You Won " + gamesWon + " of 5 games. You're the Winner!":
                        "You Won " + gamesWon + " of 5 games. You lose!";
            let computerMessage = " ";
            displayResults(computerMessage, message, gamesPlayed);
        }
    }
}

function resetGame(){
    gamesPlayed = 0;
    gamesWon = 0

    document.getElementById("computerplayer").innerText = "Let's play a game, best of five.";
    document.getElementById("message").innerHTML = "&nbsp"; 
    document.getElementById("gamesplayed").innerText = gamesPlayed + "/5";
}

const rock = document.querySelector('#rock');           //add variables for all buttons
const scissors = document.querySelector('#scissors');
const paper  = document.querySelector('#paper');
const reset = document.querySelector('#reset');

let gamesPlayed = 0;
let gamesWon = 0;


rock.addEventListener('click', () => {
    playGame("rock")
   
    });
scissors.addEventListener('click', () => {
    playGame("scissors")
  
    });
paper.addEventListener('click', () => {
    playGame("paper")

    });

reset.addEventListener('click', () => {
    resetGame()
    });    

