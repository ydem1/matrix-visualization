import { FC, useContext } from "react";
import { MatrixContext } from "src/components/MatrixContext";
import { getArrayNumbers } from "src/utils/getArrayNumbers";
import styles from "./TableHeader.module.scss";

export const TableHeader: FC = () => {
  const { N } = useContext(MatrixContext);

  return (
    <thead className={styles.header}>
      <tr className={styles.header__row}>
        <th className={styles.header__empty} />
        {getArrayNumbers(N).map((number) => (
          <th key={number} className={styles.header__cell}>
            {number}
          </th>
        ))}
        <th className={styles.header__sum}>Sum values</th>
        <th className={styles.header__empty} />
      </tr>
    </thead>
  );
};
