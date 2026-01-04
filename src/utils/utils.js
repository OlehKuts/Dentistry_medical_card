export function isJsonString(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

export const exceedReminder = (length) => {
  if (length > 440) {
    alert(
      "Сховище майже переповнене! Кількість збережених медичних карт перевищила допустиму межу. Видаліть несуттєві медичні карти, попередньо експортуйтувавши дані або видаліть їх безповоротно."
    );
  };
};

export const setOneTrueInArray = (array, index) => {
  return array.map((item, idx) => (idx === index ? true : false));
};
export const capitalizeFirstSign = (str) => {
  return `${str.slice(0, 1).toUpperCase()}${str.slice(1)}`;
};
export const isDiseaseUrgent = (disease) => {
  let result = false;
  switch (disease) {
    case "періодонтит":
    case "періостит":
    case "абсцес обличчя":
    case "рана обличчя":
    case "вивих зуба":
    case "перелом нижньої щелепи":
      result = true;
      break;
    default:
      result = false;
  }
  return result;
};

export const progressChecker = function () {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result = arguments[i] ? result + 10 : result;
  }
  return result;
};

export const numArrayCreator = (first, quantity) => {
  let arr = [];
  for (let i = first; i < quantity + 1; i++) {
    arr.push(i);
  }
  return arr;
};
export const getResidence = (features) => {
  const { town, street, district, fullAdress, adress, building, letter, flat } =
    features;
  let realFlat = flat ? `/${flat}` : "";
  let result =
    town !== ""
      ? `м.${town}, вул.${street} ${building}${letter}${realFlat}`
      : district !== ""
      ? `${district}, ${adress}`
      : fullAdress !== ""
      ? fullAdress
      : "";
  return `${result}`;
};

export const randomizer = () => {
  const randomNumber = (Math.random() * 10).toFixed();
  const month = Number(new Date().getMonth());
  const firstNumber = month === 0 ? 1 : month;
  return `${firstNumber}${randomNumber}`;
};
export const isRelevantDate = (startParts) => {
  const numberedParts = startParts.map((item) => Number(item));
  const initDate = new Date();
  const realDay = initDate.getDate();
  const realMonth = initDate.getMonth() + 1;
  const realYear = initDate.getFullYear();
  const result =
    (realDay === numberedParts[0] &&
      realMonth === numberedParts[1] &&
      realYear === numberedParts[2]) ||
    (realDay === numberedParts[0] + 1 &&
      realMonth === numberedParts[1] &&
      realYear === numberedParts[2]) ||
    (realDay === 1 &&
      realMonth === numberedParts[1] - 1 &&
      realYear === numberedParts[2]) ||
    (realDay === 1 && realMonth === 1 && realYear === numberedParts[2] - 1)
      ? true
      : false;
  return result;
};
export const fullNameCutter = (fullName) => {
  if (fullName === undefined) return;
  const splitedArray = fullName.includes(" ") ? fullName.split(" ") : fullName;
  return fullName.includes(" ") && splitedArray.length > 2
    ? `${splitedArray[0]} ${splitedArray[1][0]}.${splitedArray[2][0]}.`
    : fullName;
};
export const colorChecker = (morbi) => {
  const color =
    morbi === ""
      ? "white"
      : morbi === "pulpit"
      ? "silver"
      : morbi === "periodontit"
      ? "gray"
      : "lavender";
  return color;
};

export const stringCapitalizer = (str) => {
  const result =
    str.length === 0 ? "" : `${str[0].toUpperCase()}${str.slice(1)}`;
    // str.length === 0 ? "" : `${str.charAt(0).toLocaleUpperCase()}${str.substring(1)}`; // another way
  return result;
};

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
export const minutesToHoursConverter = (minutes) => {
  const numberedMins = Number(minutes);
  const mins = numberedMins % 60;
  let hours = Math.floor(numberedMins / 60).toFixed(0);
  const result =
    numberedMins < 60 ? `${mins} хв.` : `${hours} год. ${mins} хв.`;
  return result;
};

export const defineTextareaSize = (stringLength) => {
  const cols = (stringLength > 150) ? 160 : stringLength + 10;
  const rows = (stringLength > 150) ? (stringLength / 150).toFixed() : 1;
  return {cols, rows}
}
