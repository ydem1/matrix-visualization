import { FC } from "react";
import { TableRow } from "./TableRow";
import { Cell } from "src/@types/cell";

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
