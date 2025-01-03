export const heartRateCounter = (age) => {
  switch (Number(age)) {
    case 0:
      return 130;
    case 1:
      return 115;
    case 2:
    case 3:
      return 110;
    case 4:
    case 5:
      return 100;
    case 6:
    case 7:
      return 95;
    case 8:
    case 9:
      return 85;
    case 10:
    case 11:
      return 80;
    case 12:
    case 13:
    case 14:
      return 70;
    default:
      return 65;
  }
};
