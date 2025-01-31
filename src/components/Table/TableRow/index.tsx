import { FC } from "react";
import { Cell } from "../../../@types/cell";
import { TableCell } from "../TableCell";
import styles from "./TableRow.module.scss";

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
