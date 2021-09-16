
const darkModeToggle = document.querySelector("#darkModeTog");
let imgChoice = document.querySelector("#imgChoice");
let imgCompChoice = document.querySelector("#imgCompChoice");
let playerChoices = document.querySelectorAll("button");
let rock = playerChoices[0];
let paper = playerChoices[1];
let scissors = playerChoices[2];
console.log(playerChoices);
let resetBtn = document.querySelector(".tab");

darkModeToggle.addEventListener("click", darkMode);
function darkMode() {
    var element = document.body;
    element.classList.toggle("dark");
  } 

//Status
let results = document.querySelector("#result");
let gameStatus = document.querySelector("#gameStatus");

//Track wins and losses
let wins = document.querySelector('#wins');
let losses = document.querySelector('#losses');
let draws = document.querySelector('#draws');

//choice display and computer Choice display
let myChoice = document.querySelector("#myChoice");
let computerChoice = document.querySelector("#compChoice");

//Computer Choice code
let compChoices = ["Rock", "Paper", "Scissors"];
//let compChoice = compChoices[Math.floor(Math.random()*compChoices.length)];
function compChoice(){
    let choice = compChoices[Math.floor(Math.random()*compChoices.length)];
    return choice;
}
//computerChoice.innerHTML =compChoice;

//buttons with eventListeners
rock.addEventListener("click", playRock);
paper.addEventListener("click", playPaper);
scissors.addEventListener("click", playScissors);
resetBtn.addEventListener("click", resetChoice);

function playRock(){
    myChoice.innerHTML = rock.innerHTML;
    myImgChoice();
    computerChoice.innerHTML = compChoice();
    autoChoice()
   checkForWin();
}  
function playPaper(){
    myChoice.innerHTML = paper.innerHTML;
    myImgChoice();
    computerChoice.innerHTML = compChoice();
    autoChoice()
    checkForWin();
} 
function playScissors(){
    myChoice.innerHTML = scissors.innerHTML;
    myImgChoice();
    computerChoice.innerHTML = compChoice();
    autoChoice()
    checkForWin();
} 

function myImgChoice(){
    if(myChoice.innerHTML === "Rock"){
        imgChoice.setAttribute("src", "images/rock.png");
    } else if(myChoice.innerHTML === "Paper"){
        imgChoice.setAttribute("src", "images/paper.png");
    } else if(myChoice.innerHTML === "Scissors"){
        imgChoice.setAttribute("src", "images/scissors.png");
    }
    
}
function autoChoice(){
    if(computerChoice.innerHTML === "Rock"){
        imgCompChoice.setAttribute("src", "images/rock.png");
    } else
    if(computerChoice.innerHTML === "Paper"){
        imgCompChoice.setAttribute("src", "images/paper.png");
    }
    else
    if(computerChoice.innerHTML === "Scissors"){
        imgCompChoice.setAttribute("src", "images/scissors.png");
    }
}

//Check for a win, a loss or a draw
let winCount =0;
let lossCount = 0;
let drawCount = 0;
let maxCount = 10;
function checkForWin(){
      
    if((myChoice.innerHTML === "Rock" && computerChoice.innerHTML === "Scissors") || (myChoice.innerHTML === "Paper" && computerChoice.innerHTML === "Rock") || (myChoice.innerHTML === "Scissors" && computerChoice.innerHTML === "Paper") ){
      
        results.innerHTML = "You Win!!";
        winCount += 1;
        wins.innerHTML= winCount;
        gameOver(winCount);
    }else if( myChoice.innerHTML === computerChoice.innerHTML) {
        results.innerHTML = "Game is Tied!!";
        drawCount += 1;
        draws.innerHTML = drawCount;
    } else{
        results.innerHTML = "You lose!!";
        lossCount += 1;
        losses.innerHTML= lossCount;
        gameOver(lossCount);
    }
}

// Check if game is over
function gameOver(count){
    if(count >= maxCount){
        gameStatus.innerHTML = "GAME OVER!!";
        rock.removeEventListener("click", playRock);
        paper.removeEventListener("click", playPaper);
        scissors.removeEventListener("click", playScissors);
    }/*else {
        gameStatus.innerHTML = " ";
    }*/
}
//reset game          
function resetChoice(){
   
   myChoice.innerHTML = " ";
   computerChoice.innerHTML = " ";
   results.innerHTML = " ";
   wins.innerHTML = " ";
   gameStatus.innerHTML = " ";
   winCount = 0;
   lossCount = 0;
   drawCount = 0;
   losses.innerHTML = " ";
   draws.innerHTML = " ";
   imgChoice.removeAttribute("src");
   imgCompChoice.removeAttribute("src");
   rock.addEventListener("click", playRock);
   paper.addEventListener("click", playPaper);
   scissors.addEventListener("click", playScissors); 
}





