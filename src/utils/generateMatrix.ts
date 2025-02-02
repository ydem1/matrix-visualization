import { MAX_AMOUNT_RANGE, MIN_AMOUNT_RANGE } from "src/constants/amountRange";
import { Cell } from "src/@types/cell";

const generateRandomAmount = () => {
  return (
    Math.floor(Math.random() * (MAX_AMOUNT_RANGE - MIN_AMOUNT_RANGE + 1)) +
    MIN_AMOUNT_RANGE
  );
};

export const generateRow = (
  N: number,
  idCounter: number
): { id: number; amount: number }[] => {
  return Array.from({ length: N }, () => ({
    id: idCounter++,
    amount: generateRandomAmount(),
  }));
};

export const generateMatrix = (M: number, N: number): Cell[][] => {
  let idCounter = 1;

  return Array.from({ length: M }, () => {
    const row = generateRow(N, idCounter);
    idCounter += N;
    return row;
  });
};
