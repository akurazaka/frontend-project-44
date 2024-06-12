#!/usr/bin/env node
import playGame from '../src/index.js';

const description = 'What is the result of the expression?';

const generateRandomNumber = () => Math.floor(Math.random() * 100);

const operations = ['+', '-', '*'];

const calculate = (a, operator, b) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      throw new Error(`Unknown operator: '${operator}'`);
  }
};

const generateRound = () => {
  const num1 = generateRandomNumber();
  const num2 = generateRandomNumber();
  const operator = operations[Math.floor(Math.random() * operations.length)];
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = String(calculate(num1, operator, num2));
  return [question, correctAnswer];
};

const playCalcGame = () => playGame(description, generateRound);

playCalcGame();
