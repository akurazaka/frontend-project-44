export const generateRandomNumber = (min = 0, max = 100) => {
  const range = max - min + 1;
  return Math.floor(Math.random() * range) + min;
};
