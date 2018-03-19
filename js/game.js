/* 
    Orris Disney II
    Spring 2018 Front End Web Development Class
    Code Louisville Personal Project 
    Disney Portfolio
    JavaScipt for the Tic Tac Toe Game
*/



/****************************************** FUNCTION SECTION ******************************************** */


/*
 This function does the following  
    The color background of cell depending on who clicked that cell, and during the program, if a line has been detected, it will have
        winner identified on it.    The last else is for troubleshooting purpose (this should never happen, but never say never) 
*/

function changeStatusCell (position, player) {
    
    position.style.color = "white";

    if (player ==='user') {
        position.innerHTML = "<p>X</p>";
        position.style.backgroundColor = "green";
    }

    else if (player ==='computer') {
        position.innerHTML = "<p>O</p>";
        position.style.backgroundColor = "red";
    }

    else if (player === 'winner') {
        position.style.backgroundColor = "orange";
    }

    else {
        position.innerHTML = "<p>-</p>";
        position.style.backgroundColor = "purple";
    }


}



/*
 This function does the following  
    There is a player status box on bottom of game, to indicate who's turn it is,   It will change the background based 
    on who is playing currently.      The last else statement is for troubleshooting purpose 
    (this should never happen, but never say never)
 */

 
function playerTurnBox_update(player) {

    playerTurnBox.value = player;

    if (player === 'computer') {        
        playerTurnBox.style.backgroundColor = "red"; 
    }
    else if (player === 'user') {
        playerTurnBox.style.backgroundColor = "green"; 
    }
    else {
        playerTurnBox.style.backgroundColor = "purple";
    }
}   


function resetTheBoard() {

    row1col1_status = 'free';
    resetInnerBoard(row1col1);

    row1col2_status = 'free';
    resetInnerBoard(row1col2);
    
    row1col3_status = 'free';
    resetInnerBoard(row1col3);
    
    row2col1_status = 'free';
    resetInnerBoard(row2col1);

    row2col2_status = 'free';
    resetInnerBoard(row2col2);
    
    row2col3_status = 'free';
    resetInnerBoard(row2col3);

    row3col1_status = 'free';
    resetInnerBoard(row3col1);

    row3col2_status = 'free';
    resetInnerBoard(row3col2);
    
    row3col3_status = 'free';
    resetInnerBoard(row3col3);

    playerTurn = randomPlayerTurn();
    playerTurnBox_update(playerTurn);

    if (playerTurn === 'computer') {
    
        playerTurnBox.innerHTML = "computer";
        playerTurnBox.style.backgroundColor = "red"; 
       
    
        setTimeout(computerMove, 2000);
       }

}


function resetInnerBoard(rowColPosition) {
    rowColPosition.style.backgroundColor = "white";
    rowColPosition.innerHTML = "<p></p>";
}

function randomPlayerTurn() {
    
    //  Will randomly select player to start.

    // 1 is user's turn
    // 2 is computer's turn

    var playerNum = Math.floor(Math.random() * 2 + 1);
    // return playerNum;
    if (playerNum === 1) {
        return 'user';
    }
    else if (playerNum === 2) {
        return 'computer';
    }
    else {
        return 'ERROR in selecting player';
    }
}

function computerMove () {

    var possiblePosition = 0;  // check position on board to see if it is available
    var found = false;  // keep trying til find a position for computer to play
    var counter =  0 ; // how many times to search for a move, to stop while loop

    while ((found === false) && (counter < 1000)) {

        possiblePosition = Math.floor(Math.random() * 9 + 1);

        console.log('before - ' + playerTurn);
        if ((possiblePosition === 1) && (row1col1_status === 'free')){
            row1col1_status = 'computer';
            changeStatusCell(row1col1, playerTurn);
            isPlayerWinner = checkIfWinner('1', playerTurn);
            found = true;
        } 
        else if ((possiblePosition === 2) && (row1col2_status === 'free')){
            row1col2_status = 'computer';
            changeStatusCell(row1col2, playerTurn);
            isPlayerWinner = checkIfWinner('2', playerTurn);
            found = true;
        }   
        else if ((possiblePosition === 3) && (row1col3_status === 'free')){
            row1col3_status = 'computer';
            changeStatusCell(row1col3, playerTurn);
            isPlayerWinner = checkIfWinner('3', playerTurn);
            found = true;
        }   
        else if ((possiblePosition === 4) && (row2col1_status === 'free')){
            row2col1_status = 'computer';
            changeStatusCell(row2col1, playerTurn);
            isPlayerWinner = checkIfWinner('4', playerTurn);
            found = true;
        } 
        else if ((possiblePosition === 5) && (row2col2_status === 'free')){
            row2col2_status = 'computer';
            changeStatusCell(row2col2, playerTurn);
            isPlayerWinner = checkIfWinner('5', playerTurn);
            found = true;
        }   
        else if ((possiblePosition === 6) && (row2col3_status === 'free')){
            row2col3_status = 'computer';
            changeStatusCell(row2col3, playerTurn);
            isPlayerWinner = checkIfWinner('6', playerTurn);
            found = true;
        } 
        else if ((possiblePosition === 7) && (row3col1_status === 'free')){
            row3col1_status = 'computer';
            changeStatusCell(row3col1, playerTurn);
            isPlayerWinner = checkIfWinner('7', playerTurn);
            found = true;
        } 
        else if ((possiblePosition === 8) && (row3col2_status === 'free')){
            row3col2_status = 'computer';
            changeStatusCell(row3col2, playerTurn);
            isPlayerWinner = checkIfWinner('8', playerTurn);
            found = true;
        }   
        else if ((possiblePosition === 9) && (row3col3_status === 'free')){
            row3col3_status = 'computer';
            changeStatusCell(row3col3, playerTurn);
            isPlayerWinner = checkIfWinner('9', playerTurn);
            found = true;
        }     

        counter += 1;

    } 

    if (counter >= 999) {
        console.log('Counter went above 999');
    }


    playerTurn = 'user';
    playerTurnBox_update(playerTurn);

    console.log('after - ' + playerTurn);
    // playerTurn = 'user';
    // playerTurnBox.innerHTML = "<p>player's turn</p>";
    // playerTurnBox.style.backgroundColor = "green";
}

function checkIfWinner(position, player) {
/*
    This function will be ran every time a user click a box and when a computer chose a box.    It will check for all possible 
    angle to see if there is a winner.   It will check each cell status to make sure they belong to that current user and if it 
    matches all three in a row, we have a winner.    
*/

    const winner = document.getElementsByClassName('winnerBox')[0];

    console.log('position - ' + position );
    console.log('player - ' + player);

    var isPlayerWinner = false;


// ********************   Check from position 1    Row 1 column 1 ***********************************

    if (position === '1') {
        if ((row1col1_status === player) &&
            (row1col2_status === player) && 
            (row1col3_status === player)) {

                changeStatusCell(row1col1, "winner");
                changeStatusCell(row1col2, "winner");
                changeStatusCell(row1col3, "winner");

                isPlayerWinner = true;
                
        }

        else if ((row1col1_status === player) &&
        (row2col2_status === player) && 
        (row3col3_status === player)) {

            changeStatusCell(row1col1, "winner");
            changeStatusCell(row2col2, "winner");
            changeStatusCell(row3col3, "winner");

            isPlayerWinner = true;
            
        }

        else if ((row1col1_status === player) &&
        (row2col1_status === player) && 
        (row3col1_status === player)) {

            changeStatusCell(row1col1, "winner");
            changeStatusCell(row2col1, "winner");
            changeStatusCell(row3col1, "winner");

            isPlayerWinner = true;
            
        }
    }

// ********************   Check from position 2    Row 1 column 2 ***********************************

    else if (position === '2') {
        console.log("position 2");
        if ((row1col2_status === player) &&
            (row2col2_status === player) && 
            (row3col2_status === player)) {

                changeStatusCell(row1col2, "winner");
                changeStatusCell(row2col2, "winner");
                changeStatusCell(row3col2, "winner");

                isPlayerWinner = true;
                
        }

        else if ((row1col1_status === player) &&
                 (row1col2_status === player) && 
                 (row1col3_status === player)) {

                    changeStatusCell(row1col1, "winner");
                    changeStatusCell(row1col2, "winner");
                    changeStatusCell(row1col3, "winner");

                    isPlayerWinner = true;
                    
        }

    }

// ********************   Check from position 3    Row 1 column 3 ***********************************

    else if (position === '3') {
        console.log('position 3');

        if ((row1col1_status === player) &&
            (row1col2_status === player) && 
            (row1col3_status === player)) {

                changeStatusCell(row1col1, "winner");
                changeStatusCell(row1col2, "winner");
                changeStatusCell(row1col3, "winner");

                isPlayerWinner = true;
                
        }

        else if ((row3col1_status === player) &&
                 (row2col2_status === player) && 
                 (row1col3_status === player)) {

                    changeStatusCell(row3col1, "winner");
                    changeStatusCell(row2col2, "winner");
                    changeStatusCell(row1col3, "winner");

                    isPlayerWinner = true;
                    
        }

        else if ((row1col3_status === player) &&
                 (row2col3_status === player) && 
                 (row3col3_status === player)) {

                    changeStatusCell(row1col3, "winner");
                    changeStatusCell(row2col3, "winner");
                    changeStatusCell(row3col3, "winner");

                    isPlayerWinner = true;
            
        }
    }

// ********************   Check from position 4    Row 2 column 1 ***********************************

    else if (position === '4') {
        console.log('position 4');

        if ((row1col1_status === player) &&
            (row2col1_status === player) && 
            (row3col1_status === player)) {

                changeStatusCell(row1col1, "winner");
                changeStatusCell(row2col1, "winner");
                changeStatusCell(row3col1, "winner");

                isPlayerWinner = true;
                
        }

        else if ((row2col1_status === player) &&
                (row2col2_status === player) && 
                (row2col3_status === player)) {

                    changeStatusCell(row2col1, "winner");
                    changeStatusCell(row2col2, "winner");
                    changeStatusCell(row2col3, "winner");

                    isPlayerWinner = true;
                    
        }

    }

// ********************   Check from position 5    Row 2 column 2 ***********************************

    else if (position === '5') {
        console.log('position 5');

        if ((row1col1_status === player) &&
            (row2col2_status === player) && 
            (row3col3_status === player)) {

                changeStatusCell(row1col1, "winner");
                changeStatusCell(row2col2, "winner");
                changeStatusCell(row3col3, "winner");

                isPlayerWinner = true;
                
        }

        else if ((row1col2_status === player) &&
                 (row2col2_status === player) && 
                 (row3col2_status === player)) {

                    changeStatusCell(row1col2, "winner");
                    changeStatusCell(row2col2, "winner");
                    changeStatusCell(row3col2, "winner");

                    isPlayerWinner = true;
                    
        }

        else if ((row1col3_status === player) &&
                 (row2col2_status === player) && 
                 (row3col1_status === player)) {

                    changeStatusCell(row1col3, "winner");
                    changeStatusCell(row2col2, "winner");
                    changeStatusCell(row3col1, "winner");

                    isPlayerWinner = true;
            
        }

        else if ((row2col1_status === player) &&
                 (row2col2_status === player) && 
                 (row2col3_status === player)) {

                    changeStatusCell(row2col1, "winner");
                    changeStatusCell(row2col2, "winner");
                    changeStatusCell(row2col3, "winner");

                    isPlayerWinner = true;
            
        }
    }

// ********************   Check from position 6    Row 2 column 3 ***********************************

    else if (position === '6') {
        console.log('position 6');

        if ((row1col3_status === player) &&
            (row2col3_status === player) && 
            (row3col3_status === player)) {

                changeStatusCell(row1col3, "winner");
                changeStatusCell(row2col3, "winner");
                changeStatusCell(row3col3, "winner");

                isPlayerWinner = true;
                
        }

        else if ((row2col1_status === player) &&
                 (row2col2_status === player) && 
                 (row2col3_status === player)) {

                    changeStatusCell(row2col1, "winner");
                    changeStatusCell(row2col2, "winner");
                    changeStatusCell(row2col3, "winner");

                    isPlayerWinner = true;
                    
        }

    }

// ********************   Check from position 7    Row 3 column 1 ***********************************

    else if (position === '7') {
        console.log('position 7');

        if ((row1col1_status === player) &&
            (row2col1_status === player) && 
            (row3col1_status === player)) {

                changeStatusCell(row1col1, "winner");
                changeStatusCell(row2col1, "winner");
                changeStatusCell(row3col1, "winner");

                isPlayerWinner = true;
                
        }

        else if ((row1col3_status === player) &&
                 (row2col2_status === player) && 
                 (row3col1_status === player)) {

                    changeStatusCell(row1col3, "winner");
                    changeStatusCell(row2col2, "winner");
                    changeStatusCell(row3col1, "winner");

                    isPlayerWinner = true;
                    
        }

        else if ((row3col1_status === player) &&
                 (row3col2_status === player) && 
                 (row3col3_status === player)) {

                    changeStatusCell(row3col1, "winner");
                    changeStatusCell(row3col2, "winner");
                    changeStatusCell(row3col3, "winner");

                    isPlayerWinner = true;
            
        }

    }

// ********************   Check from position 8    Row 3 column 2 ***********************************

    else if (position === '8') {
        console.log('position 8');

        if ((row2col1_status === player) &&
            (row2col2_status === player) && 
            (row2col3_status === player)) {

                changeStatusCell(row2col1, "winner");
                changeStatusCell(row2col2, "winner");
                changeStatusCell(row2col3, "winner");

                isPlayerWinner = true;
                
        }

        else if ((row3col1_status === player) &&
                 (row3col2_status === player) && 
                 (row3col3_status === player)) {

                    changeStatusCell(row3col1, "winner");
                    changeStatusCell(row3col2, "winner");
                    changeStatusCell(row3col3, "winner");

                    isPlayerWinner = true;
                    
        }

    }


// ********************   Check from position 9    Row 3 column 3 ***********************************

    else if (position === '9') {
        console.log('position 9');

        if ((row3col1_status === player) &&
            (row3col2_status === player) && 
            (row3col3_status === player)) {

                changeStatusCell(row3col1, "winner");
                changeStatusCell(row3col2, "winner");
                changeStatusCell(row3col3, "winner");

                isPlayerWinner = true;
                
        }

        else if ((row1col1_status === player) &&
                 (row2col2_status === player) && 
                 (row3col3_status === player)) {

                    changeStatusCell(row1col1, "winner");
                    changeStatusCell(row2col2, "winner");
                    changeStatusCell(row3col3, "winner");

                    isPlayerWinner = true;
                    
        }

        else if ((row1col3_status === player) &&
                 (row2col3_status === player) && 
                 (row3col3_status === player)) {

                    changeStatusCell(row1col3, "winner");
                    changeStatusCell(row2col3, "winner");
                    changeStatusCell(row3col3, "winner");

                    isPlayerWinner = true;
            
        }

    }



    if (isPlayerWinner === true) {
        if (player === 'user') {
            winner.value = "User is the Winner!!!";
            winner.style.backgroundColor = "blue";
            winner.color = "white";
            console.log('Winner');
            
        }
        else if (player === 'computer') {
            winner.value = "Computer is the Winner!!";
        }

        return true;
    }
    else {
        return false;
    }
}

/****************************************** END FUNCTION SECTION ******************************************** */



/****************************************** BEGIN ADD Event Listener SECTION ******************************************** */

const resetButton = document.getElementById('reset_board');

const row1col1 = document.getElementsByClassName('r1c1')[0];
const row1col2 = document.getElementsByClassName('r1c2')[0];
const row1col3 = document.getElementsByClassName('r1c3')[0];

const row2col1 = document.getElementsByClassName('r2c1')[0];
const row2col2 = document.getElementsByClassName('r2c2')[0];
const row2col3 = document.getElementsByClassName('r2c3')[0];

const row3col1 = document.getElementsByClassName('r3c1')[0];
const row3col2 = document.getElementsByClassName('r3c2')[0];
const row3col3 = document.getElementsByClassName('r3c3')[0];

var row1col1_status = "free";
var row1col2_status = "free";
var row1col3_status = "free";

var row2col1_status = "free";
var row2col2_status = "free";
var row2col3_status = "free";

var row3col1_status = "free";
var row3col2_status = "free";
var row3col3_status = "free";

var playerTurn = "";

var isPlayerWinner = false;

/* 
    There is a group of 9 "addEventListener" for "click" of the div area. This is from the user's clicking the button.  
    One for each possible 9 cell in tic tac toe that a user can click on.   It will do the following when
    it is clicked
    a.  first, it will check if cell is available (if not, do nothing)
    b.  if it is available, mark it being used by that specific player in this case, the user
    c.  then it will check to see if the user is a winner,  it will check all angle of the tic tac toe to see if there is a match of three
        if there is, then it will declare it winner
    d.  If it is not a winner, it will  change the user status to "computer", update the Box indicate it is computer's turn, and wait
        2 seconds before running the function to let the computer pick next available box.
*/

row1col1.addEventListener('click', () => {

    if (row1col1_status === 'free') {
        row1col1_status = 'user';
        changeStatusCell(row1col1, playerTurn);
        
        isPlayerWinner = checkIfWinner('1', playerTurn);
        
        if (isPlayerWinner === false) {
            playerTurn = 'computer';
            playerTurnBox_update(playerTurn);
            setTimeout(computerMove, 2000);
        }
    }
    else {
        // leaving this here for possible troubleshooting purpose ;
        // DO NOTHING
    }  
  
})

row1col2.addEventListener('click', () => {

    if (row1col2_status === 'free') {
        row1col2_status = 'user';
        changeStatusCell(row1col2, playerTurn);
        isPlayerWinner = checkIfWinner('2', playerTurn);

        if (isPlayerWinner === false) {
            playerTurn = 'computer';
            playerTurnBox_update(playerTurn);
            setTimeout(computerMove, 2000);
        }
        
    }
    else {
        // leaving this here for possible troubleshooting purpose ;
        // DO NOTHING
    }    
})


row1col3.addEventListener('click', () => {

    if (row1col3_status === 'free') {
        row1col3_status = 'user';
        changeStatusCell(row1col3, playerTurn);
        isPlayerWinner = checkIfWinner('3', playerTurn);

        if (isPlayerWinner === false) {
            playerTurn = 'computer';
            playerTurnBox_update(playerTurn);
            setTimeout(computerMove, 2000);
        }
    }
    else {
        // leaving this here for possible troubleshooting purpose ;
        // DO NOTHING
    }  
})

row2col1.addEventListener('click', () => {

    if (row2col1_status === 'free') {
        row2col1_status = 'user';
        changeStatusCell(row2col1, playerTurn);
        isPlayerWinner = checkIfWinner('4', playerTurn);
        
        if (isPlayerWinner === false) {        
            playerTurn = 'computer';
            playerTurnBox_update(playerTurn);
            setTimeout(computerMove, 2000);
        }
    }
    else {
        // leaving this here for possible troubleshooting purpose ;
        // DO NOTHING
    }
  
})

row2col2.addEventListener('click', () => {

    if (row2col2_status === 'free') {
        row2col2_status = 'user';
        changeStatusCell(row2col2, playerTurn);
        isPlayerWinner = checkIfWinner('5', playerTurn);
        if (isPlayerWinner === false) {
            playerTurn = 'computer';
            playerTurnBox_update(playerTurn);
            setTimeout(computerMove, 2000);
        }
    }
    else {
        // leaving this here for possible troubleshooting purpose ;
        // DO NOTHING
    }
  
})


row2col3.addEventListener('click', () => {

    if (row2col3_status === 'free') {
        row2col3_status = 'user';
        changeStatusCell(row2col3, playerTurn);
        isPlayerWinner = checkIfWinner('6', playerTurn);
        if (isPlayerWinner === false) {
            playerTurn = 'computer';
            playerTurnBox_update(playerTurn);
            setTimeout(computerMove, 2000);
        }
    }
    else {
        // leaving this here for possible troubleshooting purpose ;
        // DO NOTHING
    }
    
})

row3col1.addEventListener('click', () => {

    if (row3col1_status === 'free') {
        row3col1_status = 'user';
        changeStatusCell(row3col1, playerTurn);
        isPlayerWinner = checkIfWinner('7', playerTurn);
        if (isPlayerWinner === false) {
            playerTurn = 'computer';
            playerTurnBox_update(playerTurn);
            setTimeout(computerMove, 2000);
        }
    }
    else {
        // leaving this here for possible troubleshooting purpose ;
        // DO NOTHING
    }
  
})

row3col2.addEventListener('click', () => {

    if (row3col2_status === 'free') {
        row3col2_status = 'user';
        changeStatusCell(row3col2, playerTurn);
        isPlayerWinner = checkIfWinner('8', playerTurn);
        if (isPlayerWinner === false) {
            playerTurn = 'computer';
            playerTurnBox_update(playerTurn);
            setTimeout(computerMove, 2000);
        }
    }
    else {
        // leaving this here for possible troubleshooting purpose ;
        // DO NOTHING
    }
  
})



row3col3.addEventListener('click', () => {

    if (row3col3_status === 'free') {
        row3col3_status = 'user';
        changeStatusCell(row3col3, playerTurn);
        isPlayerWinner = checkIfWinner('9', playerTurn);
        if (isPlayerWinner === false) {
            playerTurn = 'computer';
            playerTurnBox_update(playerTurn);
            setTimeout(computerMove, 2000);
        }
    }
    else {
        // leaving this here for possible troubleshooting purpose ;
        // DO NOTHING
    }
  
  
})

/*
    when user wants to reset the board back to beginning to start a new game
*/
resetButton.addEventListener('click', () => {

    resetTheBoard();
})

/****************************************** END ADD Event Listener SECTION ******************************************** */





/****************************************** Begin of main Program ******************************************** */


if (playerTurn === '')
{
    playerTurn = randomPlayerTurn();

}

const playerTurnBox = document.getElementsByClassName('playerStatus')[0];

playerTurnBox.value = playerTurn;

if (playerTurn === 'user') {
    playerTurnBox.innerHTML = "player's turn";
    playerTurnBox.style.backgroundColor = "green";
}
else if (playerTurn === 'computer') {
    
    playerTurnBox.innerHTML = "computer's turn";
    playerTurnBox.style.backgroundColor = "red"; 
    
    // sleep(2000); 

    setTimeout(computerMove, 2000);
    //  sleep(2000);
}
else {
    playerTurnBox.innerHTML = "Error";
    playerTurnBox.style.backgroundColor = "purple";  
}

/****************************************** End of main Program ******************************************** */

