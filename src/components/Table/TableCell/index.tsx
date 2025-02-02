import { useCallback, useContext } from "react";
import cn from "classnames";
import { MatrixContext } from "src/components/MatrixContext";
import { getHeatmapColor } from "src/utils/getHeatmapColor";
import { MAX_AMOUNT_RANGE, MIN_AMOUNT_RANGE } from "src/constants/amountRange";
import { Cell } from "src/@types/cell";
import styles from "./TableCell.module.scss";

interface Props {
  cell: Cell;
  isActive: boolean;
  isPercentageVisble: boolean;
  percentage: number;
  maxAmount: number;
}

export const TableCell: React.FC<Props> = ({
  cell,
  isActive,
  isPercentageVisble,
  percentage,
  maxAmount,
}) => {
  const { setHoveredCell, setMatrix } = useContext(MatrixContext);

  const updateCellAmount = useCallback(
    (delta: number) => {
      setMatrix((currentMatrix) =>
        currentMatrix.map((row) =>
          row.map((currentCell) =>
            currentCell.id === cell.id
              ? { ...currentCell, amount: currentCell.amount + delta }
              : currentCell
          )
        )
      );
    },
    [cell.id, setMatrix]
  );

  const handlePlusButton = () => {
    if (cell.amount < MAX_AMOUNT_RANGE) {
      updateCellAmount(1);
      setHoveredCell(cell);
    }
  };

  const handleMinusButton = () => {
    if (cell.amount > MIN_AMOUNT_RANGE) {
      updateCellAmount(-1);
      setHoveredCell(cell);
    }
  };

  const handleMouseEnter = () => {
    setHoveredCell(cell);
  };

  const handleMouseLeave = () => {
    setHoveredCell(null);
  };

  return (
    <td
      className={cn(styles.cell, {
        [styles["cell--active"]]: isActive,
      })}
      style={{
        backgroundColor: isPercentageVisble
          ? getHeatmapColor(cell.amount, maxAmount)
          : "",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.cell__wrapper}>
        <button className={styles.cell__button} onClick={handlePlusButton}>
          +
        </button>

        <span className={styles.cell__value}>
          {isPercentageVisble ? `${percentage}%` : cell.amount}
        </span>

        <button className={styles.cell__button} onClick={handleMinusButton}>
          -
        </button>
      </div>
    </td>
  );
};
