import { lowerToothChecker, upperToothChecker } from "./checkers";
export const complaintsCreator = (
  type,
  tooth,
  woundArea,
  woundSide,
  abscessType,
  abscessArea,
  abscessSide,
  cystTooth,
  cystType,
  retention1,
  retention2,
  retention3,
  retention4,
  neoplasmPoignancy,
  neoplasmArea,
  neoplasmSide,
  fractureLowerSide1,
  fractureLowerSide2,
  dlType,
  dlTooth1,
  dlTooth2,
  dlTooth3,
  dlType2,
  dlTooth4,
  dlTooth5,
  dlTooth6,
  overCompleteTooth1,
  overCompleteTooth2,
  overCompleteLocation,
  overCompleteAmount,
  dlTooth7,
  dlTooth8
) => {
  const ocAmountStr1 = overCompleteAmount === 1 ? `лишній зуб ` : `лишні зуби `;
  const ocAmountStr2 = overCompleteAmount === 1 ? `нього ` : `них `;

  const ocTeethList = [overCompleteTooth1, overCompleteTooth2].filter(
    (t) => t !== ""
  );
  const ocCreator = (location, teethList) => {
    const middlePart =
      location === `palatine`
        ? `піднебінні`
        : lowerToothChecker(teethList)
        ? `нижній щелепі`
        : `верхній щелепі`;
    const finalStr = `на ${ocAmountStr1}на ${middlePart}, травмування до ${ocAmountStr2}язика. Порушення прикуса.`;
    return finalStr;
  };
  const overCompleteTemplate = `${ocCreator(
    overCompleteLocation,
    ocTeethList
  )}`;
  const testList = [
    dlTooth1,
    dlTooth2,
    dlTooth3,
    dlTooth4,
    dlTooth5,
    dlTooth6,
    dlTooth7,
    dlTooth8
  ];
  const dlTeethList = testList.filter((t) => t !== "");
  const lipEdema =
    upperToothChecker(dlTeethList) && lowerToothChecker(dlTeethList)
      ? `верхньої та нижньої губ`
      : lowerToothChecker(dlTeethList)
      ? `нижньої губи`
      : `верхньої губи`;
  const dlFinishing = (type, type2) => {
    let result = ``;
    result =
      type === `повний` && type2 === ``
        ? "відсутність"
        : type2 === `` ||
          (type === "неповний" && type2 === "вколочений") ||
          (type2 === "неповний" && type === "вколочений")
        ? "зміщення"
        : `відсутність та зміщення`;
    return result;
  };
  const dlToothStr =
    dlTeethList.length > 1 ? `передніх зубів` : `переднього зуба`;
  const dlTemplate = `на травму, біль та припухлість ${lipEdema}, ${dlFinishing(
    dlType,
    dlType2
  )} ${dlToothStr}.`;
  const fractureLowerSide =
    fractureLowerSide2 === `` ? fractureLowerSide1 : `з обох боків`;
  const fractureLowerJawTemplate = `на припухлість на обличчі; біль нижньої щелепи ${fractureLowerSide}, що різко посилюється при незначних рухах. Утруднене і болісне відкривання рота. `;
  const neoplasmTemplate = ` на наявність ${neoplasmPoignancy.slice(
    0,
    -2
  )}ого утворення ${neoplasmArea} ${neoplasmSide}.`;
  const retentionList = [retention1, retention2, retention3, retention4];
  const filteredRetentionList = retentionList.filter((r) => r !== "");
  const retUpperJaw = filteredRetentionList.some(
    (r) => Number(r) === 18 || Number(r) === 28
  );
  const retLowerJaw = filteredRetentionList.some(
    (r) => Number(r) === 38 || Number(r) === 48
  );
  const retentionJaw =
    retUpperJaw && retLowerJaw
      ? `верхніх та нижніх кутніх зубів.`
      : retUpperJaw
      ? `верхнього кутнього зуба.`
      : retLowerJaw
      ? `нижнього кутнього зуба.`
      : `кутнього зуба.`;
  const retentionTemplate = `на періодичні болі в ділянці ${retentionJaw}`;
  const strCystTooth = cystTooth.toString();
  const cystSide = Number(strCystTooth[0]) % 4 < 2 ? `праворуч` : `ліворуч`;
  const cystTemplate =
    cystType === `апікальна кістогранульома`
      ? `на періодичні болі в ${cystTooth} зубі, часті запальні загострення та припухання від нього.`
      : `на деформацію обличчя ${cystSide}.`;
  const abscessAreaMod =
    abscessArea === "в ділянці сонного трикутника"
      ? abscessArea
      : abscessArea[abscessArea.length - 1] === "и"
      ? `у ділянці ${abscessArea}`
      : `${abscessArea.slice(0, -2)}ій ділянці`;
  const abscessTemplate =
    abscessArea === "крило-щелепного простору"
      ? `на різкий
біль у ділянці кута щелепи ${abscessSide}, що підсилюється під час ковтання і намагання
відкрити рот, загальне знедужання, підвищення температури тіла.`
      : abscessArea === "щелепно-язикового жолобка"
      ? `біль під язиком ${abscessSide} при ковтанні, розмові, пережовуванні їжі та інших незначних рухах язика, обмежене відкривання рота, загальне знедужання, підвищення температури тіла.`
      : abscessArea === "твердого піднебіння"
      ? ` наявність болючої припухлості в ділянці ${abscessArea} ${abscessSide}, загальне знедужання, підвищення температури тіла.`
      : abscessArea === "дна порожнини рота"
      ? `  на наявність болючої припухлості тканин
      ділянки дна ротової порожнини, утруднене ковтання (неможливість вживати
      їжу), підвищення температури тіла, загальне знедужання.`
      : abscessType === "сіалоаденіт"
      ? `біль та припухлість в ділянці щоки та ближче до вуха ${abscessSide}, загальне знедужання, підвищення температури тіла.`
      : abscessType === "флегмона"
      ? ` інтенсивний біль та важкість у
  ${abscessAreaMod} ${abscessSide}, болючість під час дотику до неї, загальне знедужанння, підвищення температури тіла.`
      : abscessType === "фурункул"
      ? `на наявність пульсівного болю в ${abscessAreaMod}, зниження апетиту, підвищення температури тіла. `
      : ` на припухлість, біль та важкість
      ${abscessAreaMod}, болючість під час дотику до неї.`;
  if (type === "periostit") {
    switch (Number(tooth)) {
      case 54:
      case 55:
      case 14:
      case 15:
      case 16:
      case 17:
      case 18:
        return "наявність болючої припухлості в ділянці щоки праворуч, загальне знедужання, підвищення температури тіла.";
      case 64:
      case 65:
      case 24:
      case 25:
      case 26:
      case 27:
      case 28:
        return "наявність болючої припухлості в ділянці щоки ліворуч, загальне знедужання, підвищення температури тіла.";
      case 74:
      case 75:
      case 34:
      case 35:
      case 36:
      case 37:
      case 38:
        return "наявність болючої припухлості в ділянці щоки ліворуч, загальне знедужання, підвищення температури тіла.";
      case 84:
      case 85:
      case 44:
      case 45:
      case 46:
      case 47:
      case 48:
        return "наявність болючої припухлості в ділянці щоки праворуч, загальне знедужання, підвищення температури тіла.";
      case 51:
      case 52:
      case 53:
      case 11:
      case 12:
      case 13:
        return "наявність болючої припухлості верхньої праворуч, загальне знедужання, підвищення температури тіла.";
      case 61:
      case 62:
      case 63:
      case 21:
      case 22:
      case 23:
        return "наявність болючої припухлості в ділянці верхньої губи ліворуч, загальне знедужання, підвищення температури тіла.";
      case 71:
      case 72:
      case 73:
      case 31:
      case 32:
      case 33:
        return "наявність болючої припухлості в ділянці нижньої губи ліворуч, загальне знедужання, підвищення температури тіла.";
      case 81:
      case 82:
      case 83:
      case 41:
      case 42:
      case 43:
        return "наявність болючої припухлості в ділянці нижньої губи праворуч, загальне знедужання, підвищення температури тіла.";
      default:
        return "наявність болючої припухлості обличчя, загальне знедужання, підвищення температури тіла.";
    }
  } else if (type === "periodontit") {
    switch (Number(tooth)) {
      case 54:
      case 55:
      case 14:
      case 15:
      case 16:
      case 17:
      case 18:
        return " на незначну припухлість щоки праворуч, біль у правому верхньому кутньому зубі, особливо виражений при накушуванні.";
      case 64:
      case 65:
      case 24:
      case 25:
      case 26:
      case 27:
      case 28:
        return " на незначну припухлість щоки ліворуч, біль у лівому верхньому кутньому зубі, особливо виражений при накушуванні.";
      case 74:
      case 75:
      case 34:
      case 35:
      case 36:
      case 37:
      case 38:
        return " на незначну припухлість щоки ліворуч, біль у лівому нижньому кутньому зубі, особливо виражений при накушуванні.";
      case 84:
      case 85:
      case 44:
      case 45:
      case 46:
      case 47:
      case 48:
        return " на незначну припухлість щоки праворуч, біль у правому нижньому кутньому зубі, особливо виражений при накушуванні.";
      case 51:
      case 52:
      case 53:
      case 11:
      case 12:
      case 13:
        return " на незначну припухлість верхньої губи праворуч, біль у правому верхньому центральному зубі, особливо виражений при накушуванні.";
      case 61:
      case 62:
      case 63:
      case 21:
      case 22:
      case 23:
        return " на незначну припухлість верхньої губи ліворуч, біль у лівому верхньому центральному зубі, особливо виражений при накушуванні.";
      case 71:
      case 72:
      case 73:
      case 31:
      case 32:
      case 33:
        return " на незначну припухлість нижньої губи ліворуч, біль у лівому нижньому центральному зубі, особливо виражений при накушуванні.";
      case 81:
      case 82:
      case 83:
      case 41:
      case 42:
      case 43:
        return " на незначну припухлість нижньої губи праворуч, біль у правому нижньому центральному зубі, особливо виражений при накушуванні.";
      default:
        return " на незначну припухлість обличчя, біль у зубі, особливо виражений при накушуванні.";
    }
  } else if (type === "abscess") {
    return abscessTemplate;
  } else if (type === "skinWound") {
    return `наявність рани ${woundArea} ${woundSide}.`;
  } else if (type === "tongueBridle") {
    return `зі слів батьків, на порушення вимови звуків ‘’p’’ та ‘’л’’ та шиплячих.`;
  } else if (type === "lipBridle") {
    return `зі слів батьків, на наявність щілини між центральними різцями верхньої щелепи, в міжзубний сосочок яких вплітається вуздечка верхньої губи. `;
  } else if (type === "caries") {
    return `зі слів батьків, на неможливість амбулаторного лікування зубів із-за емоційної нестабільності дитини.`;
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
