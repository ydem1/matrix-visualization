import { Cell } from "../@types/cell";
import { generateRandomAmount } from "./generateRandomAmount";

export const generateMatrix = (M: number, N: number): Cell[][] => {
  let idCounter = 1;

  return Array.from({ length: M }, () =>
    Array.from({ length: N }, () => ({
      id: idCounter++,
      amount: generateRandomAmount(),
    }))
  );
};
