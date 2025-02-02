export const getHeatmapColor = (value: number, maxValue: number) => {
  const intensity = Math.round((value / maxValue) * 255);
  return `rgb(${intensity}, ${255 - intensity}, 255)`;
};
