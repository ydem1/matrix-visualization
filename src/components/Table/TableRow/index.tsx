import { FC } from "react";
import styles from "./TableRow.module.scss";
import { Cell } from "src/@types/cell";
import { TableCell } from "../TableCell";

interface Props {
  currentRowNumber: number;
  rows: Cell[];
}

export const TableRow: FC<Props> = ({ currentRowNumber, rows }) => (
  <tr>
    <td className={styles["table-row__cell"]}>{currentRowNumber}</td>

    {rows.map(({ id, amount }) => (
      <TableCell key={id}>{amount}</TableCell>
    ))}

    <TableCell>amount</TableCell>
  </tr>
);
