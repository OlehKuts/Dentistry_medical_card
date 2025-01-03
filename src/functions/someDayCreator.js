export const someDayCreator = (
  type,
  tooth,
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
) => {
  const lb = bilateralismLower;
  const finishing = `Призначення виконуються.`;
  const beginning = `Обличчя симетричне. Припухлостей немає. `;
  const sutureFixed = `Накладені шви фіксовані. `;
  const ocTwoWounds = [overCompleteTooth3, overCompleteTooth4].some(
    (t) => t !== ``
  );
  const overCompleteMiddle = ocTwoWounds
    ? `Післяопераційні рани чисті, гояться. `
    : `Післяопераційна рана чиста, гоїться. `;
  const overCompleteTemplate = `${beginning}${overCompleteMiddle}${sutureFixed}${finishing}`;
  const dlTeethList1 = [dlTooth1, dlTooth2, dlTooth3, dlTooth4].filter(
    (t) => t !== ""
  );
  const dlTeethList2 = [dlTooth5, dlTooth6, dlTooth7, dlTooth8].filter(
    (t) => t !== ""
  );
  const dlToothSplintStr1 =
    dlTeethList1.length > 1
      ? `Реплантовані зуби нерухомі, в звичному прикусі. `
      : ` Реплантований зуб нерухомий, в звичному прикусі. `;
  const dlToothSplintStr2 =
    dlTeethList2.length > 1
      ? `Реплантовані зуби нерухомі, в звичному прикусі. `
      : ` Реплантований зуб нерухомий, в звичному прикусі. `;
  const dlToothExtStr1 =
    dlTeethList1.length > 1
      ? `Лунки видалених зубів чисті, гояться.`
      : `Лунка видаленого зуба чиста, гоїться.`;
  const dlToothExtStr2 =
    dlTeethList2.length > 1
      ? `Лунки видалених зубів чисті, гояться.`
      : `Лунка видаленого зуба чиста, гоїться.`;
  const dlStr1 =
    dlOperationType === "extraction"
      ? dlToothExtStr1
      : dlOperationType === "splinting"
      ? `${dlToothSplintStr1} Шина фіксована. `
      : dlOperationType === "suturing"
      ? `${dlToothSplintStr1} Шви фіксовані. `
      : ``;
  const dlStr2 =
    dlOperationType2 === "extraction"
      ? dlToothExtStr2
      : dlOperationType2 === "splinting"
      ? `${dlToothSplintStr2} Шина фіксована. `
      : dlOperationType2 === "suturing"
      ? `${dlToothSplintStr2} Шви фіксовані. `
      : ``;
  const dlTemplate = `Реактивний набряк та гіперемія в ділянці оперативного втручання. ${dlStr1}${dlStr2} Асептична обробка. Туалет порожнини рота. 
  ${finishing}`;
  const retentionList = [retention1, retention2, retention3, retention4];
  const filteredRetentionList = retentionList.filter((r) => r !== "");
  const retRightSide = filteredRetentionList.some(
    (r) => Number(r) === 18 || Number(r) === 48
  );
  const retLeftSide = filteredRetentionList.some(
    (r) => Number(r) === 28 || Number(r) === 38
  );
  const retentionSide =
    retLeftSide && retRightSide
      ? `нижньої третини привушно - жувальних ділянок з обох боків`
      : retRightSide
      ? `нижньої третини привушно - жувальної ділянки праворуч`
      : retLeftSide
      ? `нижньої третини привушно - жувальної ділянки ліворуч`
      : ``;
  const retentionTemplate = `Реактивний набряк ${retentionSide} дещо зменшується. Гіперемія в ділянках оперативного втручання зменшується. Післяопераційні рани чисті. ${finishing}`;
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
  const fractureLowerJawTemplate = `Реактивний набряк ${flPainAreaCreator(
    fractureLowerArea1,
    fractureLowerArea2,
    fractureLowerSide1,
    fractureLowerSide2,
    lb
  )} з тенденцією до зменшення. Шини фіксовані. Нижня щелепа імобілізована в звичному прикусі. Асептична обробка. Підтягнуто лігатури. Туалет порожнини рота. ${finishing}`;
  const strCystTooth = cystTooth.toString();
  const cystSide = Number(strCystTooth[0]) % 4 < 2 ? `праворуч` : `ліворуч`;
  const deformationArea =
    Number(strCystTooth[1]) % 10 > 3
      ? `щічної ділянки`
      : Number(strCystTooth[0]) % 4 === 1 || Number(strCystTooth[0]) % 4 === 2
      ? `верхньої губи`
      : `нижньої губи`;
  const cystTemplate = `Обличчя асиметричне за рахунок реактивнивного набряку ${deformationArea} ${cystSide}. Незначна гіперемія в ділянці оперативного втручання. Післяопераційна рана чиста. Асептична обробка. Туалет порожнини рота. ${finishing}`;
  const skinWoundTemplate = `${beginning}Знято асептичну пов'язку. ${sutureFixed}Післяопераційна рана чиста, гоїться; оброблена спиртом. Суха асептична пов'язка. ${finishing}`;
  const neoplasmTemplate =
    neoplasmSurface === `шкіра`
      ? skinWoundTemplate
      : `${beginning}${sutureFixed}Післяопераційна рана чиста, гоїться. ${finishing}`;
  const tongueBridleTemplate = `${beginning}${sutureFixed}Післяопераційна рана чиста, гоїться. Рухи язика відновлені в повному обсязі. ${finishing}`;
  const lipBridleTemplate = `${beginning}${sutureFixed}Післяопераційна рана чиста, гоїться. ${sutureFixed}${finishing}`;
  const periodontitTemplate = `${beginning}Лунка видаленого зуба чиста, виповнена кров'яним згустком. ${finishing}`;
  const cariesTemplate = `${beginning} ${finishing}`;
  const periostitTemplate = (localArea) => {
    return ` Обличчя асиметричне за рахунок незначного колатерального набряку ${localArea}, котрий помітно зменшився. Шкіра над припухлістю звичайного кольору, в  складку береться. Дренаж функціонує. Лунка видаленого зуба чиста, виповнена кров'яним згустком. ${finishing}`;
  };
  const abscessAreaMod =
    abscessArea === "дна порожнини рота"
      ? `субментальної та підщелепних ділянок`
      : abscessArea === "в ділянці сонного трикутника"
      ? `${abscessArea} ${abscessSide}`
      : abscessArea[abscessArea.length - 1] === "ї"
      ? `${abscessArea.slice(0, -2)}ій ділянці ${abscessSide}`
      : `${abscessArea} ${abscessSide}`;
  const space =
    abscessArea === "в ділянці сонного трикутника" && abscessType === `флегмона`
      ? "Порожнину промито розчином декасану до чистих промивних вод."
      : abscessArea === "субментальної" && abscessType === `флегмона`
      ? `Субментальний простір ${abscessSide} промито розчином декасану до чистих промивних вод.`
      : abscessArea === "підщелепної" && abscessType === `флегмона`
      ? `Субмандибулярний простір ${abscessSide} промито розчином декасану до чистих промивних вод.`
      : abscessArea === "крило-щелепного простору"
      ? `Крило-щелепний простір ${abscessSide} промито розчином декасану до чистих промивних вод.`
      : "Абсцесну порожнину промито розчином декасану до чистих промивних вод.";
  const abscessPalatinum = `Обличчя симетричне. Лунка видаленого зуба та післяопераційна рана чисті, гояться. ${finishing}`;
  const limfadenitTemplate = ` Обличчя асиметричне за рахунок припухлості м'яких тканин ${abscessAreaMod}.
  При пальпації тут визначається пакет збільшених лімфовузлів, незначно болісний, рухомий, м'яко-еластичної консистенції, розміри його дещо зменшились,  
  шкіра над ним не зміненого забарвлення, у складку береться. ${finishing}`;
  const sialadenitisTemplate = `Обличчя асиметричне за рахунок колатерального набряку привушно-жувальної  ділянки
   ${abscessSide}, який помітно зменшився. 
   Шкіра над болючою припухлістю звичайного кольору, в складку береться. 
   При пальпації припухлості ${abscessSide} спостерігається збільшена привушна слинна залоза, 
   розмірами приблизно 1 см в діаметрі, незначно болісна при пальпації. 
   Слина прозора, нормальної в’язкості. Устя протоки привушної слинної залози 
   ${abscessSide} дещо гіперемійоване, підвищується над рівнем слизової оболонки, 
   при масажуванні з нього виділяється прозора слина. ${finishing}`;
  const abscessWingJaw = `Обличчя симетричне. 
  Знято асептичну пов'язку. ${space} Заміна гумового випускника. Асептична пов'язка з гіпертонічним розчином хлориду натрію. ${finishing}`;
  const abscessTemplate =
    abscessType === "сіалоаденіт"
      ? sialadenitisTemplate
      : abscessType === "лімфаденіт"
      ? limfadenitTemplate
      : abscessArea === `твердого піднебіння` ||
        abscessArea === `щелепно-язикового жолобка`
      ? abscessPalatinum
      : abscessArea === `крило-щелепного простору`
      ? abscessWingJaw
      : ` Обличчя асиметричне за рахунок колатерального набряку ${abscessAreaMod}, який помітно зменшився.
   Знято асептичну пов'язку. ${space} Заміна гумового випускника. Асептична пов'язка з гіпертонічним розчином хлориду натрію. ${finishing}`;
  if (type === "periostit") {
    switch (Number(tooth)) {
      case 54:
      case 55:
      case 14:
      case 15:
      case 16:
      case 17:
      case 18:
        return periostitTemplate("верхньої третини щічної ділянки праворуч");
      case 64:
      case 65:
      case 24:
      case 25:
      case 26:
      case 27:
      case 28:
        return periostitTemplate("верхньої третини щічної ділянки ліворуч");
      case 74:
      case 75:
      case 34:
      case 35:
      case 36:
      case 37:
      case 38:
        return periostitTemplate("нижньої третини щічної ділянки ліворуч");
      case 84:
      case 85:
      case 44:
      case 45:
      case 46:
      case 47:
      case 48:
        return periostitTemplate("нижньої третини щічної ділянки праворуч");
      case 51:
      case 52:
      case 53:
      case 11:
      case 12:
      case 13:
        return periostitTemplate("верхньої губи праворуч");
      case 61:
      case 62:
      case 63:
      case 21:
      case 22:
      case 23:
        return periostitTemplate("верхньої губи ліворуч");
      case 71:
      case 72:
      case 73:
      case 31:
      case 32:
      case 33:
        return periostitTemplate("нижньої губи ліворуч");
      case 81:
      case 82:
      case 83:
      case 41:
      case 42:
      case 43:
        return periostitTemplate("нижньої губи праворуч");
      default:
        return cariesTemplate;
    }
  } else if (type === "periodontit") {
    return periodontitTemplate;
  } else if (type === "caries") {
    return cariesTemplate;
  } else if (type === "skinWound") {
    return skinWoundTemplate;
  } else if (type === "tongueBridle") {
    return tongueBridleTemplate;
  } else if (type === "lipBridle") {
    return lipBridleTemplate;
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
