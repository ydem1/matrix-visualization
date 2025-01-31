import React, { createContext, FC, ReactNode, useMemo, useState } from "react";
import { generateMatrix } from "src/utils/generateMatrix";
import { M, N } from "src/constants/inputsValues";
import { Cell } from "src/@types/cell";

const initiatMatrix: Cell[][] = generateMatrix(M, N);
const initiathoveredCell: Cell = null;

interface ProductsContextType {
  matrix: Cell[][];
  setMatrix: React.Dispatch<React.SetStateAction<Cell[][]>>;
  hoveredCell: Cell;
  setHoveredCell: React.Dispatch<React.SetStateAction<Cell>>;
}

export const MatrixContext = createContext<ProductsContextType>({
  matrix: initiatMatrix,
  setMatrix: () => {},
  hoveredCell: initiathoveredCell,
  setHoveredCell: () => {},
});

type Props = {
  children: ReactNode;
};

export const MatrixProvider: FC<Props> = ({ children }) => {
  const [matrix, setMatrix] = useState(initiatMatrix);
  const [hoveredCell, setHoveredCell] = useState(initiathoveredCell);

  const value = useMemo(
    () => ({
      matrix,
      setMatrix,
      hoveredCell,
      setHoveredCell,
    }),
    [matrix, hoveredCell]
  );

  return (
    <MatrixContext.Provider value={value}>{children}</MatrixContext.Provider>
  );
};
