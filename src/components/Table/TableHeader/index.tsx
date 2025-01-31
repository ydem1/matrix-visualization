import { getArrayNumbers } from "src/utils/getArrayNumbers";
import styles from "./TableHeader.module.scss";

interface Props {
  columnNumbers: number;
}

export const TableHeader: React.FC<Props> = ({ columnNumbers }) => (
  <thead className={styles["table-header"]}>
    <tr className={styles["table-header__row"]}>
      <th className={styles["table-header__empty-cell"]} />

      {getArrayNumbers(columnNumbers).map((number) => (
        <th key={number} className={styles["table-header__cell"]}>
          {number}
        </th>
      ))}

      <th className={styles["table-header__sum"]}>Sum values</th>
    </tr>
  </thead>
);
