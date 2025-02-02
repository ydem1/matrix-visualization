export const calculatePercentageRounded = (
  cellAmount: number,
  rowSum: number
) => Math.round((cellAmount / rowSum) * 100);
