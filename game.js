//general purpose pseudorandom integer generator
//range goed in the Math.ceil(lower) and Math.floor(upper)
//don't ask why. floats everywhere ffs.
function getRandomInt () {
    const min = Math.ceil(0);
    const max = Math.floor(3);
    return Math.floor(Math.random() * (max - min) + min);
}
//this could be redundant idk
//though the getRandomInt is reusable anywhere
function computerPlay (random_int) {
    switch (random_int) {
        case 0:
            return 0;
        case 1:
            return 1;
        case 2: 
            return 2;
    }
}

//this gets passed the target.id of
//the click event listener (below) and is then
//passed into the playRound function
function playerSelect (selection) {
    let lowercase = selection.toLowerCase();
    switch (selection) {
        case "rock":
            return 0;
        case "paper":
            return 1;
        case "scissors":
            return 2;
    }
    return 3;
}

//this compares the results of both players
//and returns them as strings
function playRound (playerSelected, computerSelected) {
    if (playerSelected == computerSelected) {
        console.log("It's a tie!");
        return "TIE";
    }
    else if (playerSelected == 2) {
        if (computerSelected == 1) {
            console.log("You win! Scissors beats paper!");
            return "WIN";
        }
        else {
            console.log("You lose! Rock beats scissors!");
            return "LOSS"
        }
    }
    else if (playerSelected == 1) {
        if (computerSelected == 2) {
            console.log("You lose! Scissors beats paper!");
            return "LOSS";
        }
        else {
            console.log("You win! Paper beats rock!");
            return "WIN";
        }
    }
    else if (playerSelected == 0) {
        if (computerSelected == 2) {
            console.log("You win! Rock beats scissors!")
            return "WIN";
        }
        else {
            console.log("You lose! Paper beats rock!");
            return "LOSS";
    }
}}

//this keeps score and displays squares on the winner's side
//no new squares appear after a "TIE" result
function updateScore (result) {
    if (result === "WIN") {
        const container = document.querySelector("#player-score");
        const content = document.createElement('div');
        content.classList.add('scoretick');
        container.appendChild(content);
        return 2;
    }

    else if (result === "LOSS") {
        const container = document.querySelector("#ai-score");
        const content = document.createElement('div');
        content.classList.add('scoretick');
        container.appendChild(content);
        return 3;
    }
    else return 4;
}

//reset the score when player/ai reacher 5 points
function resetSquares(aiScore, youScore) {
    const ticks = document.getElementsByClassName('scoretick');
    while(ticks.length > 0) {
        ticks[0].parentNode.removeChild(ticks[0]);
    }
    if (aiScore > youScore) {
        alert("You lost!");
    }
    else if (youScore > aiScore) {
        alert("WINNER!")
    }
}
const events = document.querySelectorAll('.key');
let aiScore = 0;
let youScore = 0;

//returns a number assigned to a div that the user
//can click
function addListener (event) {
    event.addEventListener('click', function(event) {
        console.log(event.target.id);
        let round = playRound(playerSelect(event.target.id), computerPlay(getRandomInt()));
        console.log(round);
        let score = updateScore(round);
        if (score === 3) {
            aiScore++;
        }
        else if (score === 2) {
            youScore++;
        }
        console.log(aiScore);
        console.log(youScore);
        if (aiScore >= 5 || youScore >= 5) {
            resetSquares(aiScore, youScore);
            aiScore = 0;
            youScore = 0;
        }

});
}
events.forEach(addListener);
    


