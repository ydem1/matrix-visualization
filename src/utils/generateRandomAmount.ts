import { MAX_AMOUNT_RANGE, MIN_AMOUNT_RANGE } from "src/constants/amountRange";

export const generateRandomAmount = () => {
  return (
    Math.floor(Math.random() * (MAX_AMOUNT_RANGE - MIN_AMOUNT_RANGE + 1)) +
    MIN_AMOUNT_RANGE
  );
};
