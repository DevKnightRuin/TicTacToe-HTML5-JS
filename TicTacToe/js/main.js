const playerGamePiece = "img\goku.png";
const cpuGamePiece = "img\vegeta.png"
let activePlayer;
let activeGamePiece;

// event listeners for each tile
    //use for each to loop over the html elements for refactoring 
// gamestate - whos turn is currently active (use Math.rondom() to see who gets higher Number. 0-1)- active user gets image on board
// decide who goes first

//**********************  GAME LOOP  ********************* */
function PlayGame(){
    let playing = true;

    while(playing)
    {
        
        while(activePlayer == "Player"){
            PlayerTurn();
            
            
        }
        
        while(activePlayer == "CPU"){
            cpuTurn();
            

    }
    
    //check to see if the game is over
        if(gameOver == true)
            playing = false;
    }

}

//Add score streak to local storage

//input modal box with start a new game??
if(newgame ==true){
    resetGameBoard();
    PlayGame();
}


//********************  Functions  *********************** */


function PlayerTurn(){
//ACtivate player input
    document.querySelector('gameBoard').classList.add('active');
    document.querySelector('gameBoard').classList.remove('inactive');

//show display that it is the players move - 
    document.querySelector('p1Activity').innerHTML = "Player is thinking...";
//set active game piece to be goku
    activeGamePiece = playerGamePiece
}


function cpuTurn(){
//disable event listeners to prevent player from doing anything while cpu takes their turn
     document.querySelector('gameBoard').classList.remove('active');
     document.querySelector('gameBoard').classList.add('inactive');
     
     //set active game piece to vegeta
     activeGamePiece = cpuGamePiece;
     
//show display that it is the cpu's turn to move move - and
//add delay timer to mimick someone thinking - display cpun is thinking que for 3 seconds
    setTimeout( () => {console.log("Cpu is thinking...")}, 3000)

    //decide how computer moves

// if tile  =  1 0 - 
//             - 1 0 
//             - - -
        
}
            
function checkForWinner(){
    //need condition to test if 3 of the same input is connected
    //Check all rows for same image
    //Check all columns for same image
    //check diagnols
}

function p1Victory(){
    alert("Player 1 wins");
}

function p2Victory(){
    alert("CPU Wins");
}

function resetGameBoard(){
    //clear all iamges on board
}
