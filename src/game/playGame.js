import getUserInput from '../input/getUserInput.js';
import printGameResult from './printGameResult.js';
import getRandomNumbers from '../input/getRandomNumbers.js';

function resetScreen() {
  const $result = document.querySelector('#result');
  const $userInput = document.querySelector('#user-input');

  $userInput.value = '';
  $result.textContent = '';
}

export default function playGame(computerInputNumbers, play) {
  const $submit = document.querySelector('#submit');
  const $result = document.querySelector('#result');

  $submit.addEventListener('click', () => {
    const userInputNumbers = getUserInput();

    if (userInputNumbers) {
      printGameResult(play(computerInputNumbers, userInputNumbers));
    }
  });

  $result.addEventListener('click', ({ target }) => {
    if (target.id === 'game-restart-button') {
      resetScreen();
      computerInputNumbers = getRandomNumbers();
    }
  });
}
