import { FC, useContext, useState } from "react";
import { MatrixContext } from "src/components/MatrixContext";
import { calculatePercentageRounded } from "src/utils/calculatePercentageRoundedю";
import { getMaxValueInRow } from "src/utils/getMaxValueInRow";
import { getSumAmount } from "src/utils/getSumAmount";
import { MIN_M_RANGE } from "src/constants/inputsRange";
import { Cell } from "src/@types/cell";
import { TableCell } from "../TableCell";
import styles from "./TableRow.module.scss";

interface Props {
  indexRow: number;
  activeCells: number[];
  rows: Cell[];
}

export const TableRow: FC<Props> = ({ indexRow, rows, activeCells }) => {
  const { matrix, setM, setMatrix } = useContext(MatrixContext);

  const [activeRow, setActiveRow] = useState(null);

  const rowSum = getSumAmount(rows);
  const maxAmount = getMaxValueInRow(rows);

  const handleMouseEnter = () => {
    setActiveRow(indexRow);
  };

  const handleMouseLeave = () => {
    setActiveRow(null);
  };

  const handleDeleteRow = () => {
    setMatrix((matrix) =>
      matrix.length !== MIN_M_RANGE
        ? matrix.filter((_, index) => index !== indexRow)
        : matrix
    );

    setM(matrix.length - 1);
  };

  return (
    <tr className={styles["table-row"]}>
      <td className={styles["table-row__cell"]}>{indexRow + 1}</td>

      {rows.map((cell) => (
        <TableCell
          key={cell.id}
          cell={cell}
          isActive={activeCells.includes(cell.id)}
          percentage={calculatePercentageRounded(cell.amount, rowSum)}
          isPercentageVisble={indexRow === activeRow}
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

      <td className={styles["table-row__delete-row"]}>
        <button
          className={styles["table-row__button"]}
          onClick={handleDeleteRow}
        >
          -
        </button>
      </td>
    </tr>
  );
};
