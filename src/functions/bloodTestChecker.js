export const bloodTestChecker = (test = []) => {
  let answer = test.map((i, idx) => {
    let current = Number[i];
    switch (idx) {
      case 0:
        current = i < 110 ? true : false;
        break;
      case 1:
        current = i < 3.7 ? true : false;
        break;
      case 2:
        current = i > 9 || i < 4 ? true : false;
        break;
      case 8:
        current = i > 15 ? true : false;
        break;
      default:
        current = false;
    }
    return current;
  });
  return answer;
};
