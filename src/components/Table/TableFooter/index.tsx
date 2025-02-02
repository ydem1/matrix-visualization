import { FC, useContext } from "react";
import { MatrixContext } from "src/components/MatrixContext";
import { calculatePercentilesPerColumn } from "src/utils/calculatePercentilesPerColumn";
import { generateRow } from "src/utils/generateMatrix";
import { N } from "src/constants/inputsValues";
import styles from "./TableFooter.module.scss";

export const TableFooter: FC = () => {
  const { matrix, setMatrix } = useContext(MatrixContext);

  const handleAddRow = () => {
    const lastRow = matrix[matrix.length - 1];
    const maxId = lastRow[lastRow.length - 1].id;
    const newRow = generateRow(N, maxId + 1);

    setMatrix((prevMatrix) => [...prevMatrix, newRow]);
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
