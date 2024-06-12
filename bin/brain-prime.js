import playGame from '../src/index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const generateRound = () => {
  const question = generateRandomNumber(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [String(question), correctAnswer];
};

const playPrimeGame = () => playGame(description, generateRound);

playPrimeGame();