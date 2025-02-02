import { Cell } from "src/@types/cell";

export const getMaxValueInRow = (row: Cell[]) =>
  Math.max(...row.map((cell) => cell.amount));
