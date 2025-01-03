export const lastDayCreator = (
  type,
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
) => {
  const beginning = `Обличчя симетричне. Припухлостей немає. `;
  const finishing = `Виписується. Виписка видана батькам на руки. `;
  const ocTwoWounds = [overCompleteTooth3, overCompleteTooth4].some(
    (t) => t !== ``
  );
  const overCompleteMiddle = ocTwoWounds
    ? ` Післяопераційні рани чисті, гояться. `
    : ` Післяопераційна рана чиста, гоїться. `;
  const overCompleteTemplate = ` ${beginning} ${overCompleteMiddle}${finishing}`;
  const dlTeethList1 = [dlTooth1, dlTooth2, dlTooth3, dlTooth4].filter(
    (t) => t !== ""
  );
  const dlTeethList2 = [dlTooth5, dlTooth6, dlTooth7, dlTooth8].filter(
    (t) => t !== ""
  );
  const dlToothSplintStr1 =
    dlTeethList1.length > 1
      ? `Реплантовані зуби нерухомі, в звичному прикусі. `
      : `Реплантований зуб нерухомий, в звичному прикусі. `;
  const dlToothSplintStr2 =
    dlTeethList2.length > 1
      ? `Реплантовані зуби нерухомі, в звичному прикусі. `
      : `Реплантований зуб нерухомі, в звичному прикусі. `;
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
  const dlTemplate = `${beginning}${dlStr1}${dlStr2} Асептична обробка. Туалет порожнини рота. 
  ${finishing}`;
  const skinWoundTemplate = ` ${beginning}Післяопераційна рана чиста, гоїться первинним натягом. ${finishing}`;

  const tongueBridleTemplate = `${beginning}Післяопераційна рана чиста, гоїться первинним натягом. ${finishing}`;
  const periodontitTemplate = `${beginning}Лунка видаленого зуба чиста, гоїться. Виписується. ${finishing}`;
  const cariesTemplate = `${beginning}${finishing}`;
  const periostitTemplate = `${beginning} Видалено гумовий випускник. Лунка видаленого зуба та післяопераційна рана чисті, гоїться. ${finishing}`;
  const abscessLingual =
    abscessArea === `щелепно-язикового жолобка`
      ? ` Видалено гумовий випускник. `
      : ``;
  const limfadenitTemplate = ` ${beginning} ${finishing}`;
  const abscessPalatinum = `${beginning}Обличчя симетричне. Лунка видаленого зуба та післяопераційна рана чисті, гояться.${abscessLingual}${finishing}`;
  const abscessTemplate =
    abscessType === "лімфаденіт" || abscessType === "сіалоаденіт"
      ? limfadenitTemplate
      : abscessArea === `твердого піднебіння` ||
        abscessArea === `щелепно-язикового жолобка`
      ? abscessPalatinum
      : `${beginning}Знято асептичну пов'язку.
   Післяопераційна рана чиста, загоїлась вторинним натягом, оброблена спиртовим розчином брильянтового зеленого. ${finishing}`;
  const fractureLowerJawTemplate = `${beginning}Шкіра обличчя та шиї звичайного кольору. В складку береться. Регіонарні лімфовузли не пальпуються. Шини фіксовані. Нижня щелепа імобілізована в звичному прикусі. Асептична обробка. Підтягнуто лігатури. Заміна гумової тяги. Туалет порожнини рота. ${finishing}`;
  const retentionList = [retention1, retention2, retention3, retention4];
  const filteredRetentionList = retentionList.filter((r) => r !== "");
  const retentionWound =
    filteredRetentionList.length === 1
      ? `Післяопераційна рана чиста. Гоїться первинним натягом.`
      : `Післяопераційні рани чисті. Гояться первинним натягом.`;
  const retentionTemplate = `Обличчя симетричне. Припухлостей немає. ${retentionWound} Виписується. Виписка видана батькам на руки.`;
  switch (type) {
    case "periostit":
      return periostitTemplate;
    case "periodontit":
      return periodontitTemplate;
    case "skinWound":
      return skinWoundTemplate;
    case "tongueBridle":
    case "lipBridle":
    case "cyst":
      return tongueBridleTemplate;
    case "abscess":
      return abscessTemplate;
    case "retention":
      return retentionTemplate;
    case "neoplasm":
      return skinWoundTemplate;
    case "fractureLowerJaw":
      return fractureLowerJawTemplate;
    case "dislocationTooth":
      return dlTemplate;
    case "overComplete":
      return overCompleteTemplate;
    default:
      return cariesTemplate;
  }
};
