import generateRandomNumber from './utils.js';

const description = 'What number is missing in the progression?';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const generateRound = () => {
  const progressionLength = 10;
  const start = generateRandomNumber(1, 10);
  const step = generateRandomNumber(1, 5);
  const progression = generateProgression(start, step, progressionLength);
  const hiddenIndex = generateRandomNumber(0, progression.length - 1);
  const answer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

const playProgressionGame = (playGame) => {
  playGame(description, generateRound);
};

export default playProgressionGame;
