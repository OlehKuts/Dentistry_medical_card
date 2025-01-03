export const respiratoryRateCounter = (age) => {
  switch (Number(age)) {
    case 0:
      return 35;
    case 1:
    case 2:
    case 3:
      return 30;
    case 4:
    case 5:
    case 6:
      return 25;
    case 7:
    case 8:
    case 9:
      return 22;
    case 10:
    case 11:
    case 12:
      return 20;
    case 13:
    case 14:
    case 15:
      return 18;
    default:
      return 16;
  }
};
