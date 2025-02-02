import { FC, useContext } from "react";
import { MatrixContext } from "src/components/MatrixContext";
import { calculatePercentilesPerColumn } from "src/utils/calculatePercentilesPerColumn";
import styles from "./TableFooter.module.scss";

export const TableFooter: FC = () => {
  const { matrix } = useContext(MatrixContext);

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
      </tr>
    </tfoot>
  );
};
