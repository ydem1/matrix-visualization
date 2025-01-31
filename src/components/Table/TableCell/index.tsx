import { useContext } from "react";
import { MatrixContext } from "src/components/MatrixContext";
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

  const handlePlusButton = () => updateCellAmount(1);
  const handleMinusButton = () => updateCellAmount(-1);

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
