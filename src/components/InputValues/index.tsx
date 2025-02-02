import React, { useContext, useState } from "react";
import { generateMatrix } from "src/utils/generateMatrix";
import { MatrixContext } from "../MatrixContext";
import { validateValues } from "./constants";
import styles from "./InputValues.module.scss";

export const InputValues = () => {
  const { setM, setN, setX, setMatrix } = useContext(MatrixContext);

  const [inputM, setInputM] = useState("");
  const [inputN, setInputN] = useState("");
  const [inputX, setInputX] = useState("");

  const [error, setError] = useState("");

  const handleButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const numM = +inputM;
    const numN = +inputN;
    const numX = +inputX;

    const validationError = validateValues(numM, numN, numX);

    if (validationError) {
      setError(validationError);
    } else {
      setError("");

      setMatrix(generateMatrix(numM, numN));
      setM(numM);
      setN(numN);
      setX(numX);
    }
  };

  const handleReset = (e: React.MouseEvent) => {
    e.preventDefault();

    setInputM("");
    setInputN("");
    setInputX("");
    setError("");

    setMatrix([]);
    setM(0);
    setN(0);
    setX(0);
  };

  return (
    <section>
      <form className={styles.form}>
        <h2 className={styles.form__title}>
          Enter the parameters for generating matrices
        </h2>

        <input
          className={styles.form__input}
          type="number"
          value={inputM}
          onChange={(e) => setInputM(e.target.value)}
          placeholder="M"
        />

        <input
          className={styles.form__input}
          type="number"
          value={inputN}
          onChange={(e) => setInputN(e.target.value)}
          placeholder="N"
        />

        <input
          className={styles.form__input}
          type="number"
          value={inputX}
          onChange={(e) => setInputX(e.target.value)}
          placeholder="X"
        />

        {error && <span className={styles.form__error}>{error}</span>}

        <div className={styles.form__control}>
          <button
            className={styles.form__button}
            onClick={handleButtonClick}
            type="submit"
          >
            Submit
          </button>

          <button
            className={styles.form__button}
            onClick={handleReset}
            type="button"
          >
            Reset
          </button>
        </div>
      </form>
    </section>
  );
};
