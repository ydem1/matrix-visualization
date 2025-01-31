import { useContext } from "react";
import { MatrixContext } from "src/components/MatrixContext";
import { MAX_AMOUNT_RANGE, MIN_AMOUNT_RANGE } from "src/constants/amountRange";
import { Cell } from "src/@types/cell";
import styles from "./TableCell.module.scss";

interface Props {
  cell: Cell;
}

export const TableCell: React.FC<Props> = ({ cell }) => {
  const { setMatrix } = useContext(MatrixContext);

  const updateCellAmount = (delta: number) => {
    setMatrix((currentMatrix) =>
      currentMatrix.map((row) =>
        row.map((currentCell) =>
          currentCell.id === cell.id
            ? { ...currentCell, amount: currentCell.amount + delta }
            : currentCell
        )
      )
    );
  };

  const handlePlusButton = () => {
    if (cell.amount < MAX_AMOUNT_RANGE) {
      updateCellAmount(1);
    }
  };

  const handleMinusButton = () => {
    if (cell.amount > MIN_AMOUNT_RANGE) {
      updateCellAmount(-1);
    }
  };

  return (
    <td className={styles.cell}>
      <div className={styles["cell__wrapper"]}>
        <button className={styles["cell__button"]} onClick={handlePlusButton}>
          +
        </button>
        <span>{cell.amount}</span>
        <button className={styles["cell__button"]} onClick={handleMinusButton}>
          -
        </button>
      </div>
    </td>
  );
};
