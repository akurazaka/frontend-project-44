import generateRandomNumber from './utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const generateRound = () => {
  const question = generateRandomNumber(1, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [String(question), answer];
};

const playPrimeGame = (playGame) => {
  playGame(description, generateRound);
};

export default playPrimeGame;
