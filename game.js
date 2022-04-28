function getRandomInt () {
    const min = Math.ceil(0);
    const max = Math.floor(3);
    return Math.floor(Math.random() * (max - min) + min);
}
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

function updateScore (result) {
    if (result === "WIN") {
        const container = document.querySelector("#player-score");
        const content = document.createElement('div');
        content.classList.add('scoretick');
        container.appendChild(content);
    }
    else if (result === "LOSS") {
        const container = document.querySelector("#ai-score");
        const content = document.createElement('div');
        content.classList.add('scoretick');
        container.appendChild(content);
    }
}
const events = document.querySelectorAll('.key');
const scoreboard = document.querySelector('#ai-score');
const playerScoreboard = document.querySelector('#player-score');

function addListerner (event, aiScore, youScore) {
    event.addEventListener('click', function(event) {
        console.log(event.target.id);
        let round = playRound(playerSelect(event.target.id), computerPlay(getRandomInt()));
        console.log(round);
        let score = updateScore(round, aiScore, youScore);
        console.log(score);
});
}
let result = events.forEach(addListerner);
    


