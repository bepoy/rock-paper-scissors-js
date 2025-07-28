let count = 0;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
  let x = getRandomInt(3);
  if (x === 0) {
    return 'rock';
  } else if (x === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function getHumanChoice() {
  let choice = prompt(
    'Enter your choice: rock, paper, or scissors'
  ).toLowerCase();

  if (choice === 'rock') {
    return choice;
  } else if (choice === 'paper') {
    return choice;
  } else {
    return choice;
  }
}

function playRound(humanChoice, computerChoice) {

  console.log(humanChoice, computerChoice);
  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
    return count;
  } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')
  ) {
    console.log('You win!');
    count++;
    return count;
  } else {
    if (computerChoice === 'rock' && humanChoice === 'scissors') {
      console.log('You lose! Rock beats Scissors');
    } else if (computerChoice === 'paper' && humanChoice === 'rock') {
      console.log('You lose! Paper beats Rock');
    } else if (computerChoice === 'scissors' && humanChoice === 'paper') {
      console.log('You lose! Scissors beats Paper');
    }
    return count;
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    let a = getHumanChoice();
    let b = getComputerChoice();
    let result = playRound(a, b);
    console.log(`Round ${i + 1}: You scored ${result} points.`);
  }
}

 playGame();

// let score = playRound(humanSelection, computerSelection);

// console.log(score) 