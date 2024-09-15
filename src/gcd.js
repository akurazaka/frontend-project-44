import generateRandomNumber from './utils.js';

const getGCD = (a, b) => {
  if (!b) {
    return a;
  }
  return getGCD(b, a % b);
};

const description = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  const number1 = generateRandomNumber(1, 100);
  const number2 = generateRandomNumber(1, 100);
  const question = `${number1} ${number2}`;
  const answer = String(getGCD(number1, number2));
  return [question, answer];
};

const playGcdGame = (playGame) => {
  playGame(description, generateRound);
};

export default playGcdGame;
