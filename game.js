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
        return "It's a tie!";
    }
    else if (playerSelected == 2) {
        if (computerSelected == 1) {
            return "You win! Scissors beats paper!";
        }
        else return "You lose! Rock beats scissors!";
    }
    else if (playerSelected == 1) {
        if (computerSelected == 2) {
            return "You lose! Scissors beats paper!";
        }
        else return "You win! Paper beats rock!";
    }
    else if (playerSelected == 0) {
        if (computerSelected == 2) {
            return "You win! Rock beats scissors!";
        }
        else return "You lose! Paper beats rock!";
    }
    else return "Wrong input! Try again!";
}
console.log(getRandomInt());
let player = prompt("Choose!");
let computer = computerPlay(getRandomInt());
console.log(playRound(playerSelect(player), computer));
