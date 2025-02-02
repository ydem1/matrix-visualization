import { FC, useState } from "react";
import { calculatePercentageRounded } from "src/utils/calculatePercentageRoundedю";
import { getMaxValueInRow } from "src/utils/getMaxValueInRow";
import { getSumAmount } from "src/utils/getSumAmount";
import { Cell } from "src/@types/cell";
import { TableCell } from "../TableCell";
import styles from "./TableRow.module.scss";

interface Props {
  currentRowNumber: number;
  activeCells: number[];
  rows: Cell[];
}

export const TableRow: FC<Props> = ({
  currentRowNumber,
  rows,
  activeCells,
}) => {
  const [activeRow, setActiveRow] = useState(null);

  const rowSum = getSumAmount(rows);
  const maxAmount = getMaxValueInRow(rows);

  const handleMouseEnter = () => {
    setActiveRow(currentRowNumber);
  };

  const handleMouseLeave = () => {
    setActiveRow(null);
  };

  return (
    <tr className={styles["table-row"]}>
      <td className={styles["table-row__cell"]}>{currentRowNumber}</td>

      {rows.map((cell) => (
        <TableCell
          key={cell.id}
          cell={cell}
          isActive={activeCells.includes(cell.id)}
          percentage={calculatePercentageRounded(cell.amount, rowSum)}
          isPercentageVisble={currentRowNumber === activeRow}
          maxAmount={maxAmount}
        />
      ))}

      <td
        className={styles["table-row__sum-amount"]}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {rowSum}
      </td>
    </tr>
  );
};
