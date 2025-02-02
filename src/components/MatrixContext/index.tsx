import React, { createContext, FC, ReactNode, useMemo, useState } from "react";
import { Cell } from "src/@types/cell";

const initiaM: number = 0;
const initiaN: number = 0;
const initiaX: number = 0;

const initiatMatrix: Cell[][] = [];
const initiathoveredCell: Cell = null;

interface ProductsContextType {
  M: number;
  setM: React.Dispatch<React.SetStateAction<number>>;
  N: number;
  setN: React.Dispatch<React.SetStateAction<number>>;
  X: number;
  setX: React.Dispatch<React.SetStateAction<number>>;
  matrix: Cell[][];
  setMatrix: React.Dispatch<React.SetStateAction<Cell[][]>>;
  hoveredCell: Cell;
  setHoveredCell: React.Dispatch<React.SetStateAction<Cell>>;
}

export const MatrixContext = createContext<ProductsContextType>({
  M: initiaM,
  setM: () => {},
  N: initiaN,
  setN: () => {},
  X: initiaX,
  setX: () => {},
  matrix: initiatMatrix,
  setMatrix: () => {},
  hoveredCell: initiathoveredCell,
  setHoveredCell: () => {},
});

type Props = {
  children: ReactNode;
};

export const MatrixProvider: FC<Props> = ({ children }) => {
  const [M, setM] = useState(initiaM);
  const [N, setN] = useState(initiaN);
  const [X, setX] = useState(initiaX);

  const [matrix, setMatrix] = useState(initiatMatrix);
  const [hoveredCell, setHoveredCell] = useState(initiathoveredCell);

  const value = useMemo(
    () => ({
      M,
      setM,
      N,
      setN,
      X,
      setX,
      matrix,
      setMatrix,
      hoveredCell,
      setHoveredCell,
    }),
    [M, N, X, matrix, hoveredCell]
  );

  return (
    <MatrixContext.Provider value={value}>{children}</MatrixContext.Provider>
  );
};
