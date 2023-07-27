choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}

function playRound (player, computer) {
    player = player.toLowerCase();
    computer = computer.toLowerCase();
    if ((player === 'rock' && computer === 'paper')
        || (player === 'scissors' && computer === 'rock')
        || (player === 'paper' && computer === 'scissors')
    ) {
        return `You lose! ${computer} beats ${player}`;
    }
    else if (player === computer) {
        return "It's a tie!";
    }
    else {
        return `You win! ${player} beats ${computer}`;
    }
}

function game() {
    // player_wins = 0;
    // computer_wins = 0;
    for (i = 0; i < 5; i++) {
        player = prompt('What is your choice?');
        console.log(playRound(player, getComputerChoice()));
    }
}

// console.log(game());

results = document.querySelector('.results');

const div = document.createElement('div');
div.textContent = 'hello!';

rock = document.querySelector('#rock');
rock.onclick = results.appendChild(div);

results.appendChild(div);