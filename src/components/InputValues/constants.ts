import {
  MAX_M_RANGE,
  MAX_N_RANGE,
  MIN_M_RANGE,
  MIN_N_RANGE,
} from "src/constants/inputsRange";

export const validateValues = (M: number, N: number, X: number) => {
  if (M < MIN_M_RANGE || M > MAX_M_RANGE) {
    return `M must be in the range from ${MIN_M_RANGE} to ${MAX_M_RANGE}`;
  }

  if (N < MIN_N_RANGE || N > MAX_N_RANGE) {
    return `N must be in the range from ${MIN_N_RANGE} to ${MAX_N_RANGE}`;
  }

  if (X < 1 || X > M * N - 1) {
    return `X must be in the range from 1 to ${M * N - 1}`;
  }

  return "";
};
