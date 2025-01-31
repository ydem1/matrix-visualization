import { Cell } from "src/@types/cell";

export const calculatePercentilesPerColumn = (matrix: Cell[][]) => {
  const numRows = matrix.length;
  const numColumns = matrix[0].length;

  const isEven = numRows % 2 === 0;
  const middleIndex = Math.floor(numRows / 2);

  const result = [];

  for (let columnIndex = 0; columnIndex < numColumns; columnIndex++) {
    const column = matrix.map((row) => row[columnIndex].amount);
    column.sort((a, b) => a - b);

    if (isEven) {
      result.push((column[middleIndex - 1] + column[middleIndex]) / 2);
    } else {
      result.push(column[middleIndex]);
    }
  }

  return result;
};
