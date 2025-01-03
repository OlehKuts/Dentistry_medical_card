export const lastDateChecker = (time, date, newDate) => {
  let clean = Number(time).toFixed(0);
  let cleanTime = Number(clean);
  if (cleanTime < 21) {
    return date;
  } else {
    return newDate;
  }
};
