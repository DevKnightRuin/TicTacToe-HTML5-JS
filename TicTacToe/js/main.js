//initialize game pieces
const playerGamePiece = "img/goku.png";
const cpuGamePiece = "img/vegeta.png";

// let isFirstMove = false;  //Variable only matters to cpu if making first move
//Initialize event listeners with 1-9 top left = 1, left to right and top to bottom order
const tile1 = document.querySelector('#block_0');
tile1.addEventListener('click', applyGamePiece);
const tile2 = document.querySelector('#block_1')
tile2.addEventListener('click', applyGamePiece)
const tile3 = document.querySelector('#block_2')
tile3.addEventListener('click', applyGamePiece)
const tile4 = document.querySelector('#block_3')
tile4.addEventListener('click', applyGamePiece)
const tile5 = document.querySelector('#block_4')
tile5.addEventListener('click', applyGamePiece)
const tile6 = document.querySelector('#block_5')
tile6.addEventListener('click', applyGamePiece)
const tile7 = document.querySelector('#block_6')
tile7.addEventListener('click', applyGamePiece)
const tile8 = document.querySelector('#block_7')
tile8.addEventListener('click', applyGamePiece)
const tile9 = document.querySelector('#block_8')
tile9.addEventListener('click', applyGamePiece)


var activePlayer = ""; //Player ready to make a move
var activeGamePiece = ""; //The placemarker for the active player

//Arrays of Rows and columns for fast victory check - don't need to remake every time we check
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
let arrPlayableTiles;
//array of availble places.  Maybe remove eventlistener for the played tile to prevent player from causing an error
function setPlayableTiles(){ 
    arrPlayableTiles = [ tile1, tile2, tile3, tile4, tile5, tile6, tile7, tile8, tile9 ]
}


//**********************  GAME LOOP  ********************* */
resetGameBoard();



//Add score streak to local storage


//********************  Functions  *********************** */

            // *****Game flow functions *****
function whoGoesFirst(){
    if(Math.random() < .5){
        activePlayer = "player";
        playerTurn();
    }
    else{
    activePlayer = "cpu";
    cpuTurn();
    }
}
function playerTurn(){
    //set active game piece
    activeGamePiece = playerGamePiece; 
}
function cpuTurn(){
    //set active game piece to vegeta if it is the cpu's turn.  JS scripts execute once on load, check to see if cpu is active to prevent issus
    if(activePlayer == 'cpu'){
        activeGamePiece = cpuGamePiece;
        cpuRandomMove();    
        checkForWinner();
        activePlayer = 'player'
        playerTurn();
    }
}
//*****Game Action Functions*****


function cpuRandomMove(){
    let rand = getRandomInt(0, arrPlayableTiles.length -1); //Choose a random loation based on the avaialble tiles
    // console.log(rand);
    arrPlayableTiles[rand].src = activeGamePiece; //get the info from playable tile and apply game piece to it
    arrPlayableTiles[rand].removeEventListener("click", applyGamePiece) //remove eventListener after cpu plays
    arrPlayableTiles.splice(rand, 1) 
    console.log(arrPlayableTiles)
    //return an array without the blank indexes
}

function applyGamePiece(){
    //alert('selected');
    console.log(this);
    if(arrPlayableTiles.includes(this)){

        this.src = activeGamePiece; //need to access the tile that queued the event
        this.removeEventListener("click", applyGamePiece) //remove eventListener after Player1
        let index = arrPlayableTiles.indexOf(this); 
        arrPlayableTiles.splice(index, 1)
        console.log(arrPlayableTiles)
        checkForWinner();
        
        activePlayer = 'cpu';
        cpuTurn();
    }

}

function checkForWinner(){
    //need condition to test if 3 of the same input is connected
    // Array.allEqual() checks all elements in the array if even
    isWinner = false;
    const p1Winner = (currentValue) => currentValue.getAttribute('src') == playerGamePiece;
    const p2Winner = (currentValue) => currentValue.getAttribute('src') ==  cpuGamePiece;
    
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
    document.getElementById('left-arrow').style.display = 'block'
    document.querySelector('#winnerDisplay').innerHTML = "WINNER";
    // alert("Player 1 wins");
    //disable inputs
    arrPlayableTiles = [];
}
function p2Victory(){
    document.getElementById('right-arrow').style.display = 'block'
    document.querySelector('#winnerDisplay').innerHTML = "WINNER";
    // alert("CPU Wins"); 
    arrPlayableTiles = [];
}
function resetGameBoard(){

    //loop through each row and clear the board
    arrRowTop.forEach( (element) => {
        element.src = "";
        element.addEventListener('click', applyGamePiece);
    });
    arrRowMid.forEach( (element) => {
        element.src = ""
        element.addEventListener('click', applyGamePiece);
    });
    arrRowBot.forEach( (element) => { 
        element.src = ""
        element.addEventListener('click', applyGamePiece);
    });
    document.getElementById('right-arrow').style.display = 'none'
    document.getElementById('left-arrow').style.display = 'none'
    document.querySelector('#winnerDisplay').innerHTML = "";
    setPlayableTiles();
    whoGoesFirst();
}

// function resetGameBoard(){
//     //clear all iamges on board
//     clearGameBoard();

//     //setup the players
//     whoGoesFirst(); 
// }
        //*****Utility *****/

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}