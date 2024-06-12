#!/usr/bin/env node
import playGame from '../src/index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRandomNumber = () => Math.floor(Math.random() * 100);

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const randomNumber = generateRandomNumber();
  const question = `${randomNumber}`;
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const playEvenGame = () => playGame(description, generateRound);

playEvenGame();
