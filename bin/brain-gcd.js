#!/usr/bin/env node
import playGame from "../src/index.js";

const getGCD = (a, b) => {
  if (!b) {
    return a;
  }
  return getGCD(b, a % b);
};

const description = "Find the greatest common divisor of given numbers.";

const generateRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const generateRound = () => {
  const number_1 = generateRandomNumber(1, 100);
  const number_2 = generateRandomNumber(1, 100);
  const question = `${number_1} ${number_2}`;
  const correctAnswer = String(getGCD(number_1, number_2));
  return [question, correctAnswer];
};

const playGcdGame = () => playGame(description, generateRound);

playGcdGame();
