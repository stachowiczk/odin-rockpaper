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

function addListerner (event) {
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
events.forEach(addListerner);
    


