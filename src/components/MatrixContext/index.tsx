import React, { createContext, FC, ReactNode, useMemo, useState } from "react";
import { generateMatrix } from "src/utils/generateMatrix";
import { M, N } from "src/constants/inputsValues";
import { Cell } from "src/@types/cell";

const initiatMatrix: Cell[][] = generateMatrix(M, N);

interface ProductsContextType {
  matrix: Cell[][];
  setMatrix: React.Dispatch<React.SetStateAction<Cell[][]>>;
}

export const MatrixContext = createContext<ProductsContextType>({
  matrix: initiatMatrix,
  setMatrix: () => {},
});

type Props = {
  children: ReactNode;
};

export const MatrixProvider: FC<Props> = ({ children }) => {
  const [matrix, setMatrix] = useState(initiatMatrix);

  const value = useMemo(
    () => ({
      matrix,
      setMatrix,
    }),
    [matrix]
  );

  return (
    <MatrixContext.Provider value={value}>{children}</MatrixContext.Provider>
  );
};
