const MIN = 100;
const MAX = 999;

export const generateRandomAmount = () => {
  return Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
};
