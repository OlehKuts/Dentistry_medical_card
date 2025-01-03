export const diagnosisCreator = (
  type,
  tooth,
  woundType,
  woundArea,
  woundSide,
  perioTeeth,
  _changedList = [{ id: 55, name: 55, status: "" }],
  abscessType,
  abscessArea,
  abscessSide,
  abscessReason,
  abscessTooth,
  cystTooth,
  cystType,
  retention1,
  retention2,
  retention3,
  retention4,
  neoplasmType,
  neoplasmArea,
  neoplasmSide,
  fractureLowerArea1,
  fractureLowerSide1,
  fractureLowerBias1,
  fractureLowerTooth1a,
  fractureLowerTooth1b,
  fractureLowerTeethInLine1,
  bilateralismLower,
  fractureLowerArea2,
  fractureLowerSide2,
  fractureLowerBias2,
  fractureLowerTooth2a,
  fractureLowerTooth2b,
  fractureLowerTeethInLine2,
  dlType,
  dlType2,
  dlTooth1,
  dlTooth2,
  dlTooth3,
  dlTooth4,
  dlTooth5,
  dlTooth6,
  overCompleteTooth1,
  overCompleteTooth2,
  overCompleteTooth3,
  overCompleteTooth4,
  overCompleteAmount,
  dlTooth7,
  dlTooth8
) => {
  const ocArea1 = `${overCompleteTooth1},${overCompleteTooth2} зубів`;
  const ocArea2 =
    overCompleteTooth3 === "" || overCompleteTooth4 === ""
      ? ``
      : ` та ${overCompleteTooth3},${overCompleteTooth4} зубів`;
  const ocAmountStr =
    overCompleteAmount === 1
      ? `надкомплектний дистопований зуб `
      : `надкомплектні дистоповані зуби `;
  const overCompleteTemplate = `${ocAmountStr} в ділянці ${ocArea1}${ocArea2}.`;
  const dlTeethList1 = [dlTooth1, dlTooth2, dlTooth3, dlTooth4].filter(
    (t) => t !== ""
  );
  const dlTeethList2 = [dlTooth5, dlTooth6, dlTooth7, dlTooth8].filter(
    (t) => t !== ""
  );
  const dlToothStr1 = dlTeethList1.length > 1 ? `зубів` : `зуба`;
  const dlToothStr2 = dlTeethList2.length > 1 ? `зубів` : `зуба`;
  const dlPart1 = `${dlType} вивих ${dlTeethList1.join(", ")} ${dlToothStr1}`;
  const dlPart2 =
    dlType2 === ""
      ? ``
      : `; ${dlType2} вивих ${dlTeethList2.join(", ")} ${dlToothStr2}`;

  const dlTemplate = `${dlPart1}${dlPart2}.`;
  const lb = bilateralismLower;
  const flToothCreator = (teethInLine, a, b) => {
    let str =
      teethInLine === "between"
        ? `між ${a} та ${b} зубами`
        : teethInLine === "through"
        ? ` через ${a} зуб`
        : ``;
    return str;
  };
  const flAreaMonoCreator = (area) => {
    let str =
      area === `тіла` || area === `гілки` || area === `суглобового відростка`
        ? `перелом нижньої щелепи в ділянці ${area}`
        : `${area} перелом нижньої щелепи `;
    return str;
  };
  const flAreaBeCreator = (area) => {
    let str =
      area === `тіла` || area === `гілки` || area === `суглобового відростка`
        ? `в ділянці ${area} `
        : `${area} `;
    return str;
  };
  const flCreator = (
    area1,
    area2,
    side1,
    side2,
    a1,
    b1,
    a2,
    b2,
    teethInLine1,
    teethInLine2,
    bias1,
    bias2,
    lb
  ) => {
    const dislocation1 = `травматичний  переломо–вивих суглобового відростка нижньої щелепи ${side1}`;
    const dislocation2 = `травматичний  переломо–вивих суглобового відростка нижньої щелепи ${side2}`;
    const dislocationBoth = `травматичний  двобічний переломо–вивих суглобових відростків нижньої щелепи`;
    const str1Mono =
      area1 === `переломо-вивих`
        ? dislocation1
        : `травматичний ${flAreaMonoCreator(area1)}${side1} ${flToothCreator(
            teethInLine1,
            a1,
            b1
          )} ${bias1} уламків`;
    const str1Be =
      area1 === `переломо-вивих`
        ? dislocation1
        : `травматичний двобічний перелом нижньої щелепи: ${side1} - ${flAreaBeCreator(
            area1
          )} ${flToothCreator(teethInLine1, a1, b1)} ${bias1} уламків`;
    const str2 =
      area2 === `переломо-вивих`
        ? dislocation2
        : `${side2} - ${flAreaBeCreator(area2)} ${flToothCreator(
            teethInLine2,
            a2,
            b2
          )} ${bias2} уламків`;
    const finalStr =
      lb && str1Be === dislocation1 && str2 === dislocation2
        ? dislocationBoth
        : lb && str1Be === dislocation1
        ? `${str1Be}. Травматичний перелом нижньої щелепи ${str2}`
        : lb && str2 === dislocation2
        ? `${str2}; ${str1Mono}`
        : lb
        ? `${str1Be}; ${str2}`
        : `${str1Mono}`;
    return `${finalStr}.`;
  };
  const fractureLowerJawTemplate = flCreator(
    fractureLowerArea1,
    fractureLowerArea2,
    fractureLowerSide1,
    fractureLowerSide2,
    fractureLowerTooth1a,
    fractureLowerTooth1b,
    fractureLowerTooth2a,
    fractureLowerTooth2b,
    fractureLowerTeethInLine1,
    fractureLowerTeethInLine2,
    fractureLowerBias1,
    fractureLowerBias2,
    lb
  );
  const neoplasmTemplate = `${neoplasmType} ${neoplasmArea} ${neoplasmSide}.`;
  const retentionList = [retention1, retention2, retention3, retention4];
  const filteredRetentionList = retentionList.filter((r) => r !== "");
  const retentionFinishing =
    filteredRetentionList.length === 1 ? `зуба` : `зубів`;
  const retentionTemplate = `ретенція ${filteredRetentionList.join(
    ","
  )} ${retentionFinishing}.`;
  const strCystTooth = cystTooth.toString();
  const cystSide = Number(strCystTooth[0]) % 4 < 2 ? `праворуч` : `ліворуч`;
  const cystJaw =
    Number(strCystTooth[0]) % 4 === 1 || Number(strCystTooth[0]) % 4 === 2
      ? `верхньої щелепи`
      : `нижньої щелепи`;
  const cystTemplate = `${cystType} ${cystJaw} ${cystSide} від ${cystTooth} зуба.`;
  const aReason =
    abscessReason === "лімфовузол"
      ? `адено`
      : abscessTooth !== "" && abscessType === `абсцес`
      ? `одонтогенний `
      : abscessTooth !== "" && abscessType === `флегмона`
      ? `одонтогенна `
      : ``;
  const aArea =
    abscessArea === "в ділянці сонного трикутника" ||
    abscessArea === "крило-щелепного простору" ||
    abscessArea[abscessArea.length - 1] === "и"
      ? abscessArea
      : `${abscessArea} ділянки`;
  const aTooth = abscessTooth !== "" ? `від R${abscessTooth} зуба` : ``;
  const abscessTemplate =
    abscessArea === "твердого піднебіння" ||
    abscessArea === "щелепно-язикового жолобка"
      ? `одонтогенний абсцес ${abscessArea} ${abscessSide} ${aTooth}.`
      : abscessArea === "дна порожнини рота"
      ? `одонтогенна флегмона дна порожнини рота ${aTooth}.`
      : abscessReason === "лімфовузол" && abscessType === "лімфаденіт"
      ? `гострий лімфаденіт ${aArea} ${abscessSide}.`
      : abscessReason === "лімфовузол" && abscessType === " гнійний лімфаденіт"
      ? `гострий гнійний лімфаденіт ${aArea} ${abscessSide}.`
      : abscessType === "фурункул"
      ? `абсцедуючий фурункул ${aArea} ${abscessSide}.`
      : abscessType === "сіалоаденіт"
      ? `гострий бактеріальний привушний сіалоаденіт ${abscessSide}.`
      : `${aReason}${abscessType} ${aArea} ${abscessSide} ${aTooth}.`;
  let changedList = _changedList || [{ id: 55, name: 55, status: "" }];
  let pulpitList = changedList
    .filter((item) => item.status === "P")
    .map((item) => item.id);
  let perioList = changedList
    .filter((item) => item.status === "Pt")
    .map((item) => item.id);
  let sanationPulpit = "";
  let sanationPerio = "";
  pulpitList.length === 1
    ? (sanationPulpit = `Хронічний пульпіт ${pulpitList[0]} зуба. `)
    : pulpitList.length > 1
    ? (sanationPulpit = `Хронічний пульпіт ${pulpitList.join(", ")} зубів.`)
    : (sanationPulpit = ``);
  perioList.length === 1
    ? (sanationPerio = `Хронічний гранулематозний періодонтит ${perioList[0]} зуба.`)
    : perioList.length > 1
    ? (sanationPerio = `Хронічний гранулематозний періодонтит ${perioList.join(
        ", "
      )} зубів.`)
    : (sanationPerio = ``);

  const aDeep = changedList
    .filter((c) => c.disease === "acuteDeep")
    .map((c) => c.id);
  const aDeepStr =
    aDeep.length === 1
      ? `гострий глибокий карієс ${aDeep[0]} зуба`
      : aDeep.length > 1
      ? `гострий глибокий карієс ${aDeep.join(", ")} зубів`
      : ``;
  const aMiddle = changedList
    .filter((c) => c.disease === "acuteMiddle")
    .map((c) => c.id);
  const aMiddleStr =
    aMiddle.length === 1
      ? `гострий середній карієс ${aMiddle[0]} зуба`
      : aMiddle.length > 1
      ? `гострий середній карієс ${aMiddle.join(", ")} зубів`
      : ``;
  const aFacial = changedList
    .filter((c) => c.disease === "acuteFacial")
    .map((c) => c.id);
  const aFacialStr =
    aFacial.length === 1
      ? `гострий поверхневий карієс ${aFacial[0]} зуба`
      : aFacial.length > 1
      ? `гострий поверхневий карієс ${aFacial.join(", ")} зубів`
      : ``;
  const cDeep = changedList
    .filter((c) => c.disease === "chronicDeep")
    .map((c) => c.id);
  const cDeepStr =
    cDeep.length === 1
      ? `хронічний глибокий карієс ${cDeep[0]} зуба`
      : cDeep.length > 1
      ? `хронічний глибокий карієс ${cDeep.join(", ")} зубів`
      : ``;
  const cMiddle = changedList
    .filter((c) => c.disease === "chronicMiddle")
    .map((c) => c.id);
  const cMiddleStr =
    cMiddle.length === 1
      ? `хронічний середній карієс ${cMiddle[0]} зуба`
      : cMiddle.length > 1
      ? `хронічний середній карієс ${cMiddle.join(", ")} зубів`
      : ``;
  const cFacial = changedList
    .filter((c) => c.disease === "chronicFacial")
    .map((c) => c.id);
  const cFacialStr =
    cFacial.length === 1
      ? `хронічний поверхневий карієс ${cFacial[0]} зуба`
      : cFacial.length > 1
      ? `хронічний поверхневий карієс ${cFacial.join(", ")} зубів`
      : ``;
  const cariesPartList = [
    aDeepStr,
    aMiddleStr,
    aFacialStr,
    cDeepStr,
    cMiddleStr,
    cFacialStr
  ].filter((s) => s !== "");
  const cariesPart = `${cariesPartList.join(", ")}.`;
  const cariesTemplate = `${cariesPart} ${sanationPulpit} ${sanationPerio}`;
  //-----
  let perioTeethContent = "";
  perioTeeth.length === 2
    ? (perioTeethContent = `Хронічний гранулематозний періодонтит ${perioTeeth} зуба.`)
    : perioTeeth.length > 2
    ? (perioTeethContent = `Хронічний гранулематозний періодонтит ${perioTeeth} зубів.`)
    : (perioTeethContent = "");
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
        return `гострий гнійний одонтогенний періостит верхньої щелепи праворуч від R${tooth} зуба. ${perioTeethContent}`;
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
        return `гострий гнійний одонтогенний періостит верхньої щелепи ліворуч від R${tooth} зуба. ${perioTeethContent}`;
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
        return `гострий гнійний одонтогенний періостит нижньої щелепи ліворуч від R${tooth} зуба. ${perioTeethContent}`;
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
        return `гострий гнійний одонтогенний періостит нижньої щелепи праворуч від R${tooth} зуба. ${perioTeethContent}`;
      default:
        return "гострий гнійний одонтогенний періостит верхньої щелепи праворуч. ";
    }
  } else if (type === "periodontit") {
    return `загострення хронічного періодонтиту ${tooth} зуба. ${perioTeethContent}`;
  } else if (type === "skinWound") {
    return `${woundType} рана ${woundArea} ${woundSide}.`;
  } else if (type === "tongueBridle") {
    return `коротка вуздечка язика.`;
  } else if (type === "lipBridle") {
    return `коротка вуздечка верхньої губи.`;
  } else if (type === "caries") {
    return cariesTemplate;
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
