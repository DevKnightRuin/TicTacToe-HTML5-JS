//initialize game pieces
const playerGamePiece = "img\goku.png";
const cpuGamePiece = "img\vegeta.png"

//Initialize event listeners with 1-9 top left = 1, left to right and top to bottom order
const tile1 = document.querySelector('') = addEventListener('click', applyGamePiece)
const tile2 = document.querySelector('') = addEventListener('click', applyGamePiece)
const tile3 = document.querySelector('') = addEventListener('click', applyGamePiece)
const tile4 = document.querySelector('') = addEventListener('click', applyGamePiece)
const tile5 = document.querySelector('') = addEventListener('click', applyGamePiece)
const tile6 = document.querySelector('') = addEventListener('click', applyGamePiece)
const tile7 = document.querySelector('') = addEventListener('click', applyGamePiece)
const tile8 = document.querySelector('') = addEventListener('click', applyGamePiece)
const tile9 = document.querySelector('') = addEventListener('click', applyGamePiece)


let activePlayer;
let activeGamePiece;

//Arrays of Rows and columns for fast vitory check - don't need to remake every time we check
// event listeners for each tile
const arrRowTop = [ , , ]
const arrRowMid = [ , , ]
const arrRowBot = [ , , ]

const arrColTop = [ , , ]
const arrColMid = [ , , ]
const arrColBot = [ , , ]

const arrDiagLeft = [ , , ]
const arrDiagRight = [ , , ]

const arrTiles = [
    arrRowTop, 
    arrRowMid, 
    arrRowBot, 
    arrColTop, 
    arrColMid, 
    arrColBot, 
    arrDiagLeft,
    arrDiagRight
]


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

            // *****Game flow functions *****

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
    document.querySelector('').innerHTML = "Cpu is thinking..."

    //add delay timer to mimick someone thinking - display cpun is thinking que for 3 seconds
    setTimeout( () => { }, 3000)

    //decide how computer moves
// if tile  =  1 0 - 
//             - 1 0 
//             - - -
        
}
        //*****Game Action Functions*****

function whoGoesFirst(){
    if(Math.random() < .5)
        activePlayer = "p1"
    else
        activePlayer = "cpu"
}

function applyGamePiece(){
    if(activePlayer == "p1"){

    }
    else{

    }

}


function checkForWinner(){
    //need condition to test if 3 of the same input is connected
    // Array.allEqual() checks all elements in the array if even
    isWinner = false;
    const p1Winner = (currentValue) => currentValue = playerGamePiece;
    const p2Winner = (currentValue) => currentValue = cpuGamePiece;
    
    //Check all rows for same image
    //Check all columns for same image
    //check diagnols
    arrTiles.forEach( (element => {
        if(element.every(p1Winner)){
            p1Victory();
        }
        else if(element.every(p2Winner)){
            p2Victory();
        }
    }))

}


        //*****End Game functions*****

function p1Victory(){
    alert("Player 1 wins");
    //disable inputs
}

function p2Victory(){
    alert("CPU Wins"); 
    //disable inputs
}

function resetGameBoard(){
    //clear all iamges on board
    //enable input unless cpu turn
}
