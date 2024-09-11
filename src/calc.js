import { generateRandomNumber } from "../utils.js";

const operators = ["+", "-", "*"];

const calculate = (a, operator, b) => {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    default:
      throw new Error(`Unknown operator: '${operator}'`);
  }
};

const generateRound = () => {
  const number_1 = generateRandomNumber(1, 50);
  const number_2 = generateRandomNumber(1, 50);
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const question = `${number_1} ${operator} ${number_2}`;
  const answer = String(calculate(number_1, operator, number_2));
  return [question, answer];
};

export const playCalcGame = (playGame) => {
  const description = "What is the result of the expression?";
  playGame(description, generateRound);
};
