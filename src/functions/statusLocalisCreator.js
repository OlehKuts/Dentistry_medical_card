import { lowerToothChecker, upperToothChecker, sideChecker } from "./checkers";

export const statusLocalisCreator = (
  longType,
  type,
  tooth,
  area,
  age,
  crownDestruction,
  woundSide,
  woundArea,
  woundType,
  woundLength,
  woundWidth,
  woundDepth,
  woundForm,
  woundLedges,
  woundBleeding,
  woundAliens,
  perioTeeth,
  _changedList = [{ id: 55, name: 55, status: "" }],
  woundSurface,
  abscessType,
  abscessArea,
  abscessSide,
  abscessTooth,
  cystTooth,
  cystDiameter,
  isTemporaryToothAbove,
  cystType,
  rootSealed,
  retention1,
  retention2,
  retention3,
  retention4,
  neoplasmArea,
  neoplasmSide,
  neoplasmForm,
  neoplasmBorders,
  neoplasmMovability,
  neoplasmPoignancy,
  neoplasmConsistance,
  neoplasmDiameter,
  neoplasmSurface,
  neoplasmColor,
  neoplasmAboveSurface,
  neoplasmSurfaceAlter,
  fractureLowerArea1,
  fractureLowerSide1,
  fractureLowerStep1,
  fractureLowerBias1,
  fractureLowerSubmucous1,
  xRay,
  continuity,
  fractureLowerDirection1,
  condition,
  lowerBilateralism,
  fractureLowerTooth1a,
  fractureLowerTooth1b,
  fractureLowerTeethInLine1,
  fractureLowerArea2,
  fractureLowerSide2,
  fractureLowerStep2,
  fractureLowerBias2,
  fractureLowerSubmucous2,
  fractureLowerTooth2a,
  fractureLowerTooth2b,
  fractureLowerTeethInLine2,
  fractureLowerDirection2,
  dlAlveolusDestroyed,
  dlDirection,
  dlDistance,
  dlDeployed,
  dlTooth1,
  dlTooth2,
  dlTooth3,
  dlType,
  dlAlveolusDestroyed2,
  dlDirection2,
  dlDistance2,
  dlDeployed2,
  dlTooth4,
  dlTooth5,
  dlTooth6,
  dlType2,
  overCompleteTooth1,
  overCompleteTooth2,
  overCompleteTooth3,
  overCompleteTooth4,
  overCompleteLocation,
  overCompleteForm,
  overCompleteXRay,
  overCompleteAmount,
  dlTooth7,
  dlTooth8
) => {
  const longContent = longType
    ? `Шкіра обличчя звичайного кольору, помірно зволожена. Регіонарні лімфовузли не пальпуються. Відкривання рота в повному обсязі.  ${biteChecker(
        age
      )} прикус. Слизова оболонка ротової порожнини в загальному блідо-рожева, зволожена.`
    : ``;
  let basicContent = ``;
  const shortContent = longType ? `` : `загальний стан дитини ${condition}; `;
  const ocAmountStr1 =
    overCompleteAmount === 1 ? `коренка зуба ` : `коренки зубів `;
  const ocAmountStr2 =
    overCompleteAmount === 1 ? `коронки одного зуба ` : `коронок двох зубів `;
  const ocTeeth = [
    overCompleteTooth1,
    overCompleteTooth2,
    overCompleteTooth3,
    overCompleteTooth4
  ].filter((t) => t !== ``);
  const isDiastema = ocTeeth.some((t) => t === 11 || t === 21)
    ? `Наявність діастеми. `
    : ``;
  const ocLocation =
    overCompleteLocation === `palatine`
      ? `піднебінної `
      : overCompleteLocation === `lingual`
      ? `язикової `
      : overCompleteLocation === `vestibular`
      ? `вестибулярної `
      : ``;
  const ocArea1 = `${overCompleteTooth1},${overCompleteTooth2}`;
  const ocArea2 =
    overCompleteTooth3 === "" || overCompleteTooth4 === ""
      ? ``
      : ` та ${overCompleteTooth3},${overCompleteTooth4}`;
  const ocProection = ocTeeth.some((t) => t === 11 || t === 21)
    ? ` діастеми`
    : ` ${ocArea1}${ocArea2}`;
  const ocXRay =
    overCompleteXRay === `Rg` ? `панорамній  R – графії: ` : `КТ: `;
  const overCompleteTemplate = `обличчя симетричне.${isDiastema}
   З ${ocLocation} сторони в проекції ${ocProection} зубів наявність ${ocAmountStr2} ${overCompleteForm} форми. 
   На ${ocXRay}${ocAmountStr1} знаходяться між коренями ${ocArea1}${ocArea2} зубів.${longContent}`;
  const dlTeethList = [
    dlTooth1,
    dlTooth2,
    dlTooth3,
    dlTooth4,
    dlTooth5,
    dlTooth6,
    dlTooth7,
    dlTooth8
  ].filter((t) => t !== "");
  const lipEdema =
    upperToothChecker(dlTeethList) && lowerToothChecker(dlTeethList)
      ? `верхньої та нижньої губ`
      : lowerToothChecker(dlTeethList)
      ? `нижньої губи`
      : `верхньої губи`;
  const dlToothStr = dlTeethList.length > 1 ? `зубів` : `зуба`;
  const dlPartialCreator = (
    tooth1,
    tooth2,
    tooth3,
    tooth4,
    direction,
    deployed,
    distance,
    alveolus
  ) => {
    const teeth = [tooth1, tooth2, tooth3, tooth4].filter((t) => t !== "");
    const toothStr = teeth.length > 1 ? ` зубів` : ` зуба`;
    const distanceStr = distance === 0 ? `` : ` на ${distance} мм `;
    const directionStr =
      direction === "вгору"
        ? " зі зміщенням догори відносно лінії змикання зубів"
        : direction === "вниз"
        ? " зі зміщенням вниз відносно лінії змикання зубів"
        : "";
    const deployedStr = deployed
      ? ` та розворотом відносно вертикальної осі`
      : ``;
    const alveolusStr = alveolus ? `Наявне` : "Відсутнє";
    const finalStr = ` Наявна дистопія ${teeth.join(
      ", "
    )}${toothStr}${directionStr}${distanceStr}${deployedStr}. 
${alveolusStr} ушкодження вестибулярної стінки альвеоли ${teeth.join(
      ", "
    )}${toothStr}.`;
    return finalStr;
  };
  const dlFullCreator = (tooth1, tooth2, tooth3, tooth4, alveolus) => {
    const teeth = [tooth1, tooth2, tooth3, tooth4].filter((t) => t !== "");
    const toothStr =
      teeth.length > 1
        ? ` зуби відсутні в лунках, які виповнені кров'яними згустками.`
        : ` зуб відсутній в лунці, яка виповнена кров'яним згустком.`;
    const toothStrAnother = teeth.length > 1 ? ` зубів` : ` зуба`;
    const alveolusStr = alveolus ? `Наявне` : "Відсутнє";
    const finalStr = ` ${teeth.join(", ")}${toothStr} 
${alveolusStr} ушкодження вестибулярної стінки альвеоли ${teeth.join(
      ", "
    )}${toothStrAnother}.`;
    return finalStr;
  };
  const dlMiddlePart1 =
    dlType === "повний"
      ? dlFullCreator(
          dlTooth1,
          dlTooth2,
          dlTooth3,
          dlTooth4,
          dlAlveolusDestroyed
        )
      : dlPartialCreator(
          dlTooth1,
          dlTooth2,
          dlTooth3,
          dlTooth4,
          dlDirection,
          dlDeployed,
          dlDistance,
          dlAlveolusDestroyed
        );
  const dlMiddlePart2 =
    dlType2 === "повний"
      ? dlFullCreator(
          dlTooth5,
          dlTooth6,
          dlTooth7,
          dlTooth8,
          dlAlveolusDestroyed
        )
      : dlType2 === "неповний" || dlType2 === "вколочений"
      ? dlPartialCreator(
          dlTooth5,
          dlTooth6,
          dlTooth7,
          dlTooth8,
          dlDirection2,
          dlDeployed2,
          dlDistance2,
          dlAlveolusDestroyed2
        )
      : "";
  const dlTemplate = `
  обличчя асиметричне за рахунок вираженого коллатерального набряку ${lipEdema} ${sideChecker(
    dlTeethList
  )}. 
  Слизова оболонка ${lipEdema} має точкові крововиливи. Гіперемія та набряк ясен в ділянці  ${dlTeethList.join(
    ", "
  )} ${dlToothStr}.
 ${dlMiddlePart1}${dlMiddlePart2}
 ${longContent} 
  На момент огляду кровотечі не спостерігається. Даних за ушкодження кісток лицевого черепа не виявлено.
  `;
  //fractureLowerJaw
  const lb = lowerBilateralism;
  const flToothCreator = (teethInLine, a, b) => {
    let str =
      teethInLine === "between"
        ? `між ${a} та ${b} зубами`
        : teethInLine === "through"
        ? ` ${a} зуба `
        : ``;
    return str;
  };
  const flToothCreatorForXRay = (teethInLine, a, b) => {
    let str =
      teethInLine === "between"
        ? `між ${a} та ${b} зубами`
        : teethInLine === "through"
        ? ` через ${a} зуб`
        : ``;
    return str;
  };
  const flToothPercussionCreator = (teethInLine, a, b) => {
    let str =
      teethInLine === "between"
        ? `${a},${b} зубів`
        : teethInLine === "through"
        ? ` ${a} зуба `
        : ``;
    return str;
  };
  const fractureLowerToothPercussion1 = flToothPercussionCreator(
    fractureLowerTeethInLine1,
    fractureLowerTooth1a,
    fractureLowerTooth1b
  );
  const fractureLowerToothPercussion2 = flToothPercussionCreator(
    fractureLowerTeethInLine2,
    fractureLowerTooth2a,
    fractureLowerTooth2b
  );
  const fractureLowerToothContent = (p1, p2) => {
    let str1 =
      p1 === ``
        ? ``
        : `Перкусія ${p1} чутлива. При бімануальній пальпації нижньої щелепи відмічається виражена паталогічна рухомість в області ${p1}, крепітація кісткових уламків. `;
    let str2 =
      p2 === ``
        ? ``
        : `Перкусія ${p2} чутлива. При бімануальній пальпації нижньої щелепи відмічається виражена паталогічна рухомість в області ${p2}, крепітація кісткових уламків. `;
    const finalStr = `${str1} ${str2}`;
    return finalStr;
  };
  const flDirectionCreator = (direction) => {
    const str =
      direction === `зигзагоподібний`
        ? `зигзагоподібного`
        : direction === `косий`
        ? `косого`
        : `лінійного`;
    return str;
  };
  const flDirection1 = flDirectionCreator(fractureLowerDirection1);
  const flDirection2 = flDirectionCreator(fractureLowerDirection2);
  const fractureBite =
    fractureLowerBias1 === `зі зміщенням` ||
    fractureLowerBias2 === `зі зміщенням`
      ? `Прикус порушений.`
      : `Прикус не порушений.`;
  const flEdemaCreator = (area1, area2, side1, side2, lb) => {
    let str1 =
      area1 === `кутовий`
        ? `в нижніх відділах привушно – жувальної області`
        : area1 === `тіла`
        ? `в нижніх відділах щічної області`
        : area1 === `ментальний`
        ? `в нижніх відділах щічної області; ментальної, субментальної, субмандибулярної ділянок`
        : area1 === `центральний`
        ? `ментальної, субментальної, субмандибулярної ділянок`
        : area1 === `гілки`
        ? `в нижніх відділах щічної та верхній частині підщелепної ділянок`
        : area1 === `суглобового відростка` || area === `переломо-вивих`
        ? `в верхніх відділах привушно-жувальної ділянки`
        : `в нижніх відділах щічної області`;
    let str2 =
      area2 === `кутовий`
        ? `в нижніх відділах привушно – жувальної області`
        : area2 === `тіла`
        ? `в нижніх відділах щічної області`
        : area2 === `ментальний`
        ? `в нижніх відділах щічної області; ментальної, субментальної, субмандибулярної ділянок`
        : area2 === `центральний`
        ? `ментальної, субментальної, субмандибулярної ділянок`
        : area2 === `гілки`
        ? `в нижніх відділах щічної та верхній частині підщелепної ділянок`
        : area2 === `суглобового відростка` || area === `переломо-вивих`
        ? `в верхніх відділах привушно-жувальної ділянки`
        : `в нижніх відділах щічної області`;
    str1 = `${str1} ${side1}`;
    str2 = `${str2} ${side2}`;
    const finalStr = lb ? `${str1} та ${str2}` : str1;
    return finalStr;
  };
  const excursionCreator = (area1, area2, side1, side2) => {
    const str1 =
      area1 === "суглобового відростка" || area1 === `переломо-вивих`
        ? true
        : false;
    const str2 =
      area2 === "суглобового відростка" || area2 === `переломо-вивих`
        ? true
        : false;
    const finalStr =
      str1 && str2
        ? `відсутня з обох боків`
        : str1
        ? `відсутня ${side1}`
        : str2
        ? `відсутня ${side2}`
        : `в повному об'ємі`;
    return finalStr;
  };
  const flPainAreaCreator = (area1, area2, side1, side2, lb) => {
    let str1 =
      area1 === "кутовий"
        ? `в ділянці кута нижньої щелепи`
        : area1 === "тіла"
        ? `в ділянці тіла нижньої щелепи`
        : area1 === `ментальний`
        ? `в нижніх відділах щічної області; ментальної, субментальної, субмандибулярної ділянок`
        : area1 === `центральний`
        ? ` в ментальній, субментальній, субмандибулярній ділянках`
        : area1 === `гілки`
        ? `в привушно-жувальній ділянці`
        : area1 === `суглобового відростка` || area1 === `переломо-вивих`
        ? `в верхніх відділах привушно-жувальної ділянки`
        : "в ділянці нижньої щелепи";
    let str2 =
      area2 === "кутовий"
        ? `в ділянці кута нижньої щелепи`
        : area2 === "тіла"
        ? `в ділянці тіла нижньої щелепи`
        : area2 === `ментальний`
        ? `в нижніх відділах щічної області; ментальної, субментальної, субмандибулярної ділянок`
        : area2 === `центральний`
        ? ` в ментальній, субментальній, субмандибулярній ділянках`
        : area2 === `гілки`
        ? `в привушно-жувальній ділянці`
        : area2 === `суглобового відростка` || area2 === `переломо-вивих`
        ? `в верхніх відділах привушно-жувальної ділянки`
        : ``;
    str1 = `${str1} ${side1}`;
    str2 = `${str2} ${side2}`;
    const finalStr = lb ? `${str1} та ${str2}` : str1;
    return finalStr;
  };
  const palpationAreaCreator = (area1, area2, side1, side2, lb) => {
    let str1 =
      area1 === "кутовий"
        ? ` зверху – нижній край виличної дуги, знизу – піднижньощелепна область, попереду – передній край жувального м’яза, ззаду – задній край гілки нижньої щелепи`
        : area1 === "тіла"
        ? ` зверху – нижня третина щічної ділянки, знизу – піднижньощелепна область `
        : area1 === `ментальний` || area1 === `центральний`
        ? `ментальної ділянки`
        : area1 === `гілки`
        ? `привушно-жувальної ділянки та гілки нижньої щелепи`
        : area1 === `суглобового відростка` || area1 === `переломо-вивих`
        ? `привушно-жувальної ділянки`
        : `щічної ділянки`;
    let str2 =
      area2 === "кутовий"
        ? ` зверху – нижній край виличної дуги, знизу – піднижньощелепна область, попереду – передній край жувального м’яза, ззаду – задній край гілки нижньої щелепи`
        : area2 === "тіла"
        ? ` зверху – нижня третина щічної ділянки, знизу – піднижньощелепна область `
        : area2 === `ментальний` || area2 === `центральний`
        ? `ментальної ділянки`
        : area2 === `гілки`
        ? `привушно-жувальної ділянки та гілки нижньої щелепи`
        : area2 === `суглобового відростка` || area2 === `переломо-вивих`
        ? `привушно-жувальної ділянки`
        : `щічної ділянки`;
    str1 = `${str1} ${side1}`;
    str2 = `${str2} ${side2}`;
    const finalStr = lb ? `${str1}; ${str2}` : str1;
    return finalStr;
  };
  const underMucousBleedingCreator = (
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
    umBleeding1,
    umBleeding2,
    lb
  ) => {
    let str1 =
      area1 === `кутовий`
        ? `Визначається підслизовий крововилив в нижніх відділах крилоподібно – щелепної складки ${side1}.`
        : area1 === "тіла"
        ? ` Визначається порушення цілісності слизової оболонки з вестибулярної сторони альвеолярного відростка нижньої щелепи в області ${flToothCreator(
            teethInLine1,
            a1,
            b1
          )}.`
        : area1 === `ментальний` || area1 === `центральний`
        ? `Наявне порушення цілісності слизової оболонки альвеолярного відростка нижньої щелепи в області ${flToothCreator(
            teethInLine1,
            a1,
            b1
          )}.`
        : ``;
    let str2 =
      area2 === `кутовий`
        ? `Наявний підслизовий крововилив в нижніх відділах крилоподібно – щелепної складки ${side2}.`
        : area2 === "тіла"
        ? ` Наявне порушення цілісності слизової оболонки з вестибулярної сторони альвеолярного відростка нижньої щелепи в області ${flToothCreator(
            teethInLine2,
            a2,
            b2
          )}.`
        : area2 === `ментальний` || area2 === `центральний`
        ? `Наявне порушення цілісності слизової оболонки альвеолярного відростка нижньої щелепи в області ${flToothCreator(
            teethInLine2,
            a2,
            b2
          )}.`
        : ``;
    str1 = umBleeding1 ? str1 : ``;
    str2 = umBleeding2 ? str2 : ``;
    const finalStr = lb ? `${str1}${str2}` : str1;
    return finalStr;
  };
  const xRayType =
    xRay === `рентген`
      ? `На оглядовй R–графії черепа в прямій та боковій проекціях: `
      : `На КТ голови: `;
  const flXRayContentCreator = (
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
    direction1,
    direction2,
    xRayType,
    lb
  ) => {
    const dislocationBoth = `порушення цілісності кісткової тканини обох суглобових відростків нижньої щелепи у вигляді переломо–вивихів`;
    const dislocation1 = ` переломо–вивиху ${side1}`;
    const dislocation2 = ` переломо–вивиху ${side2}`;

    const beginning = `порушення цілісності кісткової тканини нижньої щелепи у вигляді `;
    let str1 =
      area1 === `кутовий`
        ? `в ділянці кута`
        : area1 === `тіла`
        ? `в ділянці тіла ${
            flToothCreatorForXRay(teethInLine1, a1, b1) === ``
              ? ``
              : `${flToothCreatorForXRay(teethInLine1, a1, b1)}`
          }`
        : area1 === `ментальний` || area1 === `центральний`
        ? `в ментальній ділянці ${flToothCreatorForXRay(teethInLine1, a1, b1)}`
        : area1 === `гілки`
        ? `в ділянці гілки `
        : area1 === `суглобового відростка`
        ? `в ділянці ${area1}`
        : area1 === `переломо-вивих`
        ? `в ділянці ${area1}`
        : ``;
    const dir1 = `${direction1} перелому `;
    str1 = `${dir1} ${str1} ${side1}`;
    let str2 =
      area2 === `кутовий`
        ? `в ділянці кута `
        : area2 === `тіла`
        ? `в ділянці тіла ${
            flToothCreatorForXRay(teethInLine2, a2, b2) === ``
              ? ``
              : `${flToothCreatorForXRay(teethInLine2, a2, b2)}`
          }`
        : area2 === `ментальний` || area2 === `центральний`
        ? `в ментальній ділянці ${flToothCreatorForXRay(teethInLine2, a2, b2)}`
        : area2 === `гілки`
        ? `в ділянці гілки `
        : area2 === `суглобового відростка`
        ? `в ділянці ${area2}`
        : area2 === `переломо-вивих`
        ? `в ділянці ${area2}`
        : ``;
    const dir2 = `${direction2} перелому `;
    str2 = `${dir2} ${str2} ${side2}`;
    const finishing =
      lb && area1 === `переломо-вивих` && area2 === `переломо-вивих`
        ? dislocationBoth
        : lb && area1 === `переломо-вивих`
        ? `${dislocation1}, ${str2}`
        : lb && area2 === `переломо-вивих`
        ? `${str1}, ${dislocation2}`
        : lb
        ? `${str1} та ${str2}`
        : str1;
    const finalStr = `${xRayType} ${beginning} ${finishing}`;
    return `${finalStr}.`;
  };

  const xRayContent = flXRayContentCreator(
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
    flDirection1,
    flDirection2,
    xRayType,
    lb
  );
  const flStepCreator = (step1, step2, side1, side2, lb) => {
    const beginning = `симптом «сходинки» `;
    let str1 = `${beginning} ${step1} ${side1}`;
    let str2 = ` та ${step2} ${side2}`;
    const finalStr = lb ? `${str1}${str2}` : str1;
    return finalStr;
  };
  const excoration = (lb) => {
    const middlePart = lb ? `в цих ділянках` : `в цій ділянці`;
    const finalStr = `На шкірних покривах ${middlePart} відмічається садно, візуально визначаються підшкірні крововиливи.`;
    return finalStr;
  };
  const fractureLowerJawTemplate = `обличчя  асиметричне за рахунок припухлості тканин ${flEdemaCreator(
    fractureLowerArea1,
    fractureLowerArea2,
    fractureLowerSide1,
    fractureLowerSide2,
    lb
  )}. ${excoration(lb)} Відкривання рота щадне із-за болі ${flPainAreaCreator(
    fractureLowerArea1,
    fractureLowerArea2,
    fractureLowerSide1,
    fractureLowerSide2,
    lb
  )}. Болі тут посилюються при змиканні зубів. ${fractureBite} Екскурсія суглобових голівок ${excursionCreator(
    fractureLowerArea1,
    fractureLowerArea2,
    fractureLowerSide1,
    fractureLowerSide2
  )}. При пальпації припухлості визначаються набряклі, болючі м’які тканини в межах: ${palpationAreaCreator(
    fractureLowerArea1,
    fractureLowerArea2,
    fractureLowerSide1,
    fractureLowerSide2,
    lb
  )}. Симптом навантаження тут виражено позитивний. 
  Безперервність нижнього краю нижньої щелепи на всьому протязі ${continuity},  ${flStepCreator(
    fractureLowerStep1,
    fractureLowerStep2,
    fractureLowerSide1,
    fractureLowerSide2,
    lb
  )}. ${underMucousBleedingCreator(
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
    fractureLowerSubmucous1,
    fractureLowerSubmucous2,
    lb
  )} ${fractureLowerToothContent(
    fractureLowerToothPercussion1,
    fractureLowerToothPercussion2
  )}
  ${xRayContent}
  `;
  const neoplasmAbove = neoplasmAboveSurface ? `` : `не`;
  const colorAlter = neoplasmSurfaceAlter ? `` : `не`;
  const neoplasmTemplate = `Наявний новоутвір ${neoplasmArea} ${neoplasmSide}, ${neoplasmForm} форми, ${neoplasmColor} забарвлення, ${neoplasmBorders}, який ${neoplasmAbove} підвищується над поверхнею. При пальпації: ${neoplasmMovability}, ${neoplasmPoignancy}, ${neoplasmConsistance} консистенції. Діаметр приблизно ${neoplasmDiameter} см; ${neoplasmSurface} над ним в кольорі ${colorAlter} змінена.`;
  const retentionList = [retention1, retention2, retention3, retention4];
  const filteredRetentionList = retentionList.filter((r) => r !== "");
  const neighborRetentionList =
    filteredRetentionList.length === 1
      ? `впирається в корені сусіднього другого моляра`
      : `впираються в корені сусідніх других молярів`;
  const retUpperJaw = filteredRetentionList.some((r) => r === 18 || r === 28);
  const retLowerJaw = filteredRetentionList.some((r) => r === 38 || r === 48);
  const retentionJaw =
    retUpperJaw && retLowerJaw
      ? `верхньої та нижньої щелеп `
      : retUpperJaw
      ? `верхньої щелепи `
      : retLowerJaw
      ? `нижньої щелепи `
      : `щелепи `;
  const retentionTeeth =
    filteredRetentionList.length === 1 ? `зуба ` : `зубів `;
  const retentionTeeth2 = filteredRetentionList.length === 1 ? `зуб ` : `зуби `;
  const retentionTemplate = ` На панорамній  R–графії ${retentionJaw} – горизонтальне положення ${filteredRetentionList.join(
    ","
  )} ${retentionTeeth}. ${filteredRetentionList.join(
    ","
  )}  ${retentionTeeth2} ${neighborRetentionList}. `;
  const strCystTooth = cystTooth.toString();
  const cystSide = Number(strCystTooth[0]) % 4 < 2 ? `праворуч` : `ліворуч`;
  const cystJaw =
    Number(strCystTooth[0]) % 4 === 1 || Number(strCystTooth[0]) % 4 === 2
      ? `верхньої щелепи`
      : `нижньої щелепи`;
  const aboveToothMod = Number(cystTooth) + 40;
  const aboveToothDesc =
    cystType === `радикулярна кіста`
      ? `${cystTooth} зуб зруйновано карієсом. `
      : isTemporaryToothAbove
      ? `${aboveToothMod} зуб зруйновано карієсом. `
      : ``;
  const aboveTooth =
    cystType === `радикулярна кіста`
      ? `в ділянці ${cystTooth} зуба`
      : isTemporaryToothAbove
      ? `в ділянці ${aboveToothMod} та сусідніх зубів`
      : `в проекції ${cystTooth} та сусідніх зубів`;
  const aboveToothApical =
    cystType === `радикулярна кіста`
      ? `Кінчики коренів ${cystTooth} зуба контактують з утвором. `
      : isTemporaryToothAbove
      ? `Кінчики коренів ${aboveToothMod} зуба контактують з утвором. `
      : ``;
  const deformationArea =
    Number(strCystTooth[1]) % 10 > 3
      ? `щічної ділянки`
      : Number(strCystTooth[0]) % 4 === 1 || Number(strCystTooth[0]) % 4 === 1
      ? `верхньої губи`
      : `нижньої губи`;
  const radicularDesc =
    cystType === `радикулярна кіста`
      ? ` над апексами коренів ${cystTooth} зуба`
      : ``;
  const folicularDesc =
    cystType === `фолікулярна кіста`
      ? `Коронка ${cystTooth} зуба в середині кісти`
      : ``;
  const cystDiameterMod =
    cystDiameter !== `` ? `${cystDiameter} см` : `більше 1 см`;
  const rootStatus =
    rootSealed === `rootSealed`
      ? `Канал ${cystTooth} зуба  запломбований на всьому протязі.`
      : rootSealed === `rootSealedNot`
      ? `Канал ${cystTooth} зуба  не пломбований.`
      : ``;
  const cystBeginning =
    cystType === `апікальна кістогранульома`
      ? `обличчя симетричне`
      : `обличчя  асиметричне за рахунок деформації у вигляді випинання ${deformationArea} ${cystSide}.`;
  const cystTemplate =
    cystType === `апікальна кістогранульома`
      ? `Пальпація по присінку в ділянці ${cystTooth} зуба в проекції верхівки кореня помірно болісна. Симптом Лукомського позитивний. В ${cystTooth} зубі  трепанаційний отвір. Перкусія його помірно болісна. На прицільній внутрішньоротовій R – графії периапікальних тканин ${cystTooth} зуба осередок гомогенного просвітлення кісткової тканини округлої форми з чітким контуром в ділянці апекса ${cystTooth} зуба. Діаметром приблизно ${cystDiameter} см.
   ${rootStatus}`
      : `обличчя  асиметричне за рахунок деформації у вигляді випинання ${deformationArea} ${cystSide}. Шкіра над деформацією звичайного кольору, в складку береться. При пальпації м’які тканини не змінені, безболісні. Кісткова тканина також безболісна. Спостерігається напівсферичне випинання з вестибулярної сторони та по перехідній складці ${aboveTooth}, при пальпації якого, симптом Рунге – Дюпюітрена позитивний. ${aboveToothDesc}На R–графії ${cystJaw}: ${cystSide} – осередок гомогенного просвітлення кісткової тканини майже округлої форми з чітким контуром, діаметром ${cystDiameterMod}${radicularDesc}. ${aboveToothApical}${folicularDesc}`;
  const abscessAreaMod =
    abscessArea === "в ділянці сонного трикутника"
      ? abscessArea
      : abscessArea[abscessArea.length - 1] === "и"
      ? `${abscessArea}`
      : `${abscessArea} ділянки`;
  const abscessToothTemplate =
    abscessTooth !== ""
      ? `Коронка ${abscessTooth} зуба зруйнована карієсом, перкусія його  болісна.`
      : "";
  const abscessTemplate =
    abscessArea === "твердого піднебіння"
      ? `на твердому піднебінні ${abscessSide} в проекції кореня ${abscessTooth} та сусідніх зубів наявне випинання гіпремійованої слизової оболонки розмірами приблизно 1,5 на 1,5 см. При пальпації – різко болісне, з ознаками флюктуації. 
  ${longContent}`
      : abscessArea === "дна порожнини рота"
      ? `обличчя симетричне. Рот напіввідкритий, слина через
    болісне ковтання витікає з нього. Шкіра підщелепної і підпідборідної ділянок
    напружена, масна, дещо гіперемована. Відкривання рота через біль обмежене. Пальпаторно визначається поширений
    щільний болючий інфільтрат у цих ділянках. Регіонарні лімфатичні вузли у
    зв'язку з цим збільшені, болючі, але чітко не пальпуються через наявність
    інфільтрату. Під'язиковий валик інфільтрований і підвищується над нижніми зубами, болючий
    під час пальпації. Слизова оболонка тут гіперемована, вкрита фібринозним
    нальотом. Шкіра обличчя звичайного кольору, помірно зволожена. ${biteChecker(
      age
    )} прикус.`
      : abscessArea === "крило-щелепного простору"
      ? `обличчя симетричне. 
    Спостерігається набряк тканин під кутом нижньої щелепи ${abscessSide}. При пальпації його 
    визначається щільний, різко болючий інфільтрат і пакет збільшених лімфатичних вузлів. 
    Відкривання рота обмежене. Запальна контрактура жувальних м'язів II-го ступеню. Шкіра обличчя в загальному чиста, помірно-зволожена.
У ротовій порожнині спостерігається гіперемія і набряк крило-щелепної та піднебінно-язикової складок ${abscessSide}.
    ${biteChecker(age)} прикус.`
      : abscessArea === "щелепно-язикового жолобка"
      ? `обличчя симетричне. Шкіра обличчя звичайного кольору, помірно зволожена. Регіонарні лімфовузли не пальпуються. Відкривання рота обмежене із-за болі. Слизова оболонка ротової порожнини в загальному блідо-рожева. ${biteChecker(
          age
        )} прикус.
    Щелепно-язиковий жолобок в проекції ${abscessTooth} та сусідніх зубів різко випуклий, гіперемійований, болісний при пальпації. 
    Визначається флюктуація. `
      : abscessType === "флегмона"
      ? `обличчя різко асиметричне за рахунок поширеної припухлості м'яких тканин ${abscessAreaMod} ${abscessSide}.
 Шкіра тут напружена, гіперемійована, у складку не береться. 
 У центрі пальпаторно визначається щільний, болючий інфільтрат без ознак флюктуації. ${longContent}`
      : abscessType === `фурункул`
      ? ` обличчя асиметричне за рахунок деформації внаслідок інфільтрації тканин ${abscessAreaMod} ${abscessSide}.
  Місцево спостерігається обмежений болючий щільний інфільтрат, шкіра над ним гіперемована, з ціанотичним відтінком, у складку не береться. 
  У центрі інфільтрату на місці волосяного фолікула наявний гнійно-некротичний стрижень. ${longContent}`
      : abscessType === `лімфаденіт`
      ? ` обличчя асиметричне за рахунок припухлості м'яких тканин ${abscessAreaMod} ${abscessSide}.
При пальпації тут визначається пакет збільшених лімфовузлів, болісний, обмежено рухомий, щільно-еластичної консистенції, діаметром приблизно 2 см,
шкіра над ним не зміненого забарвлення, у складку береться. ${longContent}`
      : abscessType === "сіалоаденіт"
      ? `обличчя асиметричне за рахунок колатерального  набряку привушно-жувальної  ділянки ${abscessSide}. Шкіра над болючою припухлістю дещо гіперемійована, маснувата, в складку береться. Защелепні та підщелепні лімфовузли незначно збільшені. Інші регіонарні лімфовузли не пальпуються. При пальпації припухлості ${abscessSide} спостерігається збільшена привушна слинна залоза, розмірами приблизно 3 см в діаметрі, різко болісна при пальпації. Слина мутна, підвищеної в’язкості. Устя протоки привушної слинної залози ${abscessSide} значно гіперемійоване, підвищується над рівнем слизової оболонки, при масажуванні з нього виділяється мутна слина з незначною кількістю гнійних прожилків. ${longContent}`
      : `обличчя асиметричне за рахунок деформації внаслідок інфільтрації тканин ${abscessAreaMod} ${abscessSide}.
 Шкіра над інфільтратом гіперемійована, лискуча. 
 Пальпаторно визначається щільний, болючий, обмежений інфільтрат з ознаками флюктуації. ${longContent}`;
  const woundSurfaceStr =
    woundSurface === "слизова оболонка"
      ? "зі сторони слизової оболонки"
      : woundSurface === "червона облямівка"
      ? "зі сторони червоної облямівки"
      : "";
  let changedList = _changedList || [{ id: 55, name: 55, status: "" }];
  let perioList = changedList
    .filter((item) => item.status === "Pt")
    .map((item) => item.id);
  let sanationPerio = "";
  perioList.length === 1
    ? (sanationPerio = `Коронка ${perioList[0]} зуба зруйнована карієсом, перкусія його незначно болісна, патологічна рухомість 1-го ступеню. Наявна нориця на слизовій оболонці ясен з вестибулярної сторони в проекції верхівки коренів ${perioList[0]} зуба.`)
    : perioList.length > 1
    ? (sanationPerio = `Коронки ${perioList.join(
        ", "
      )} зубів зруйновані карієсом, перкусія їх незначно болісна, патологічна рухомість 1-го ступеню. Наявні нориці на слизовій оболонці ясен з вестибулярної сторони в проекції верхівки коренів ${perioList.join(
        ", "
      )} зубів.`)
    : (sanationPerio = ``);
  let perioTeethContent = "";
  perioTeeth.length === 2
    ? (perioTeethContent = `Коронка ${perioTeeth} зуба зруйнована карієсом, перкусія його незначно болісна, патологічна рухомість 1-го ступеню. Наявна нориця на слизовій оболонці ясен з вестибулярної сторони в проекції верхівки коренів ${perioTeeth} зуба.`)
    : perioTeeth.length > 2
    ? (perioTeethContent = `Коронки ${perioTeeth} зубів зруйновані карієсом, перкусія їх незначно болісна, патологічна рухомість 1-го ступеню. Наявні нориці на слизовій оболонці ясен з вестибулярної сторони в проекції верхівок коренів ${perioTeeth} зубів.`)
    : (perioTeethContent = "");
  let woundSize =
    woundDepth !== "" && woundWidth !== "" && woundLength !== ""
      ? ` розмірами приблизно ${woundLength}*${woundWidth}*${woundDepth} см`
      : "";
  if (type === "periostit") {
    switch (Number(tooth)) {
      case 54:
      case 55:
      case 14:
      case 15:
      case 16:
      case 17:
      case 18:
        basicContent = `обличчя  асиметричне за рахунок колатерального  набряку верхньої третини щічної ділянки та підочної ділянки праворуч. Шкіра над болючою припухлістю звичайного кольору, але починає набирати гіперемічного відтінку, в складку ще береться. ${longContent} Слизова оболонка гіперемійована та набрякла в ділянці перехідної складки ${area} зубів, випукла, різко болісна при пальпації. Коронка ${tooth} зуба ${crownDestruction} зруйнована карієсом, перкусія його різко болісна. ${perioTeethContent}`;
        break;
      case 64:
      case 65:
      case 24:
      case 25:
      case 26:
      case 27:
      case 28:
        basicContent = `обличчя  асиметричне за рахунок колатерального  набряку верхньої третини щічної ділянки та підочної ділянки ліворуч. Шкіра над болючою припухлістю звичайного кольору, але починає набирати гіперемічного відтінку, в складку ще береться. ${longContent} Слизова оболонка гіперемійована та набрякла в ділянці перехідної складки ${area} зубів, випукла, різко болісна при пальпації. Коронка ${tooth} зуба ${crownDestruction} зруйнована карієсом, перкусія його різко болісна. ${perioTeethContent}`;
        break;
      case 74:
      case 75:
      case 34:
      case 35:
      case 36:
      case 37:
      case 38:
        basicContent = `обличчя  асиметричне за рахунок колатерального  набряку нижньої третини щічної ділянки ліворуч. Шкіра над болючою припухлістю звичайного кольору, але починає набирати гіперемічного відтінку, в складку ще береться. ${longContent} Слизова оболонка гіперемійована та набрякла в ділянці перехідної складки ${area} зубів, випукла, різко болісна при пальпації. Коронка ${tooth} зуба ${crownDestruction} зруйнована карієсом, перкусія його різко болісна. ${perioTeethContent}`;
        break;
      case 84:
      case 85:
      case 44:
      case 45:
      case 46:
      case 47:
      case 48:
        basicContent = `обличчя  асиметричне за рахунок колатерального  набряку нижньої третини щічної ділянки праворуч. Шкіра над болючою припухлістю звичайного кольору, але починає набирати гіперемічного відтінку, в складку ще береться. ${longContent} Слизова оболонка гіперемійована та набрякла в ділянці перехідної складки ${area} зубів, випукла, різко болісна при пальпації. Коронка ${tooth} зуба ${crownDestruction} зруйнована карієсом, перкусія його різко болісна. ${perioTeethContent}`;
        break;
      case 51:
      case 52:
      case 53:
      case 11:
      case 12:
      case 13:
        basicContent = `обличчя  асиметричне за рахунок колатерального  набряку м'яких тканин верхньої губи праворуч. Шкіра над болючою припухлістю звичайного кольору, але починає набирати гіперемічного відтінку, в складку ще береться. ${longContent} Слизова оболонка гіперемійована та набрякла в ділянці перехідної складки ${area} зубів, випукла, різко болісна при пальпації. Коронка ${tooth} зуба ${crownDestruction} зруйнована карієсом, перкусія його різко болісна. ${perioTeethContent}`;
        break;
      case 61:
      case 62:
      case 63:
      case 21:
      case 22:
      case 23:
        basicContent = `обличчя  асиметричне за рахунок колатерального  набряку м'яких тканин верхньої губи ліворуч. Шкіра над болючою припухлістю звичайного кольору, але починає набирати гіперемічного відтінку, в складку ще береться. ${longContent} Слизова оболонка гіперемійована та набрякла в ділянці перехідної складки ${area} зубів, випукла, різко болісна при пальпації. Коронка ${tooth} зуба ${crownDestruction} зруйнована карієсом, перкусія його різко болісна. ${perioTeethContent}`;
        break;
      case 71:
      case 72:
      case 73:
      case 31:
      case 32:
      case 33:
        basicContent = `обличчя  асиметричне за рахунок колатерального  набряку м'яких тканин нижньої губи ліворуч. Шкіра над болючою припухлістю звичайного кольору, але починає набирати гіперемічного відтінку, в складку ще береться. ${longContent} Слизова оболонка гіперемійована та набрякла в ділянці перехідної складки ${area} зубів, випукла, різко болісна при пальпації. Коронка ${tooth} зуба ${crownDestruction} зруйнована карієсом, перкусія його різко болісна. ${perioTeethContent}`;
        break;
      case 81:
      case 82:
      case 83:
      case 41:
      case 42:
      case 43:
        basicContent = `обличчя  асиметричне за рахунок колатерального  набряку м'яких тканин нижньої губи праворуч. Шкіра над болючою припухлістю звичайного кольору, але починає набирати гіперемічного відтінку, в складку ще береться. ${longContent} Слизова оболонка гіперемійована та набрякла в ділянці перехідної складки ${area} зубів, випукла, різко болісна при пальпації. Коронка ${tooth} зуба ${crownDestruction} зруйнована карієсом, перкусія його різко болісна. ${perioTeethContent}`;
        break;
      default:
        basicContent = `обличчя  асиметричне за рахунок колатерального  набряку м'яких тканин. Шкіра над болючою припухлістю звичайного кольору, але починає набирати гіперемічного відтінку, в складку ще береться. Шкіра обличчя звичайного кольору, помірно зволожена. Регіонарні лімфовузли не пальпуються. Відкривання рота в повному обсязі. Слизова оболонка ротової порожнини в загальному блідо-рожева, проте гіперемійована та набрякла в ділянці перехідної складки причинного зуба, випукла, різко болісна при пальпації. Коронка причинного зуба зруйнована карієсом, перкусія його різко болісна. ${perioTeethContent}`;
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
        basicContent = `обличчя  дещо асиметричне за рахунок невираженого колатерального набряку верхньої третини щічної та підочної ділянок праворуч. Шкіра над болючою припухлістю звичайного кольору, в складку береться вільно. ${longContent} Слизова оболонка незначно гіперемійована та набрякла в ділянці ${tooth} зуба. Коронка ${tooth} зуба ${crownDestruction} зруйнована карієсом, перкусія його різко болісна. ${perioTeethContent}`;
        break;
      case 64:
      case 65:
      case 24:
      case 25:
      case 26:
      case 27:
      case 28:
        basicContent = `обличчя  дещо асиметричне за рахунок невираженого колатерального набряку верхньої третини щічної та підочної ділянок ліворуч. Шкіра над болючою припухлістю звичайного кольору, в складку береться вільно. ${longContent} Слизова оболонка незначно гіперемійована та набрякла в ділянці ${tooth} зуба. Коронка ${tooth} зуба ${crownDestruction} зруйнована карієсом, перкусія його різко болісна.`;
        break;
      case 74:
      case 75:
      case 34:
      case 35:
      case 36:
      case 37:
      case 38:
        basicContent = `обличчя  дещо асиметричне за рахунок невираженого колатерального набряку нижньої третини щічної ділянки ліворуч. Шкіра над болючою припухлістю звичайного кольору, в складку береться вільно. ${longContent} Слизова оболонка незначно гіперемійована та набрякла в ділянці ${tooth} зуба. Коронка ${tooth} зуба ${crownDestruction} зруйнована карієсом, перкусія його різко болісна. ${perioTeethContent}`;
        break;
      case 84:
      case 85:
      case 44:
      case 45:
      case 46:
      case 47:
      case 48:
        basicContent = `обличчя  дещо асиметричне за рахунок невираженого колатерального набряку нижньої третини щічної ділянки праворуч. Шкіра над болючою припухлістю звичайного кольору, в складку береться вільно. ${longContent} Слизова оболонка незначно гіперемійована та набрякла в ділянці ${tooth} зуба. Коронка ${tooth} зуба ${crownDestruction} зруйнована карієсом, перкусія його різко болісна. ${perioTeethContent}`;
        break;
      case 51:
      case 52:
      case 53:
      case 11:
      case 12:
      case 13:
        basicContent = `обличчя  дещо асиметричне за рахунок невираженого колатерального набряку верхньої губи праворуч. Шкіра над болючою припухлістю звичайного кольору, в складку береться вільно. ${longContent} Слизова оболонка незначно гіперемійована та набрякла в ділянці ${tooth} зуба. Коронка ${tooth} зуба ${crownDestruction} зруйнована карієсом, перкусія його різко болісна. ${perioTeethContent}`;
        break;
      case 61:
      case 62:
      case 63:
      case 21:
      case 22:
      case 23:
        basicContent = `обличчя  дещо асиметричне за рахунок невираженого колатерального набряку верхньої губи ліворуч. Шкіра над болючою припухлістю звичайного кольору, в складку береться вільно. ${longContent} Слизова оболонка незначно гіперемійована та набрякла в ділянці ${tooth} зуба. Коронка ${tooth} зуба ${crownDestruction} зруйнована карієсом, перкусія його різко болісна. ${perioTeethContent}`;
        break;
      case 71:
      case 72:
      case 73:
      case 31:
      case 32:
      case 33:
        basicContent = `обличчя  дещо асиметричне за рахунок невираженого колатерального набряку нижньої губи ліворуч. Шкіра над болючою припухлістю звичайного кольору, в складку береться вільно. ${longContent} Слизова оболонка незначно гіперемійована та набрякла в ділянці ${tooth} зуба. Коронка ${tooth} зуба ${crownDestruction} зруйнована карієсом, перкусія його різко болісна. ${perioTeethContent}`;
        break;
      case 81:
      case 82:
      case 83:
      case 41:
      case 42:
      case 43:
        basicContent = `обличчя  дещо асиметричне за рахунок невираженого колатерального набряку нижньої губи праворуч. Шкіра над болючою припухлістю звичайного кольору, в складку береться вільно. ${longContent} Слизова оболонка незначно гіперемійована та набрякла в ділянці ${tooth} зуба. Коронка ${tooth} зуба ${crownDestruction} зруйнована карієсом, перкусія його різко болісна. ${perioTeethContent}`;
        break;
      default:
        basicContent = `обличчя симетричне. Шкіра над болючою припухлістю звичайного кольору, в складку береться вільно. ${longContent} Слизова оболонка незначно гіперемійована та набрякла в ділянці ${tooth} зуба. Коронка ${tooth} зуба ${crownDestruction} зруйнована карієсом, перкусія його різко болісна. ${perioTeethContent}`;
    }
  } else if (type === "skinWound") {
    basicContent = `обличчя симетричне. ${longContent} При огляді ${woundArea}${woundSide} виявлена ${woundType} рана ${woundForm} форми,${woundSize} ${woundSurfaceStr}. ${woundLedges}. Кровоточивість з рани ${woundBleeding}. ${woundAliens}.`;
  } else if (type === "tongueBridle") {
    basicContent = ` обличчя симетричне. ${longContent} Язик звичайних розмірів, рухи його обмежені, дитина не може доторкнутися його кінчиком до піднебіння. Вуздечка язика коротка, представлена дублікатурою слизової оболонки.`;
  } else if (type === "lipBridle") {
    basicContent = ` обличчя симетричне. ${longContent} Наявна діастема між центральними різцями (11,21 зуби) верхньої щелепи. Ніжка вуздечки верхньої губи вплітається до сосочка між центральними різцями та переходить на серединний шов піднебіння. Коротка вуздечка верхньої губи зумовлює помітне втягування середньої частини червоної облямівки.`;
  } else if (type === "caries") {
    basicContent = ` обличчя симетричне. ${longContent} ${sanationPerio} Зубна формула.`;
  } else if (type === "abscess") {
    basicContent = `${abscessTemplate} ${abscessToothTemplate}`;
  } else if (type === "cyst") {
    basicContent = `${cystBeginning} ${longContent} ${cystTemplate}`;
  } else if (type === "retention") {
    basicContent = `обличчя симетричне. ${longContent} ${retentionTemplate}`;
  } else if (type === "neoplasm") {
    basicContent = `обличчя симетричне. ${longContent} ${neoplasmTemplate}`;
  } else if (type === "fractureLowerJaw") {
    basicContent = ` ${fractureLowerJawTemplate}`;
  } else if (type === "dislocationTooth") {
    basicContent = ` ${dlTemplate}`;
  } else if (type === "overComplete") {
    basicContent = ` ${overCompleteTemplate}`;
  }
  const finalStr = `${shortContent}${basicContent}`;
  return finalStr;
};

const biteChecker = (age) => {
  if (Number(age) < 6) {
    return "Тимчасовий";
  } else if (Number(age) < 12) {
    return "Змінний";
  } else {
    return "Постійний";
  }
};
