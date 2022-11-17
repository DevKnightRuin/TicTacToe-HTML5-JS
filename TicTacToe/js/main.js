//initialize game pieces
const playerGamePiece = "img\goku.png";
const cpuGamePiece = "img\vegeta.png"
// let isFirstMove = false;  //Variable only matters to cpu if making first move
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


var activePlayer = ""; //Player ready to make a move
var activeGamePiece; //The placemarker for the active player

//Arrays of Rows and columns for fast vitory check - don't need to remake every time we check
const arrRowTop = [ tile1, tile2, tile3]
const arrRowMid = [ tile4, tile5, tile6]
const arrRowBot = [ tile7, tile8, tile9]

const arrColTop = [ tile1, tile4, tile7]
const arrColMid = [ tile2, tile5, tile8]
const arrColBot = [ tile3, tile6, tile9]

const arrDiagLeft =  [ tile1, tile5, tile9]
const arrDiagRight = [ tile7, tile5, tile3]

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
//array of availble places.  Maybe remove eventlistener for the played tile to prevent player from causing an error
const arrPlayableTiles = [ tile1, tile2, tile3, tile4, tile5, tile6, tile7, tile8, tile9 ]


// decide who goes first

//**********************  GAME LOOP  ********************* */
whoGoesFirst();
PlayerTurn(); 
cpuTurn();


//Add score streak to local storage


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

    //no check needed since cpu will place their piece at the end of this function call

    //disable event listeners to prevent player from doing anything while cpu takes their turn
     document.querySelector('gameBoard').classList.remove('active');
     document.querySelector('gameBoard').classList.add('inactive');
     
    //set active game piece to vegeta
     activeGamePiece = cpuGamePiece;
     
    //show display that it is the cpu's turn to mmove
    document.querySelector('').innerHTML = "Cpu is thinking..."

    //add delay timer to mimick someone thinking
    setTimeout( await, () => { }, 2000)

    cpuMove();    
    PlayerTurn();
}
//*****Game Action Functions*****

function cpuMove(){  
    cpuRandomMove();
    //decide how computer moves
    // if tile  =  1 0 - 
    //             - 1 0 
    //             - - -
    //If player1 has 2 elements and the last one is empty, priotitize that spot
}

function cpuRandomMove(){
    let rand = getRandomInt(0, arrPlayableTiles.length -1); //Choose a random loation based on the avaialble tiles
    arrPlayableTiles[rand].src = activeGamePiece; //get the info from playable tile and apply game piece to it
    arrPlayableTiles.shift(rand); //remove the tile we just played from the playable array
}

function whoGoesFirst(){
    if(Math.random() < .5){
        activePlayer = "player";
        PlayerTurn();
    }
    else{
    activePlayer = "cpu";
    cpuTurn()
    }
}

function applyGamePiece(){
        this.src = activeGamePiece; //need to access the tile that queued the event
        arrPlayableTiles.shift(this);
        cpuTurn();
}

function clearGameBoard(){
    //loop through each row and clear the board
    arrRowTop.forEach( (element) => element.src = "");
    arrRowMid.forEach( (element) => element.src = "");
    arrRowBot.forEach( (element) => element.src = "");
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
            // playing = false;
            // activePlayer = ""; //disable player to prevent going back into the turn loops
        }
        else if(element.every(p2Winner)){
            p2Victory();
            // playing = false;
            // activePlayer = ""; //disable player to prevent going back into the turn loops
        }
    }))
}

        //*****End Game functions*****

function p1Victory(){
    alert("Player 1 wins");
    //disable inputs
    resetGameBoard();//restart
}

function p2Victory(){
    alert("CPU Wins"); 
    //disable inputs
    resetGameBoard();
}

function resetGameBoard(){
    //clear all iamges on board
    clearGameBoard();

    //setup the players
    whoGoesFirst();

    //Lets play Tic Tac Toe
    PlayGame();
}

        //*****Utility *****/

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}