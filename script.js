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


function playerSelection(playerChoice){     //get user selection
    playerChoice = playerChoice.toLowerCase();
    //console.log(playerChoice);
    return playerChoice;
}

function caseFix(toFix){
    firstLetter = toFix.substr(0,1);    //get first letter 
    firstLetter = firstLetter.toUpperCase(); //convert to upper case
    fixedCase = firstLetter + toFix.substr(1); // add together
    return fixedCase;
}

function playGame(player){    //compare results and decide winner 
    player = playerSelection(player);
    let message = "";
    let computer = computerPlay();
    
    if (player == computer){        //check game tied
        message = "You Tied! you both chose " + caseFix(player) + ".";
    }
    else{           //check if game has been won        
        let gameWin =
        (player === 'rock' && computer === 'scissors') ? true:
        (player === 'paper' && computer === 'rock') ? true:
        (player === 'scissors' && computer === 'paper') ? true:
        false;
            if(gameWin === true){     //game won
                message = "You Win! " + caseFix(player) + " beats " + caseFix(computer) + "!"; 
            }
            else{    //game lost
                message = "You Lose! " + caseFix(computer) + " beats " + caseFix(player) + "!";
            }
    }
return message;   
}

function wordCheck(message){
    let errorCheck = true;
    while(errorCheck){
        console.log("Invalid Input");
        errorCheck = (message === 'rock' || message === 'paper' || message === 'scissors') ? false : true; //check if user put in proper word
        if(errorCheck === true)
        {
        message = prompt("Invalid input please use rock, paper, or scissors");    
        }
        if(message === null){break;}

    }
    return message; 
}

function game(player){
    let n = 0;
    let message = ""

    while (n < 5){
        message = prompt("Please choose rock, paper, or scissors");
        message = wordCheck(message);
        message = playGame(message);        
        console.log(message);       
        n++;
    }
    
}
game(); //start game loop
