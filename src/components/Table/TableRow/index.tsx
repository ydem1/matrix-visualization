import { FC } from "react";
import { getSumAmount } from "src/utils/getSumAmount";
import { Cell } from "src/@types/cell";
import { TableCell } from "../TableCell";
import styles from "./TableRow.module.scss";

interface Props {
  currentRowNumber: number;
  rows: Cell[];
}

export const TableRow: FC<Props> = ({ currentRowNumber, rows }) => (
  <tr>
    <td className={styles["table-row__cell"]}>{currentRowNumber}</td>

    {rows.map((cell) => (
      <TableCell key={cell.id} cell={cell} />
    ))}

    <td className={styles["table-row__sum-amount"]}>{getSumAmount(rows)}</td>
  </tr>
);
