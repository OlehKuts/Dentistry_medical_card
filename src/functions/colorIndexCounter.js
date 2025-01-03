export const colorIndexCounter = (hb, er) => {
  if (hb === null || er === null) return null;
  let hb1 = Number(hb);
  let er1 = Number(er);
  let colorIndex = (hb1 * 3) / (er1 * 100);
  return colorIndex.toFixed(2);
};
