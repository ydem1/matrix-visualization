import React, { useState } from "react";
import { validateValues } from "./constants";
import styles from "./InputValues.module.scss";

export const InputValues = () => {
  const [M, setM] = useState("");
  const [N, setN] = useState("");
  const [X, setX] = useState("");

  const [error, setError] = useState("");

  const handleButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();

    const validationError = validateValues(+M, +N, +X);

    if (validationError) {
      setError(validationError);
    } else {
      setError("");
      console.log("Input M:", M);
      console.log("Input N:", N);
      console.log("Input X:", X);
    }
  };

  const handleReset = (e: React.MouseEvent) => {
    e.preventDefault();

    setM("");
    setN("");
    setX("");
    setError("");
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
          value={M}
          onChange={(e) => setM(e.target.value)}
          placeholder="M"
        />

        <input
          className={styles.form__input}
          type="number"
          value={N}
          onChange={(e) => setN(e.target.value)}
          placeholder="N"
        />

        <input
          className={styles.form__input}
          type="number"
          value={X}
          onChange={(e) => setX(e.target.value)}
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
