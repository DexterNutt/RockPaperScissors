const getComputerChoice = () => {
  const randomInt = (min, max) =>
    Math.floor(Math.random() * (max - min) + 1) + min;

  const selection = randomInt(0, 3);

  if (selection === 1) return 'rock';
  else if (selection === 2) return 'paper';
  else return 'scissors';
};

const game = () => {
  let playerScore = 0;
  let computerScore = 0;

  while (playerScore < 5 && computerScore < 5) {
    const computerSelection = getComputerChoice();
    const playerSelection = prompt(
      'Enter your selection: rock, paper, scissors'
    );
    const gameRound = (computerSelection, playerSelection) => {
      if (computerSelection === playerSelection) {
        console.log(`It's a tie`);
      }
      //! Player selects rock
      else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
          console.log(`You lose, paper beats rock!`);
          computerScore++;
        } else {
          console.log(`You win, rock beats scissors!`);
          playerScore++;
        }
      }
      //! Player selects scissors
      else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
          console.log(`You lose, rock beats scissors!`);
          computerScore++;
        } else {
          console.log('You win, scissors beats paper!');
          playerScore++;
        }
      } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
          console.log('You lose, scissors beats paper!');
          computerScore++;
        } else {
          console.log('You win, paper beats rock!');
          playerScore++;
        }
      } else
        console.log('please enter a valid selection: rock, paper, scissors');
      console.log(
        `Score: Player: ${playerScore} vs. Computer: ${computerScore}`
      );
    };
    gameRound(computerSelection, playerSelection);
  }
  alert(`Game Over!`);
};

game();
