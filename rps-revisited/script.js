choices = ['Rock', 'Paper', 'Scissors'];
player_wins = 0;
rudy_wins = 0;

results = document.querySelector('#results');
game_over = document.querySelector('.game-over');
remove_list = document.querySelectorAll('.remove');

player_text = document.querySelector('#player-wins');
rudy_text = document.querySelector('#rudy-wins');
angry_rudy = document.createElement('img');
angry_rudy.src = 'rudy_angry.jpg';
angry_rudy.classList.add('rudy');
happy_rudy = document.createElement('img');
happy_rudy.src = 'rudy_happy.jpg';
happy_rudy.classList.add('rudy');

function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}

function playRound (player, computer) {
    player = player.toLowerCase();
    computer = computer.toLowerCase();

    result = '';
    const div = document.createElement('div');


    if ((player === 'rock' && computer === 'paper')
        || (player === 'scissors' && computer === 'rock')
        || (player === 'paper' && computer === 'scissors')
    ) {
        result = `You lose! ${computer} beats ${player}`;
        rudy_wins += 1;
        rudy_text.textContent = `Rudy's wins: ${rudy_wins}`;
    }
    else if (player === computer) {
        result = "It's a tie!";
    }
    else {
        result = `You win! ${player} beats ${computer}`;
        player_wins += 1;
        player_text.textContent = `Your wins: ${player_wins}`;
    }
    div.textContent = result;
    results.insertBefore(div, results.firstChild);

    if ((rudy_wins === 10)) {
        remove_list.forEach(item => item.remove());

        text = document.createElement('p');
        text.textContent = "YOU'RE FIRED!"
        text.style.color = 'red';
        text.style.fontSize = '50px';
        text.style.fontWeight = 'bold';
        
        game_over.appendChild(angry_rudy);
        game_over.appendChild(text);
    }

    if ((player_wins === 10)) {
        remove_list.forEach(item => item.remove());

        text = document.createElement('p');
        text.textContent = "YOU'RE PROMOTED!"
        text.style.color = 'green';
        text.style.fontSize = '50px';
        text.style.fontWeight = 'bold';
        
        game_over.appendChild(happy_rudy);
        game_over.appendChild(text);
    }

    // if (rudy_wins === 10) {
    //     wins.textContent = "YOU'RE FIRED!"
    //     wins.style.color = 'red';
    //     wins.style.fontSize = '50px';
    // }

    // if (player_wins === 10) {
    //     wins.textContent = "YOU'RE PROMOTED!"
    //     wins.style.color = 'green';
    //     wins.style.fontSize = '50px';
    // }
}

rock = document.querySelector('#rock');
rock.addEventListener('click',  function() {
    playRound('rock', getComputerChoice());
});

rock = document.querySelector('#paper');
rock.addEventListener('click',  function() {
    playRound('paper', getComputerChoice());
});

rock = document.querySelector('#scissors');
rock.addEventListener('click',  function() {
    playRound('scissors', getComputerChoice());
});