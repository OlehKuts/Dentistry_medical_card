import { lastDayCreator } from "./lastDayCreator";
import { someDayCreator } from "./someDayCreator";

export const hrCounter = (rate) => {
  let numRate = Number(rate);
  let randomInc = Number((Math.random() * 3).toFixed(0));
  numRate = numRate + randomInc;
  return numRate;
};
export const rrCounter = (rate) => {
  let numRate = Number(rate);
  let randomInc = Number((Math.random() * 5).toFixed(0));
  numRate = numRate + randomInc;
  return numRate;
};

const workDayChecker = (day, month, year) => {
  let correctMonth = Number(month) - 1;
  let checkedDate = new Date(year, correctMonth, day);
  let checkedDay = checkedDate.getDay();
  if (Number(checkedDay) === 0 || Number(checkedDay) === 6) {
    return false;
  } else {
    return true;
  }
};

const countDiaryDays = (startDay, startMonth, lastDay, lastMonth) => {
  let daysAmount = {};
  if (startMonth === lastMonth) {
    daysAmount.firstMonth = lastDay - startDay;
    daysAmount.secondMonth = 0;
  }
  if (startMonth + 1 === lastMonth) {
    switch (startMonth) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        daysAmount.firstMonth = 31 - startDay;
        daysAmount.secondMonth = lastDay;
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        daysAmount.firstMonth = 30 - startDay;
        daysAmount.secondMonth = lastDay;
        break;
      case 2:
        daysAmount.firstMonth = 28 - startDay;
        daysAmount.secondMonth = lastDay;
        break;
      default:
        daysAmount.firstMonth = 0;
        daysAmount.secondMonth = 0;
    }
  }
  return daysAmount;
};

export const diaryListCreator = (
  startDay,
  startMonth,
  startYear,
  lastDay,
  lastMonth,
  lastYear,
  patient
) => {
  const startDayNum = Number(startDay);
  const startMonthNum = Number(startMonth);
  const startYearNum = Number(startYear);
  const lastDayNum = Number(lastDay);
  const lastMonthNum = Number(lastMonth);
  const lastYearNum = Number(lastYear);
  const {
    disease,
    toothCasual,
    abscessArea,
    abscessSide,
    abscessType,
    cystTooth,
    retention1,
    retention2,
    retention3,
    retention4,
    neoplasmSurface,
    fractureLowerArea1,
    fractureLowerSide1,
    fractureLowerArea2,
    fractureLowerSide2,
    bilateralismLower,
    dlTooth1,
    dlTooth2,
    dlTooth3,
    dlTooth4,
    dlTooth5,
    dlTooth6,
    dlOperationType,
    dlOperationType2,
    overCompleteTooth3,
    overCompleteTooth4,
    dlTooth7,
    dlTooth8,
  } = patient;

  let dList = [];
  let daysAmount = countDiaryDays(
    startDayNum,
    startMonthNum,
    lastDayNum,
    lastMonthNum
  );
  if (daysAmount.firstMonth !== 0) {
    for (let i = 1; i < Number(daysAmount.firstMonth) + 1; i++) {
      dList.push({
        date: `${startDayNum + i}.${startMonthNum}.${startYearNum}`,
        workDay: workDayChecker(startDayNum + i, startMonthNum, startYearNum),
      });
    }
  }
  if (daysAmount.secondMonth !== 0) {
    for (let j = 1; j < Number(daysAmount.secondMonth) + 1; j++) {
      dList.push({
        date: `${Number(j)}.${lastMonthNum}.${lastYearNum}`,
        workDay: workDayChecker(Number(j), lastMonthNum, lastYearNum),
      });
    }
  }
  const basicGeneral =
    "Свідомість ясна, шкірні покриви чисті. Серцева діяльність ритмічна, тони чисті, звучні. Перкуторно ясний легеневий звук. Везикулярне дихання. Живіт при пальпації м’який, безболісний. Печінка не збільшена. Нирки та селезінка не пальпуються. Фізіологічні відправлення не порушені.";
  const casualGeneral = `Загальний стан дитини близький до задовільного. ${basicGeneral}`;
  const finalGeneral = `Загальний стан дитини задовільний. Скарги відсутні. ${basicGeneral}`;
  const casualLocal = someDayCreator(
    disease,
    toothCasual,
    abscessArea,
    abscessSide,
    abscessType,
    cystTooth,
    retention1,
    retention2,
    retention3,
    retention4,
    neoplasmSurface,
    fractureLowerArea1,
    fractureLowerSide1,
    fractureLowerArea2,
    fractureLowerSide2,
    bilateralismLower,
    dlTooth1,
    dlTooth2,
    dlTooth3,
    dlTooth4,
    dlTooth5,
    dlTooth6,
    dlOperationType,
    dlOperationType2,
    overCompleteTooth3,
    overCompleteTooth4,
    dlTooth7,
    dlTooth8
  );
  const finalLocal = lastDayCreator(
    disease,
    retention1,
    retention2,
    retention3,
    retention4,
    dlTooth1,
    dlTooth2,
    dlTooth3,
    dlTooth4,
    dlTooth5,
    dlTooth6,
    dlOperationType,
    dlOperationType2,
    overCompleteTooth3,
    overCompleteTooth4,
    abscessArea,
    dlTooth7,
    dlTooth8,
    abscessType
  );
  const finalList = dList.map((item, idx) => {
    return {
      ...item,
      id: Math.random(),
      generalStatus: dList.length - 1 === idx ? finalGeneral : casualGeneral,
      localStatus: dList.length - 1 === idx ? finalLocal : casualLocal,
    };
  });
  return finalList;
};
