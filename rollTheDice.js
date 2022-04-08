let data = [0,1,2,3,4,5];
let computerRoll = data[Math.floor(Math.random()*data.length)];
let playerRoll = data[Math.floor(Math.random()*data.length)];
let images = ["pics/inverted-dice-1.svg",
                    "pics/inverted-dice-2.svg",
                    "pics/inverted-dice-3.svg",
                    "pics/inverted-dice-4.svg",
                    "pics/inverted-dice-5.svg",
                    "pics/inverted-dice-6.svg"
                    ];



function computer() {

    
    return computerRoll;
}


function player() {

    
    return playerRoll;
}


function winner() {

    if (computerRoll > playerRoll) {
        document.getElementById("winner_is").innerHTML = "Computer";
    } else if (computerRoll < playerRoll) {
        document.getElementById("winner_is").innerHTML = "You";
    } else {
        document.getElementById("winner_is").innerHTML = "It's a tie!";
    }
}

function computerDice() {

    let img = document.createElement("img")
    img.src = images[computerRoll];
    img.setAttribute("width", "100px")
    img.setAttribute("height", "100px")
    document.getElementById("computer_dice_pic").appendChild(img);
}


function playerDice() {

    let img = document.createElement("img")
    img.src = images[playerRoll];
    img.setAttribute("width", "100px")
    img.setAttribute("height", "100px")
    document.getElementById("player_dice_pic").appendChild(img);
}



/*
let img = document.createElement('img')
img.src = images[0];
document.getElementById("dice_pic").appendChild(img);

document.getElementById("computer_roll").innerHTML = computerRoll;
document.getElementById("player_roll").innerHTML = playerRoll;

*/