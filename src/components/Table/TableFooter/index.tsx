import { getArrayNumbers } from "../../../utils/getArrayNumbers";
import { TableCell } from "../TableCell";
import styles from "./TableFooter.module.scss";

interface Props {
  columnNumbers: number;
}

export const TableFooter: React.FC<Props> = ({ columnNumbers }) => (
  <tfoot className={styles["table-footer"]}>
    <tr>
      <td className={styles["table-footer__label"]}>50th percentile</td>

      {getArrayNumbers(columnNumbers).map((number) => (
        <TableCell key={number}>{number}</TableCell>
      ))}

      <TableCell />
    </tr>
  </tfoot>
);
