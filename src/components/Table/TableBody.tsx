import { FC, useContext } from "react";
import { getActiveCellIds } from "src/utils/getActiveCellIds";
import { X } from "src/constants/inputsValues";
import { MatrixContext } from "../MatrixContext";
import { TableRow } from "./TableRow";

export const TableBody: FC = () => {
  const { hoveredCell, matrix } = useContext(MatrixContext);
  const activeCells = getActiveCellIds(X, matrix, hoveredCell);

  return (
    <tbody>
      {matrix.map((item, index) => (
        <TableRow
          key={index}
          rows={item}
          currentRowNumber={index + 1}
          activeCells={activeCells}
        />
      ))}
    </tbody>
  );
};
