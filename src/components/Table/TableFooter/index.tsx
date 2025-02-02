import { FC, useContext } from "react";
import { MatrixContext } from "src/components/MatrixContext";
import { calculatePercentilesPerColumn } from "src/utils/calculatePercentilesPerColumn";
import { generateRow } from "src/utils/generateMatrix";
import { MAX_M_RANGE } from "src/constants/inputsRange";
import styles from "./TableFooter.module.scss";

export const TableFooter: FC = () => {
  const { N, matrix, setMatrix, setM } = useContext(MatrixContext);

  const handleAddRow = () => {
    if (matrix.length !== MAX_M_RANGE) {
      const lastRow = matrix[matrix.length - 1];
      const maxId = lastRow[lastRow.length - 1].id;
      const newRow = generateRow(N, maxId + 1);

      setMatrix((prevMatrix) => [...prevMatrix, newRow]);
      setM(matrix.length + 1);
    }
  };

  return (
    <tfoot className={styles["table-footer"]}>
      <tr>
        <td className={styles["table-footer__percentile"]}>50th percentile</td>

        {calculatePercentilesPerColumn(matrix).map((number, index) => (
          <td key={index} className={styles["table-footer__cell"]}>
            {number}
          </td>
        ))}

        <th className={styles["table-footer__empty-cell"]} />

        <td className={styles["table-footer__add-row"]}>
          <button
            className={styles["table-footer__button"]}
            onClick={handleAddRow}
          >
            +
          </button>
        </td>
      </tr>
    </tfoot>
  );
};
