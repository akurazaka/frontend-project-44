import generateRandomNumber from './utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const randomNumber = generateRandomNumber(1, 50);
  const question = String(randomNumber);
  const answer = isEven(randomNumber) ? 'yes' : 'no';
  return [question, answer];
};

const playEvenGame = (playGame) => {
  playGame(description, generateRound);
};

export default playEvenGame;
