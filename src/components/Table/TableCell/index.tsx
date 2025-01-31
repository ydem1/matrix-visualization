import { ReactNode } from "react";
import styles from "./TableCell.module.scss";

export const TableCell: React.FC<{ children?: ReactNode }> = ({ children }) => (
  <td className={styles.cell}>{children}</td>
);
