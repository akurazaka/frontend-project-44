import generateRandomNumber from './utils.js';

const operators = ['+', '-', '*'];

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
  const number1 = generateRandomNumber(1, 50);
  const number2 = generateRandomNumber(1, 50);
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const question = `${number1} ${operator} ${number2}`;
  const answer = String(calculate(number1, operator, number2));
  return [question, answer];
};

export default (playGame) => {
  const description = 'What is the result of the expression?';
  playGame(description, generateRound);
};
