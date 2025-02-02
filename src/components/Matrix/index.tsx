import { FC, useContext } from "react";
import { MatrixContext } from "../MatrixContext";
import { Table, TableBody, TableHeader } from "../Table";
import { TableFooter } from "../Table/TableFooter";
import "./Matrix.css";

interface Props {
  ariaLabel: string;
}

export const Matrix: FC<Props> = ({ ariaLabel }) => {
  const { M, N, X } = useContext(MatrixContext);

  const isMatrix = Boolean(M || N || X);

  return (
    <section className="table">
      {isMatrix && (
        <Table ariaLabel={ariaLabel}>
          <TableHeader />
          <TableBody />
          <TableFooter />
        </Table>
      )}
    </section>
  );
};
