import { FC, ReactNode } from "react";
import styles from "./Table.module.scss";

interface Props {
  children: ReactNode;
  ariaLabel?: string;
}

export const Table: FC<Props> = ({ children, ariaLabel }) => (
  <div className={styles.wrapper}>
    <table className={styles.table} aria-label={ariaLabel}>
      {children}
    </table>
  </div>
);
