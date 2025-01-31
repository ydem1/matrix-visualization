import { Cell } from "src/@types/cell";
import styles from "./TableCell.module.scss";

interface Props {
  cell: Cell;
}

export const TableCell: React.FC<Props> = ({ cell }) => {
  const handlePlusButton = () => {
    console.log("handlePlusButton");
    console.log(cell);
  };

  const handleMinusButton = () => {
    console.log("handleMinusButton");
    console.log(cell);
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
