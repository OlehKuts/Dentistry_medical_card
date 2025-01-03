export const templateMounter = (formula, age) => {
  let newFormula = [];
  let numAge = Number(age);
  switch (numAge) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      newFormula = formula;
      break;
    case 6:
      newFormula = formula.map(function (item) {
        if (item.id % 10 === 6) {
          item.name = item.id;
        }
        return item;
      });
      break;
    case 7:
      newFormula = formula.map(function (item) {
        if (item.id % 10 === 6) {
          item.name = item.id;
        }
        if (item.id % 10 === 1) {
          item.name = Number(item.name - 40);
          item.id = Number(item.id - 40);
        }
        return item;
      });
      break;
    case 8:
      newFormula = formula.map((item) =>
        item.id % 10 === 6 ? (item.name = item.id) : item
      );
      newFormula = formula.map(function (item) {
        if (item.id % 10 === 2 || item.id % 10 === 1) {
          item.name = item.name - 40;
          item.id = item.id - 40;
        }
        return item;
      });
      break;
    case 9:
      newFormula = formula.map((item) =>
        item.id % 10 === 6 ? (item.name = item.id) : item
      );
      newFormula = formula.map(function (item) {
        if (item.id % 10 === 4 || item.id % 10 === 2 || item.id % 10 === 1) {
          item.name = item.name - 40;
          item.id = item.id - 40;
        }
        return item;
      });
      break;
    case 10:
      newFormula = formula.map((item) =>
        item.id % 10 === 6 ? (item.name = item.id) : item
      );
      newFormula = formula.map(function (item) {
        if (
          item.id % 10 === 3 ||
          item.id % 10 === 4 ||
          item.id % 10 === 2 ||
          item.id % 10 === 1
        ) {
          item.name = item.name - 40;
          item.id = item.id - 40;
        }
        return item;
      });
      break;
    case 11:
    case 12:
      newFormula = formula.map((item) =>
        item.id % 10 === 6 ? (item.name = item.id) : item
      );
      newFormula = formula.map(function (item) {
        if (
          item.id % 10 === 5 ||
          item.id % 10 === 3 ||
          item.id % 10 === 4 ||
          item.id % 10 === 2 ||
          item.id % 10 === 1
        ) {
          item.name = item.name - 40;
          item.id = item.id - 40;
        }
        return item;
      });
      break;
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
      newFormula = formula.map((item) =>
        item.id % 10 === 6 || item.id % 10 === 7 ? (item.name = item.id) : item
      );
      newFormula = formula.map(function (item) {
        if (
          item.id % 10 === 5 ||
          item.id % 10 === 3 ||
          item.id % 10 === 4 ||
          item.id % 10 === 2 ||
          item.id % 10 === 1
        ) {
          item.name = item.name - 40;
          item.id = item.id - 40;
        }
        return item;
      });
      break;
    default:
      newFormula = formula;
  }
  newFormula = newFormula.filter((item) => item.name !== "");
  return newFormula;
};
