import { FC, useContext } from "react";
import { getActiveCellIds } from "src/utils/getActiveCellIds";
import { MatrixContext } from "../MatrixContext";
import { TableRow } from "./TableRow";

export const TableBody: FC = () => {
  const { X, hoveredCell, matrix } = useContext(MatrixContext);
  const activeCells = getActiveCellIds(X, matrix, hoveredCell);

  return (
    <tbody>
      {matrix.map((item, index) => (
        <TableRow
          key={index}
          rows={item}
          indexRow={index}
          activeCells={activeCells}
        />
      ))}
    </tbody>
  );
};
