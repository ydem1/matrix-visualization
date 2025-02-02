export const getHeatmapColor = (percentage: number) => {
  const intensity = Math.round((percentage / 100) * 255);
  return `rgb(255, ${255 - intensity}, ${255 - intensity})`;
};
