import { Cell } from "src/@types/cell";

export const getActiveCellIds = (
  length: number,
  matrix: Cell[][],
  hoveredCell: Cell | null
) => {
  if (!hoveredCell) {
    return [];
  }

  const allCells = matrix.flat().filter((cell) => cell.id !== hoveredCell.id);

  const distances = allCells.map((cell) => ({
    cell,
    distance: Math.abs(cell.amount - hoveredCell.amount),
  }));

  distances.sort((a, b) => a.distance - b.distance);

  const closestCellIds = distances.slice(0, length).map((item) => item.cell.id);

  return closestCellIds;
};
