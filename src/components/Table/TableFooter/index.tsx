import { calculatePercentilesPerColumn } from "src/utils/calculatePercentilesPerColumn";
import { Cell } from "src/@types/cell";
import styles from "./TableFooter.module.scss";

interface Props {
  matrix: Cell[][];
}

export const TableFooter: React.FC<Props> = ({ matrix }) => (
  <tfoot className={styles["table-footer"]}>
    <tr>
      <td className={styles["table-footer__label"]}>50th percentile</td>

      {calculatePercentilesPerColumn(matrix).map((number, index) => (
        <td key={index} className={styles["table-footer__cell"]}>
          {number}
        </td>
      ))}

      <th className={styles["table-footer__empty-cell"]} />
    </tr>
  </tfoot>
);
