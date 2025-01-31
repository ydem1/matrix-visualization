const MIN = 1;
const MAX = 9;

export const generateRandomAmount = () => {
  return Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
};
