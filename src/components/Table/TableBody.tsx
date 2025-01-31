import { FC, useContext } from "react";
import { MatrixContext } from "../MatrixContext";
import { TableRow } from "./TableRow";

export const TableBody: FC = () => {
  const { matrix } = useContext(MatrixContext);

  return (
    <tbody>
      {matrix.map((item, index) => (
        <TableRow key={index} rows={item} currentRowNumber={index + 1} />
      ))}
    </tbody>
  );
};
