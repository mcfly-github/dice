
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
let computerWinCounter = parseInt(localStorage.getItem("computerwin"));
let playerWinCounter = parseInt(localStorage.getItem("playerwin"));
let tieCounter = parseInt(localStorage.getItem("tie"));

function showCounters() {

    document.getElementById("computer-win-counter").innerHTML = computerWinCounter;
    document.getElementById("player-win-counter").innerHTML = playerWinCounter;
    document.getElementById("tie-counter").innerHTML = tieCounter;

}


function reloadPage() {

    location.reload()

}


function buttonCheck() {

    let counter = 0;
    document.getElementById("roll-button").onclick = () => {
    counter++
        if (counter == 1) {

            reloadPage()

        }
    }
}


function computer() {

    
    return computerRoll;
}


function player() {

    
    return playerRoll;
}


function winner() {

    if (computerRoll > playerRoll) {
        document.getElementById("winner-is").innerHTML = "Computer";
        computerWinCounter += 1
        localStorage.setItem("computerwin", computerWinCounter);
        document.getElementById("computer-win-counter").innerHTML = localStorage.getItem("computerwin");
    } else if (computerRoll < playerRoll) {
        document.getElementById("winner-is").innerHTML = "You";
        playerWinCounter += 1
        localStorage.setItem("playerwin", playerWinCounter);
        document.getElementById("player-win-counter").innerHTML = localStorage.getItem("playerwin");
    } else {
        document.getElementById("winner-is").innerHTML = "It's a tie";
        tieCounter += 1
        localStorage.setItem("tie", tieCounter);
        document.getElementById("tie-counter").innerHTML = localStorage.getItem("tie");
    }
}


function computerDice() {

    let img = document.createElement("img");
    img.src = images[computerRoll];
    img.setAttribute("width", "100px");
    img.setAttribute("height", "100px");
    document.getElementById("computer-dice-pic").appendChild(img);
}


function playerDice() {

    let checkElement = !!document.getElementById("player-dice");

    if (checkElement == true) {

        reloadPage()

    } else {

        let img = document.createElement("img");
        img.src = images[playerRoll];
        img.setAttribute("id", "player-dice");
        img.setAttribute("width", "100px");
        img.setAttribute("height", "100px");
        document.getElementById("player-dice-pic").appendChild(img);
    }
}


function textChange() {

    document.getElementById("roll-button").innerHTML = "Play again";
    
}

