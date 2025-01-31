import { Cell } from "src/@types/cell";

export const getSumAmount = (rows: Cell[]) =>
  rows.reduce(
    (previousValue, currentValue) => previousValue + currentValue.amount,
    0
  );
