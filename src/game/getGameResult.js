import getBallCount from './getBallCount.js';
import getStrikeCount from './getStrikeCount.js';

function getResultText(strikeCount, ballCount) {
  if (strikeCount === 3) {
    return '정답';
  }
  if (!strikeCount && !ballCount) {
    return '낫싱';
  }
  if (!strikeCount && ballCount) {
    return `${ballCount}볼`;
  }
  if (strikeCount && !ballCount) {
    return `${strikeCount}스트라이크`;
  }
  if (strikeCount && ballCount) {
    return `${ballCount}볼 ${strikeCount}스트라이크`;
  }
}

export default function getGameResult(computerInputNumbers, userInputNumbers) {
  const strikeCount = getStrikeCount(computerInputNumbers, userInputNumbers);
  const ballCount = getBallCount(computerInputNumbers, userInputNumbers);

  console.log(computerInputNumbers);
  return getResultText(strikeCount, ballCount);
}
