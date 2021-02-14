function rollSixSidedDice() { // Roll six sided dice.

    diceValue = Math.floor(Math.random()*6) + 1;

    if(playersTurn % 2 == 0){
        document.getElementById("rolled").innerHTML = diceValue;
        playerOneRoll(diceValue);
    }else if(playersTurn % 2 != 0){
        document.getElementById("rolled").innerHTML = diceValue;
        playerTwoRoll(diceValue);
    }else if(playersTurn == null){
        document.getElementById("rolled").innerHTML = diceValue;
        playerOneRoll(diceValue);
    }
}

function playerOneRoll(diceValue){ // playerOne function.
    playerOneSelectedStyle();
    roundScore = +document.getElementById("round-score-1").innerHTML;

    if(diceValue == 1){
        document.getElementById("round-score-1").innerHTML = "0";
        playersTurn += 1;
        playerTwoSelectedStyle();

    } else if(diceValue != 1){
        roundScore += diceValue;
        document.getElementById("round-score-1").innerHTML = roundScore;
    }

}

function playerTwoRoll(diceValue){ // player two function.
    playerTwoSelectedStyle();
    roundScore = +document.getElementById("round-score-2").innerHTML;

    if(diceValue == 1){
        document.getElementById("round-score-2").innerHTML = "0";
        playersTurn += 1;
        playerOneSelectedStyle();

    } else if(diceValue != 1){
        roundScore += diceValue;
        document.getElementById("round-score-2").innerHTML = roundScore;
    }
}

function playerOneSelectedStyle(){ // The selected style when it is player one's turn.
    document.getElementById("player-1-style").style.color = "red";
    document.getElementById("player-2-style").style.color = "black";
}

function playerTwoSelectedStyle(){ // The selected style when it is player two's turn.
    document.getElementById("player-2-style").style.color = "red";
    document.getElementById("player-1-style").style.color = "black";
}


function holdRoll(){ // the function for when the hold button is clicked. 

    if(playersTurn % 2 == 0){
        playerOneHold();
    }else if(playersTurn % 2 != 0){
        playerTwoHold();
    }else if(playersTurn == null){
        playerOneHold();
    }
}


function playerOneHold(){ // player one clicks the hold button.
    playerTwoSelectedStyle();

    roundScore = +document.getElementById("round-score-1").innerHTML;
    globalScore = +document.getElementById("global-score-1").innerHTML;

    globalScore += roundScore;

    document.getElementById("global-score-1").innerHTML = globalScore;
    document.getElementById("round-score-1").innerHTML = 0;

    if(roundScore == 0){
        playerOneSelectedStyle();
        window.alert("Please roll the dice before holding a valid value.");
        return 0;
    }

    if(globalScore >= 100){
        playerOneSelectedStyle();
        window.alert("Player 1 wins!");
    }


    playersTurn += 1;
}

function playerTwoHold(){ // player two clicks the hold button.
    playerOneSelectedStyle();

    roundScore = +document.getElementById("round-score-2").innerHTML;
    globalScore = +document.getElementById("global-score-2").innerHTML;

    globalScore += roundScore;

    document.getElementById("global-score-2").innerHTML = globalScore;
    document.getElementById("round-score-2").innerHTML = "0";

    if(roundScore == 0){
        playerTwoSelectedStyle();
        window.alert("Please roll the dice before holding a valid value.");
        return 0;
    }

    if(globalScore >= 100){
        playerTwoSelectedStyle();
        window.alert("Player 2 wins!");
    }


    playersTurn += 1;
}

function restart(){ // function to restart the game.
    document.getElementById("global-score-2").innerHTML = "0";
    document.getElementById("round-score-2").innerHTML = "0";
    document.getElementById("global-score-1").innerHTML = "0";
    document.getElementById("round-score-1").innerHTML = "0";
    document.getElementById("rolled").innerHTML = "0";
    playerOneSelectedStyle();

    playersTurn = 0;
}


// tack track of which player's turn it is to roll.
playersTurn = 0;