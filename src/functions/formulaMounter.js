import { permanentTemplate } from "../templates";

export const formulaMounter = (template, age, changedList) => {
  let newFormula = [];
  let numAge = Number(age);
  switch (numAge) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      newFormula = template;
      break;
    case 6:
      newFormula = template.map(function (item) {
        if (item.id % 10 === 6) {
          item.name = item.id;
        }
        return item;
      });
      break;
    case 7:
      newFormula = template.map(function (item) {
        if (item.id % 10 === 6) {
          item.name = item.id;
        }
        if (item.id % 10 === 1) {
          item.name = Number(item.name) - 20;
          item.id = Number(item.id) - 20;
        }
        return item;
      });
      break;
    case 8:
      newFormula = template.map(function (item) {
        if (item.id % 10 === 6) {
          item.name = item.id;
        }
        if (item.id % 10 === 2 || item.id % 10 === 1) {
          item.name = Number(item.name) - 20;
          item.id = Number(item.id) - 20;
        }
        return item;
      });
      break;
    case 9:
      newFormula = template.map(function (item) {
        if (item.id % 10 === 6) {
          item.name = item.id;
        }
        if (item.id % 10 === 4 || item.id % 10 === 2 || item.id % 10 === 1) {
          item.name = Number(item.name) - 20;
          item.id = Number(item.id) - 20;
        }
        return item;
      });
      break;
    case 10:
      newFormula = template.map(function (item) {
        if (item.id % 10 === 6) {
          item.name = item.id;
        }
        if (
          item.id % 10 === 3 ||
          item.id % 10 === 4 ||
          item.id % 10 === 2 ||
          item.id % 10 === 1
        ) {
          item.name = Number(item.name) - 20;
          item.id = Number(item.id) - 20;
        }
        return item;
      });
      break;
    case 11:
    case 12:
      newFormula = template.map(function (item) {
        if (item.id % 10 === 6) {
          item.name = item.id;
        }
        if (
          item.id % 10 === 5 ||
          item.id % 10 === 3 ||
          item.id % 10 === 4 ||
          item.id % 10 === 2 ||
          item.id % 10 === 1
        ) {
          item.name = Number(item.name) - 20;
          item.id = Number(item.id) - 20;
        }
        return item;
      });
      break;
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
      newFormula = permanentTemplate;
      break;
    default:
      newFormula = template;
  }
  let finalFormula = newFormula.filter((item) => item.name !== "");
  if (changedList.length) {
    for (let i = 0; i < changedList.length; i++) {
      finalFormula.map(function (item) {
        if (item.id === changedList[i].id) {
          item.status = changedList[i].status;
          item.disease = changedList[i].disease;
        }
        return item;
      });
    }
  }
  return finalFormula;
};

export const finalFormulaMounter = (formula, changedList) => {
  if (changedList.length) {
    for (let i = 0; i < changedList.length; i++) {
      formula.map(function (item) {
        if (item.id === changedList[i].id) {
          item.status = changedList[i].status;
          item.disease = changedList[i].disease;
        }
        return item;
      });
    }
  }
  return formula;
};
