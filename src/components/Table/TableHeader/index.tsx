import { FC } from "react";
import { getArrayNumbers } from "src/utils/getArrayNumbers";
import { N } from "src/constants/inputsValues";
import styles from "./TableHeader.module.scss";

export const TableHeader: FC = () => (
  <thead className={styles["table-header"]}>
    <tr className={styles["table-header__row"]}>
      <th className={styles["table-header__empty-cell"]} />

      {getArrayNumbers(N).map((number) => (
        <th key={number} className={styles["table-header__cell"]}>
          {number}
        </th>
      ))}

      <th className={styles["table-header__sum"]}>Sum values</th>
    </tr>
  </thead>
);
