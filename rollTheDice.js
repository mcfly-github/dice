let data = [1,2,3,4,5,6];
let computerRoll = data[Math.floor(Math.random()*data.length)];
let playerRoll = data[Math.floor(Math.random()*data.length)];

function computer() {

    document.getElementById("computer_roll").innerHTML = computerRoll;
    return computerRoll;
}


function player() {

    document.getElementById("player_roll").innerHTML = playerRoll;
    return playerRoll;
}

if (computerRoll > playerRoll) {
    document.getElementById("winner_is").innerHTML = "Computer";
} else if (computerRoll < playerRoll) {
    document.getElementById("winner_is").innerHTML = "You";
} else {
    document.getElementById("winner_is").innerHTML = "It's a tie!";
}