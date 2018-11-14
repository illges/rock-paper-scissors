let options = ['rock', 'paper', 'scissors'];
//const playerChoice = playerSelection();
//const computerChoice = computerPlay();

function computerPlay() {
	return options[Math.floor(Math.random()*3)]
}

function playerSelection() {
	let choice =  prompt('Enter rock, paper or scissors.').toLowerCase();
	if (choice === 'rock' ||
		choice === 'paper' ||
		choice === 'scissors') {
		return choice
	} else {
		return 'You messed up. Reload page nerd!!!!'
	}
}

function playRound(player, computer) {
	console.log(player);
	console.log(computer);

	if (player === computer) {
		return `Tie game! ${player} negates ${computer}.`
	} else if (player === 'rock') {
		return (computer === 'paper') ? 1 : 2 // 1 = computer wins, 2= player wins
	} else if (player === 'paper') {
		return (computer === 'scissors') ? 1 : 2 // 1 = computer wins, 2= player wins
	} else if (player === 'scissors') {
		return (computer === 'rock') ? 1 : 2 // 1 = computer wins, 2= player wins
	} else {
		return 'Something went terribly wrong. Refresh page or fix your code you hack!'
	}
}

function game() {
	let i, result;
	let computerScore = 0;
	let playerScore = 0;

	for (i = 0; i < 5; i++) {
		result = playRound(playerSelection(), computerPlay());
		if (result === 1) {
			console.log(`Robots game #${i+1}!`);
			console.log('----------------------')
			computerScore += 1;
		} else if (result === 2) {
			console.log(`Humans win game #${i+1}!`);
			console.log('----------------------')
			playerScore += 1;
		} else {
			console.log(`No winner for game #${i+1}.`);
		}
	}

	if (playerScore != computerScore) {
		return (playerScore > computerScore) ? 'Humans win the Match!' : 'Robots win the Match!'
	} else {
		return 'Tie game, pretty boring.'
	}
}

console.log(game());
