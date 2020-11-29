import checkValidInput from './checkInput.js';

export default function getUserInput() {
  const $userInput = document.querySelector('#user-input');
  const userInputNumbers = $userInput.value.split('').map((x) => Number(x));
  $userInput.value = '';

  if (checkValidInput(userInputNumbers)) {
    return console.log(userInputNumbers);
  }
  return console.log(false);
}
