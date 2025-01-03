export const lowerToothChecker = (arr) => {
  let result = false;
  let numbers = arr.map((i) => Number(i));
  result = numbers.some(
    (i) =>
      i === 31 ||
      i === 32 ||
      i === 33 ||
      i === 41 ||
      i === 42 ||
      i === 43 ||
      i === 71 ||
      i === 72 ||
      i === 73 ||
      i === 81 ||
      i === 82 ||
      i === 83
  );
  return result;
};

export const upperToothChecker = (arr) => {
  let result = false;
  let numbers = arr.map((i) => Number(i));
  result = numbers.some(
    (i) =>
      i === 11 ||
      i === 12 ||
      i === 13 ||
      i === 21 ||
      i === 22 ||
      i === 23 ||
      i === 51 ||
      i === 52 ||
      i === 53 ||
      i === 61 ||
      i === 62 ||
      i === 63
  );
  return result;
};

export const sideChecker = (toothList) => {
  let rightSide = false;
  let leftSide = false;

  const numList = toothList.map((t) => Number(t));
  rightSide = numList.some(
    (n) => (n > 10 && n < 20) || (n > 40 && n < 60) || (n > 80 && n < 90)
  );
  leftSide = numList.some((n) => (n > 20 && n < 40) || (n > 60 && n < 80));
  const finalStr =
    rightSide && leftSide
      ? `ліворуч та праворуч`
      : rightSide
      ? `праворуч`
      : leftSide
      ? ``
      : "";
  return finalStr;
};
