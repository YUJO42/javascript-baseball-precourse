function getRandomNumber() {
  const min = 1;
  const max = 10;

  return Math.floor(Math.random() * (max - min)) + min;
}

export default function getRandomNumbers() {
  const answer = new Set();
  while ([...answer].length < 3) {
    answer.add(getRandomNumber());
  }
  return Number([...answer].join(''));
}
