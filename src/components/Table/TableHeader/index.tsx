import { FC, useContext } from "react";
import { MatrixContext } from "src/components/MatrixContext";
import { getArrayNumbers } from "src/utils/getArrayNumbers";
import styles from "./TableHeader.module.scss";

export const TableHeader: FC = () => {
  const { N } = useContext(MatrixContext);

  return (
    <thead className={styles["table-header"]}>
      <tr className={styles["table-header__row"]}>
        <th className={styles["table-header__empty-cell"]} />
        {getArrayNumbers(N).map((number) => (
          <th key={number} className={styles["table-header__cell"]}>
            {number}
          </th>
        ))}
        <th className={styles["table-header__sum"]}>Sum values</th>
        <th className={styles["table-header__empty-cell"]} />
      </tr>
    </thead>
  );
};
