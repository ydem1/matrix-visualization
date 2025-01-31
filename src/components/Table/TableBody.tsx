import { FC } from "react";
import { Cell } from "src/@types/cell";
import { TableRow } from "./TableRow";

interface Props {
  matrix: Cell[][];
}

export const TableBody: FC<Props> = ({ matrix }) => (
  <tbody>
    {matrix.map((item, index) => (
      <TableRow key={index} rows={item} currentRowNumber={index + 1} />
    ))}
  </tbody>
);
