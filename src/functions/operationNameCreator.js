export const operationNameCreator = (
  type,
  tooth,
  woundArea,
  woundSide,
  perioTeeth,
  abscessType,
  abscessArea,
  abscessSide,
  cystTooth,
  cystType,
  retention1,
  retention2,
  retention3,
  retention4,
  neoplasmArea,
  neoplasmSide,
  dlTooth1,
  dlTooth2,
  dlTooth3,
  dlTooth4,
  dlTooth5,
  dlTooth6,
  dlOperationType,
  dlOperationType2,
  overCompleteAmount,
  dlTooth7,
  dlTooth8,
  dlType,
  dlType2
) => {
  const overCompleteTemplate =
    overCompleteAmount === 1
      ? `видалення надкомплектного зуба. `
      : `видалення надкомплектних зубів. `;
  const dlTeethList1 = [dlTooth1, dlTooth2, dlTooth3, dlTooth4].filter(
    (t) => t !== ""
  );
  const dlTeethList2 = [dlTooth5, dlTooth6, dlTooth7, dlTooth8].filter(
    (t) => t !== ""
  );
  const dlToothStr1 = dlTeethList1.length > 1 ? `зубів` : `зуба`;
  const dlToothStr2 = dlTeethList2.length > 1 ? `зубів` : `зуба`;
  const dlContentCreator = (type, teethList, toothStr) => {
    const extractionStr = `видалення ${teethList.join(", ")} ${toothStr}. `;
    const splintingStr = `${
      dlType === "повний" || dlType2 === "повний" ? "реплантація" : "репозиція"
    }, фіксація та імобілізація ${teethList.join(", ")} ${toothStr}. `;
    const finalStr =
      type === `splinting` || type === `suturing` || type === `retainer`
        ? splintingStr
        : extractionStr;
    return finalStr;
  };
  const dlPart1 = `${dlContentCreator(
    dlOperationType,
    dlTeethList1,
    dlToothStr1
  )}`;
  const dlPart2 =
    dlOperationType2 === ""
      ? ""
      : `${dlContentCreator(dlOperationType2, dlTeethList2, dlToothStr2)} `;
  const dlTemplate = `${dlPart1}${dlPart2}`;
  const fractureLowerJawTemplate = `репозиція, фіксація та імобілізація нижньої щелепи.`;
  const neoplasmTemplate = `ексцизійна біопсія новоутвору ${neoplasmArea} ${neoplasmSide}.`;
  const retentionList = [retention1, retention2, retention3, retention4];
  const filteredRetentionList = retentionList.filter((r) => r !== "");
  const retentionFinishing =
    filteredRetentionList.length === 1 ? `зуба` : `зубів`;
  const retentionMiddle =
    filteredRetentionList.length === 1 ? `ретенованого ` : `ретенованих `;
  const retentionTemplate = `атипове видалення ${retentionMiddle}${filteredRetentionList.join(
    ","
  )} ${retentionFinishing}.`;
  const strCystTooth = cystTooth.toString();
  const cystSide = Number(strCystTooth[0]) % 4 < 2 ? `праворуч` : `ліворуч`;
  const cystJaw =
    Number(strCystTooth[0]) % 4 === 1 || Number(strCystTooth[0]) % 4 === 2
      ? `верхньої щелепи`
      : `нижньої щелепи`;
  const cystTemplate =
    cystType === `апікальна кістогранульома`
      ? `кістогранульомектомія ${cystTooth} зуба ${cystJaw} ${cystSide}.`
      : `цистектомія ${cystJaw} ${cystSide}.`;
  const aType =
    abscessType === `абсцес` ||
    abscessType === `лімфаденіт` ||
    abscessType === `фурункул`
      ? `абсцесу`
      : `${abscessType.slice(0, -1)}и`;
  const aArea =
    abscessArea === "в ділянці сонного трикутника" ||
    abscessArea === "крило-щелепного простору" ||
    "щелепно-язикового жолобка" ||
    abscessArea[abscessArea.length - 1] === "и"
      ? abscessArea
      : `${abscessArea} ділянки`;
  const abscessTemplate =
    abscessArea === "твердого піднебіння"
      ? `розкриття абсцесу ${abscessArea} ${abscessSide}.`
      : abscessArea === "дна порожнини рота"
      ? `розкриття та дренування флегмони дна порожнини рота.`
      : `розкриття та дренування ${aType} ${aArea} ${abscessSide}.`;
  let perioTeethContent = "";
  let perioTeethContentForPt = "";
  perioTeeth.length === 2
    ? (perioTeethContent = `Видалення ${perioTeeth} зуба.`)
    : perioTeeth.length > 2
    ? (perioTeethContent = `Видалення ${perioTeeth} зубів.`)
    : (perioTeethContent = "");
  perioTeeth === ""
    ? (perioTeethContentForPt = `Видалення ${tooth} зуба.`)
    : (perioTeethContentForPt = `Видалення ${tooth}, ${perioTeeth} зубів.`);
  if (type === "periostit") {
    switch (Number(tooth)) {
      case 54:
      case 55:
      case 14:
      case 15:
      case 16:
      case 17:
      case 18:
      case 51:
      case 52:
      case 53:
      case 11:
      case 12:
      case 13:
        return `розкриття та дренування субперіостального абсцесу верхньої щелепи праворуч. ${perioTeethContent}`;
      case 64:
      case 65:
      case 24:
      case 25:
      case 26:
      case 27:
      case 28:
      case 61:
      case 62:
      case 63:
      case 21:
      case 22:
      case 23:
        return `розкриття та дренування субперіостального абсцесу верхньої щелепи ліворуч. ${perioTeethContent}`;
      case 74:
      case 75:
      case 34:
      case 35:
      case 36:
      case 37:
      case 38:
      case 71:
      case 72:
      case 73:
      case 31:
      case 32:
      case 33:
        return `розкриття та дренування субперіостального абсцесу нижньої щелепи ліворуч. ${perioTeethContent}`;
      case 84:
      case 85:
      case 44:
      case 45:
      case 46:
      case 47:
      case 48:
      case 81:
      case 82:
      case 83:
      case 41:
      case 42:
      case 43:
        return `розкриття та дренування субперіостального абсцесу нижньої щелепи праворуч. ${perioTeethContent}`;
      default:
        return `розкриття та дренування субперіостального абсцесу. ${perioTeethContent}`;
    }
  } else if (type === "periodontit") {
    return perioTeethContentForPt;
  } else if (type === "skinWound") {
    return `ПХО рани ${woundArea}${woundSide}.`;
  } else if (type === "tongueBridle") {
    return `пластична френулотомія язика.`;
  } else if (type === "lipBridle") {
    return `пластична френулотомія верхньої губи.`;
  } else if (type === "caries") {
    return `санація порожнини рота.`;
  } else if (type === "abscess") {
    return abscessTemplate;
  } else if (type === "cyst") {
    return cystTemplate;
  } else if (type === "retention") {
    return retentionTemplate;
  } else if (type === "neoplasm") {
    return neoplasmTemplate;
  } else if (type === "fractureLowerJaw") {
    return fractureLowerJawTemplate;
  } else if (type === "dislocationTooth") {
    return dlTemplate;
  } else if (type === "overComplete") {
    return overCompleteTemplate;
  }
};
