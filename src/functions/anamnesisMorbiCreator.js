export const anamnesisMorbiCreator = (
  type,
  tooth,
  start1,
  start2,
  injuryDate,
  injuryTime,
  injuryReason,
  abscessType,
  abscessReason,
  abscessSide,
  cystTooth,
  cystType,
  rootSealed,
  neoplasmGrowthRate
) => {
  const neoplasmTemplate = `зі слів батьків, хворіє тривалий час, новоутвір з’явився непомітно і збільшувався ${neoplasmGrowthRate}.`;
  const rootStatus =
    rootSealed === `rootSealed`
      ? `По місцю проживання ${cystTooth} зуб було запломбовано.`
      : rootSealed === `rootSealedNot`
      ? `По місцю проживання ${cystTooth} зуб було розкрито. Надалі не піддавався лікуванню. Не витримував герметизму.`
      : ``;
  const cystFinishing =
    cystType === `апікальна кістогранульома`
      ? ` ${rootStatus}`
      : `Деформація з’явилася непомітно та збільшувалася поволі.`;
  const cystTemplate = `зі слів батьків, хворіє тривалий час. ${cystFinishing}`;
  const retentionTemplate = `зі слів батьків, хворіє тривалий час.`;
  let _injuryTime = injuryTime === "" ? "" : `о ${injuryTime} год`;
  const injuryTemplate = `зі слів батьків, травма відбулась ${injuryDate} ${_injuryTime}, в результаті ${injuryReason}. Дитина свідомості не втрачала, не нудило.`;
  const beginning = `зі слів батьків, хворіє ${start1}-й ${start2}.`;
  const abscessFinishing =
    abscessReason === "лімфовузол"
      ? "Захворювання пов'язують зі запаленням лімфовузла у цій ділянці."
      : abscessType === "фурункул"
      ? `Захворювання пов'язують зі спробою вичавити "прищ".`
      : abscessReason === "зуб"
      ? `Захворювання пов'язують з тривалими болями від каріозного зуба ${abscessSide}.`
      : "Захворювання ні з чим не пов'язують.";
  if (type === "periostit") {
    switch (Number(tooth)) {
      case 54:
      case 55:
      case 14:
      case 15:
      case 16:
      case 17:
      case 18:
        return `${beginning} Захворювання почалось із болі у правому верхньому кутньому зубі.`;
      case 64:
      case 65:
      case 24:
      case 25:
      case 26:
      case 27:
      case 28:
        return `${beginning} Захворювання почалось із болі у лівому верхньому кутньому зубі.`;
      case 74:
      case 75:
      case 34:
      case 35:
      case 36:
      case 37:
      case 38:
        return `${beginning} Захворювання почалось із болі у лівому нижньому кутньому зубі.`;
      case 84:
      case 85:
      case 44:
      case 45:
      case 46:
      case 47:
      case 48:
        return `${beginning} Захворювання почалось із болі у правому нижньому кутньому зубі.`;
      case 51:
      case 52:
      case 53:
      case 11:
      case 12:
      case 13:
        return `${beginning} Захворювання почалось із болі у правому верхньому центральному  зубі.`;
      case 61:
      case 62:
      case 63:
      case 21:
      case 22:
      case 23:
        return `${beginning} Захворювання почалось із болі у лівому верхньому центральному зубі.`;
      case 71:
      case 72:
      case 73:
      case 31:
      case 32:
      case 33:
        return `${beginning} Захворювання почалось із болі у лівому нижньому центральому зубі.`;
      case 81:
      case 82:
      case 83:
      case 41:
      case 42:
      case 43:
        return `${beginning} Захворювання почалось із болі у правому нижньому центральному зубі.`;
      default:
        return `${beginning} Захворювання почалось із болі у зубі.`;
    }
  } else if (type === "periodontit") {
    return `${beginning} Схожі скарги тривають протягом останнього року. Амбулаторно видалення причинного зуба не було проведено через емоційну нестабільність дитини.`;
  } else if (
    type === "skinWound" ||
    type === "fractureLowerJaw" ||
    type === "dislocationTooth"
  ) {
    return injuryTemplate;
  } else if (type === "tongueBridle" || type === "lipBridle") {
    return `${beginning}`;
  } else if (type === "caries") {
    return `зі слів батьків, хворіє тривалий час.`;
  } else if (type === "abscess") {
    return `${beginning} ${abscessFinishing}`;
  } else if (type === "cyst") {
    return cystTemplate;
  } else if (type === "retention" || type === "overComplete") {
    return retentionTemplate;
  } else if (type === "neoplasm") {
    return neoplasmTemplate;
  } else {
    return retentionTemplate;
  }
};
