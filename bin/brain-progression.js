#!/usr/bin/env node
import playGame from "../src/index.js";
import { generateRandomNumber } from "../src/utils.js";

const description = "What number is missing in the progression?";

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
  const correctAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = "..";
  const question = progression.join(" ");
  return [question, correctAnswer];
};

const playProgressionGame = () => playGame(description, generateRound);

playProgressionGame();
