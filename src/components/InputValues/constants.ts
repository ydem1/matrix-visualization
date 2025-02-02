export const validateValues = (M: number, N: number, X: number) => {
  if (M < 1 || M > 100) {
    return "M must be in the range from 1 to 100";
  }

  if (N < 1 || N > 100) {
    return "N must be in the range from 1 to 100";
  }

  if (X < 1 || X > M * N - 1) {
    return `X must be in the range from 1 to ${M * N - 1}`;
  }

  return "";
};
