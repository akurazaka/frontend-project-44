#!/usr/bin/env node
import playGame from '../src/index.js';

const description = 'What number is missing in the progression?';

const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const generateRound = () => {
  const start = generateRandomNumber(1, 10);
  const step = generateRandomNumber(1, 10);
  const length = 10;
  const progression = generateProgression(start, step, length);
  const hiddenIndex = generateRandomNumber(0, length - 1);
  const correctAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const playProgressionGame = () => playGame(description, generateRound);

playProgressionGame();
