let options = ['rock', 'psychic', 'bug'];
let computerSelection;
let computerScore = 0;
let playerScore = 0;
let roundResult;

const button = document.querySelectorAll('.button');
const resultDiv = document.createElement('div');
document.body.appendChild(resultDiv);
const message = document.createElement('p');

function computerPlay() {
	return computerSelection = options[Math.floor(Math.random()*3)]
}

function playRound(player, computer) {
	//console.log(`Human : ${player}`);
	//console.log(`Robot : ${computer}`);

	if ((player === 'rock' && computer === 'bug') ||
		(player === 'psychic' && computer === 'rock') ||
		(player === 'bug' && computer === 'psychic')) {

		playerScore++;
		roundResult = 'Humans win!';
		
	} else if ( (player === 'rock' && computer === 'psychic') ||
                (player === 'psychic' && computer === 'bug') ||
                (player === 'bug' && computer === 'rock')) {

		computerScore++;
		roundResult = 'Robots win!';

	} else {

		roundResult = 'Tie game!';

	}

	//console.log('----------------------')
}

function showResult() {
	resultDiv.classList.add('results');
	resultDiv.innerHTML = '<br>Computer chose ' + computerSelection + '<br>' +
            roundResult + '<br><br>Player score: ' + playerScore + '<br>' +
            'Computer score: ' + computerScore;
	
	if (playerScore === 5 || computerScore === 5) {
        message.textContent = (playerScore === 5) ? 'You win!' : 'You lose!';
        message.style.color = (playerScore === 5) ? 'green' : 'red';
        resultDiv.appendChild(message);
        playerScore = 0;
        computerScore = 0;
    }
}

button.forEach(function(button) {
	button.addEventListener('click', ()=> computerPlay());
	button.addEventListener('click', (e)=> playRound(e.target.id, computerSelection));
	button.addEventListener('click', showResult);
});

