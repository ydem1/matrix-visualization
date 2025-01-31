import { Cell } from "src/@types/cell";
import styles from "./TableCell.module.scss";

interface Props {
  cell: Cell;
}

export const TableCell: React.FC<Props> = ({ cell }) => {
  return <td className={styles.cell}>{cell.amount}</td>;
};
