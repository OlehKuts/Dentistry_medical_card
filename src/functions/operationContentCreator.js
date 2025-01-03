export const operationContentCreator = (
  type,
  tooth,
  area,
  pliers,
  elevators,
  sutureType,
  sutureMaterial,
  sutureSize,
  perioTeeth,
  _changedList = [{ id: 55, name: 55, status: "" }],
  _restMaterial,
  anestesiaType,
  woundSurface,
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
  neoplasmArea,
  fractureOperationType,
  dlTooth1,
  dlTooth2,
  dlTooth3,
  dlTooth4,
  dlTooth5,
  dlTooth6,
  dlOperationType,
  dlOperationType2,
  overCompleteTooth1,
  overCompleteTooth2,
  overCompleteTooth3,
  overCompleteTooth4,
  overCompleteAmount,
  dlTooth7,
  dlTooth8
) => {
  const opBeginning =
    type === "neoplasm" ||
    (type === "abscess" &&
      (abscessArea === `твердого піднебіння` ||
        abscessArea === `щелепно-язикового жолобка`)) ||
    (type === "skinWound" && woundSurface === "шкіра")
      ? "Обробка операційного поля спиртом двічі."
      : "Обробка приротової ділянки спиртом двічі, в роті - 3% розчином перекисю водню.";
  const finishing = `Гемостаз по ходу операції. Дитина переведена в палату зі задовільними показниками гемодинаміки.`;
  const anestesiaTypeMod = `${anestesiaType} знеболення.`;
  const tongueUp =
    neoplasmArea === `язика`
      ? `Язик взято на лігатуру, підтягнуто догори. `
      : ``;
  const tongueDown = neoplasmArea === `язика` ? `Язик знято з лігатури. ` : ``;
  const ocTeethInArea1 =
    overCompleteAmount === 2 &&
    overCompleteTooth3 === `` &&
    overCompleteTooth4 === ``
      ? `надкомплектних зубів `
      : `надкомплектного зуба `;
  const ocTeethInArea1Add =
    overCompleteAmount === 2 &&
    overCompleteTooth3 === `` &&
    overCompleteTooth4 === ``
      ? `кожного `
      : ``;
  const ocPart2 =
    overCompleteTooth3 !== `` || overCompleteTooth4 !== ``
      ? ` Проведено L-подібні розрізи в ділянці надкомплектного до кістки. 
Відшаровано слизово-окістний клапоть. 
Бормашиною зроблено «вікно» в кортикальній пластині діаметром приблизно 0,3 см в проекції надкомплектного зуба та  
звільнено коронкову частину надкомплектного зуба від кістки. Прямим елеватором проведено видалення надкомплектного зуба. 
Рана оброблена 3 % перекисом водню та висушена. Слизово-окістні клапоті укладено на місце. Рану ушито матеріалом "Vicryl 3-0". `
      : ``;
  const overCompleteTemplate = ` ${anestesiaTypeMod} ${opBeginning} Проведено L-подібні розрізи в ділянці ${ocTeethInArea1} до кістки. 
  Відшаровано слизово-окістний клапоть. 
  Бормашиною зроблено «вікно» в кортикальній пластині діаметром приблизно 0,3 см в проекції ${ocTeethInArea1} та  
  звільнено коронкову частину ${ocTeethInArea1Add}зуба від кістки.  Прямим елеватором проведено видалення ${ocTeethInArea1}. 
  Рана оброблена 3 % перекисом водню та висушена. Слизово-окістні клапоті укладено на місце. Рану ушито матеріалом "Vicryl 3-0".${ocPart2}
${finishing}
  `;
  const isSkinWound =
    woundSurface === "шкіра"
      ? `Поверхня рани оброблена "Бетадином". Суха асептича пов'язка. `
      : "";
  const dlTeethList1 = [dlTooth1, dlTooth2, dlTooth3, dlTooth4].filter(
    (t) => t !== ""
  );
  const dlTeethList2 = [dlTooth5, dlTooth6, dlTooth7, dlTooth8].filter(
    (t) => t !== ""
  );
  const dlToothStr1 = dlTeethList1.length > 1 ? `зубів` : `зуба`;
  const dlToothStr2 = dlTeethList2.length > 1 ? `зубів` : `зуба`;
  const dlToothStrAnother1 = dlTeethList1.length > 1 ? `зуби` : `зуб`;
  const dlToothStrAnother2 = dlTeethList2.length > 1 ? `зуби` : `зуб`;
  const dlContentCreator = (type, teethList, toothStr, toothAnotherStr) => {
    const extractionStr = `Проведено видалення ${teethList.join(
      ", "
    )} ${toothStr}.`;
    const splintingStr = ` Проведена реплантація ${teethList.join(
      ", "
    )} ${toothStr} після попередньої антисептичної обробки та пломбування кореневого каналу. 
    ${teethList.join(
      ", "
    )} ${toothAnotherStr} виставлено у звичному до травми прикусі та фіксовано й імобілізовано 
    гладкою шиною – скобою за допомогою пломбувального матеріалу до сусідніх зубів. `;
    const retainerStr = ` Проведена реплантація ${teethList.join(
      ", "
    )} ${toothStr}. 
    ${teethList.join(
      ", "
    )} ${toothAnotherStr} виставлено у звичному до травми прикусі та фіксовано обшиванням лунки матеріалом "Vicryl 3-0" та встановленням
    з піднебінного боку фронтальної групи зубів ортодонтичної дуги, яка закріплена з допомогою композитного матеріалу. `;
    const suturingStr = `Проведена акуратна репозиція ${teethList.join(
      ", "
    )} ${toothStr} в звичному до травми прикусі. Технічно накласти гладку шину – скобу неможливо. Фіксація ${toothStr} обшиванням матеріалом "Vicryl 3-0"`;
    const finalStr =
      type === `extraction`
        ? extractionStr
        : type === `splinting`
        ? splintingStr
        : type === `suturing`
        ? suturingStr
        : type === `retainer`
        ? retainerStr
        : ``;
    return finalStr;
  };
  const dlPart1 = `${dlContentCreator(
    dlOperationType,
    dlTeethList1,
    dlToothStr1,
    dlToothStrAnother1
  )} `;
  const dlPart2 =
    dlOperationType2 === ``
      ? ``
      : `${dlContentCreator(
          dlOperationType2,
          dlTeethList2,
          dlToothStr2,
          dlToothStrAnother2
        )} `;
  const dlTemplate = `${anestesiaTypeMod} ${opBeginning} ${dlPart1}${dlPart2}${finishing}`;
  const newWay = `Зафіксовано гвинти в ділянці малих кутніх зубів з обох боків на нижній та верхній щелепах. Зафіксовано прикус в звичному, як до травми положенні, та імобілізовано нижню щелепу міжщелеповою гумовою тягою. `;
  const ivyWay = ` Проведено в міжзубні проміжки 14, 15, 24, 25, 34, 35, 44, 45 зубів бронзову лігатуру по Айві. Репозиція нижньої щелепи. Фіксація та імобілізація в звичному до травми прикусі. Гемостаз на яснах. `;
  const vasilievWay = ` Проведено в міжзубні проміжки фронтальних та малих кутніх зубів обох щелеп бронзову лігатуру. Зафіксовано на зубах шини Васильєва. Репозиція уламків нижньої щелепи. Фіксація та імобілізація в звичному до травми прикусі. Зафіксовано міжщелепну гумову тягу. Гемостаз на яснах. `;
  const fractureOperationTypeMod =
    fractureOperationType === "по Айві"
      ? ivyWay
      : fractureOperationType === "гвинтами"
      ? newWay
      : vasilievWay;
  const anestesiaDetails =
    anestesiaType === "Місцеве"
      ? ` Інфільтраційна анестезія фронтальних та малих кутніх зубів нижньої та верхньої щелеп розчином артикаїну 4%.`
      : ``;
  const fractureLowerJawTemplate = ` ${anestesiaTypeMod}${anestesiaDetails} ${opBeginning}${fractureOperationTypeMod}${finishing}`;
  const neoplasmTemplate = ` ${opBeginning} ${tongueUp}Проведено два оточуючі розрізи навколо утвору та клиновидно вглиб; висічено його. Рана ушита вузловими швами. ${tongueDown}Препарат віддано на гістологічне дослідження. ${finishing}`;
  const strCystTooth = cystTooth.toString();
  const cystUpperJaw =
    Number(strCystTooth[0]) % 4 === 1 || Number(strCystTooth[0]) % 4 === 2
      ? true
      : false;
  const cystCut = cystUpperJaw ? `дугоподібний` : `П–подібний`;
  const shortCystType =
    cystType === `фолікулярна кіста` || cystType === `радикулярна кіста`
      ? `кісти `
      : `кістогранульоми `;
  const intymaBounding =
    cystType === `фолікулярна кіста`
      ? `, яка інтимно зв’язана зі зародком ${cystTooth} зуба по шийці коронки. Фолікул ${cystTooth} зуба також видалено`
      : ``;
  const cystCutDesc = cystUpperJaw
    ? `основою дуги догори, радіусом приблизно 1 см `
    : ``;
  const borMachineBone =
    shortCystType === `кісти `
      ? ``
      : `Бормашиною зроблено "вікно" в кортикальній пластині діаметром приблизно 0,7 см в проекції ${shortCystType}. `;

  const borMachineResection =
    cystType !== `фолікулярна кіста`
      ? `Бормашиною проведено щадну резекцію верхівки кореня ${cystTooth} зуба. `
      : ``;
  const boneDeleting =
    cystType === `апікальна кістогранульома`
      ? ``
      : `Видалено змінену та випинаючу частину кортикальної пластинки з вестибулярної сторони. `;
  const cystDeleting =
    cystType === `апікальна кістогранульома`
      ? `${shortCystType}`
      : `оболонку ${shortCystType}`;
  const cystSurrounding =
    cystType === `апікальна кістогранульома`
      ? `в проекції верхівки кореня ${cystTooth} `
      : `оточуючий випинання, `;
  const cystTemplate = `${anestesiaTypeMod} ${opBeginning} Проведено ${cystCut}, ${cystSurrounding}розріз ${cystCutDesc}до кістки. Відшаровано слизово-окістний клапоть. ${borMachineBone} ${boneDeleting} Ложками Фолькмана видалено ${cystDeleting} ${intymaBounding}. Препарат віддано на гістологічне дослідження. ${borMachineResection}Кістозна порожнина почергово оброблена 3% розчином перекисю водню та бетадином. Висушено. Слизово-окістний клапоть укладено на місце. Рана ушита вузловими швами матеріалом "Vicryl 3-0". ${finishing}`;
  const retentionList = [retention1, retention2, retention3, retention4];
  const filteredRetentionList = retentionList.filter((r) => r !== "");
  const retentionCutAmount =
    filteredRetentionList.length === 1
      ? `L-подібний розріз`
      : `L-подібні розрізи`;
  const shredAmount =
    filteredRetentionList.length === 1
      ? `Відшаровано слизово-окістний клапоть.`
      : `Відшаровано слизово-окістні клапті.`;
  const retentionTeethAmount =
    filteredRetentionList.length === 1
      ? `ретенованого зуба `
      : `ретенованих зубів `;
  const boneWindow = filteredRetentionList.length === 1 ? `«вікно»` : `«вікна»`;
  const retentionWoundAmount =
    filteredRetentionList.length === 1 ? `Рана` : `Рани`;
  const retentionTemplate = ` ${anestesiaTypeMod} ${opBeginning} Проведено ${retentionCutAmount} в ділянці ${retentionTeethAmount}до кістки. ${shredAmount} Бормашиною зроблено ${boneWindow} в кортикальній пластині діаметром приблизно 0,3 см в проекції ${retentionTeethAmount}, звільнено коронкову частину ${retentionTeethAmount} від кістки. Прямим елеватором проведено видалення ${retentionTeethAmount}. ${retentionWoundAmount} оброблено 3 % перекисом водню. Висушено. Слизово-окістні клапоті укладено на місце. ${retentionWoundAmount} ушито матеріалом "Vicryl 3-0". ${finishing}`;
  const triangle =
    abscessArea === "дна порожнини рота"
      ? `дугоподібної форми в субментальній ділянці`
      : abscessArea === "крило-щелепного простору"
      ? `в підщелепній ділянці`
      : abscessArea === "в ділянці сонного трикутника"
      ? abscessArea
      : abscessArea[abscessArea.length - 1] === "и"
      ? `у ділянці ${abscessArea}`
      : abscessArea[abscessArea.length - 1] === "ї"
      ? `в ${abscessArea.slice(0, -2)}ій ділянці`
      : `в ділянці ${abscessArea.slice(0, -2)}ого трикутника`;
  const paralelMark =
    abscessArea === "дна порожнини рота"
      ? `в проекції верхньої шийної складки`
      : abscessArea === "в ділянці сонного трикутника"
      ? `паралельно до шийної складки`
      : abscessArea[abscessArea.length - 1] === "ї" ||
        abscessArea[abscessArea.length - 1] === "и"
      ? `через центр абсцесу`
      : `паралельно до нижнього краю тіла нижньої щелепи та відступивши від нього вниз на 2 см`;
  const cutLength =
    abscessType === `фурункул` ? `довжиною 1 см` : `довжиною 2 см`;
  const cutArea = `Проведено розріз ${triangle} ${abscessSide} ${paralelMark}, ${cutLength}.`;
  const cutLayers =
    abscessArea === "в ділянці сонного трикутника" ||
    abscessArea === "підщелепної" ||
    abscessArea === "субментальної" ||
    abscessArea === "позадувушної"
      ? `Розсічено шкіру та підшкірну жирову клітковину, поверхневу фасцію шиї, платизму.`
      : abscessArea === "дна порожнини рота"
      ? `Розсічено шкіру та підшкірну жирову клітковину, поверхневу фасцію шиї, платизму, щелепно-під'язиковий та підборідно-під'язиковий м'яз.`
      : `Розсічено шкіру та підшкірну жирову клітковину.`;
  const volume =
    abscessType === "абсцес" ||
    abscessType === "лімфаденіт" ||
    abscessType === "фурункул"
      ? "2"
      : "5";
  const nodeExtraction =
    abscessReason === "лімфовузол"
      ? "Залишки гнійного розплавлення лімфовузла видалено ложкою Фолькмана та взято на гістологічне дослідження."
      : abscessType === "фурункул"
      ? "Гнійно-некротичні маси видалено ложкою Фолькмана."
      : ``;
  const space =
    abscessArea === "в ділянці сонного трикутника" ||
    abscessArea === "дна порожнини рота"
      ? "Порожнину промито розчином декасану"
      : abscessArea === "субментальної"
      ? `Субментальний простір промито розчином декасану`
      : abscessArea === "крило-щелепного простору"
      ? `Крило-щелепний простір промито розчином декасану`
      : `Субмандибулярний простір промито розчином декасану`;
  const ablution =
    abscessType === "абсцес" ||
    abscessType === "лімфаденіт" ||
    abscessType === "фурункул"
      ? `Абсцесну порожнину промито розчином декасану`
      : `${space}`;
  const toothExtraction =
    abscessTooth !== ""
      ? `Видалено ${abscessTooth} зуб, на верхівці кореня якого виявлені множинні дрібні гранульоми.`
      : "";
  const abscessPalatinum = `${anestesiaTypeMod} ${opBeginning}
  На твердому піднебінні ${abscessSide} у місці вибухання слизової оболонки висічено 
  слизово-окісний трикутний клапоть розмірами приблизно 0.5*0.3*0.4см. Відбулося виділення гнійного вмісту 
  об'ємом близько 1 мл, гній взято на бак.посів. 
  ${toothExtraction} ${finishing}`;
  const abscessLingual = `${anestesiaTypeMod} ${opBeginning} 
  Проведено розріз слизової оболонки в під’язиковій ділянці ${abscessSide} 
  паралельно до тіла нижньої щелепи та ближче до нього над щелепно-язиковим жолобком в ділянці 
  ${abscessTooth} та сусідніх зубів. Довжина приблизно 2 см. 
  Тупо москітним затискачем розширено краї рани та пройдено до гнійного осередку. 
  Евакуація гнійного вмісту об'ємом  близько 3 мл з забором на бак.посів. Абсцесна порожнина дренована гумовим випускником.
  ${toothExtraction} ${finishing}`;
  const wingJaw =
    abscessArea === `крило-щелепного простору`
      ? `в крило-щелепному просторі ${abscessSide}`
      : "";
  const abscessTemplate =
    abscessArea === "щелепно-язикового жолобка"
      ? abscessLingual
      : abscessArea === "твердого піднебіння"
      ? abscessPalatinum
      : `${anestesiaTypeMod} ${opBeginning} ${cutArea} ${cutLayers} 
  Тупо москітним затискачем розширено краї рани та пройдено до гнійного осередку ${wingJaw}.
  Евакуація гнійного вмісту об'ємом ${volume} мл. Гній взято на бак.посів. ${nodeExtraction}
  ${ablution} та дреновано гумовим випускником. Асептична пов'язка з гіпертонічним розчином хлориду натрію.
   ${toothExtraction} ${finishing}`;
  let restMaterial = _restMaterial === "" ? "" : `матеріалом ${_restMaterial}`;
  let changedList = _changedList || [{ id: 55, name: 55, status: "" }];
  let cariesList = changedList
    .filter((item) => item.status === "C")
    .map((item) => item.id);
  let pulpitList = changedList
    .filter((item) => item.status === "P")
    .map((item) => item.id);
  let perioList = changedList
    .filter((item) => item.status === "Pt")
    .map((item) => item.id);
  let sanationCaries = "";
  let sanationPulpit = "";
  let sanationPerio = "";
  cariesList.length === 1
    ? (sanationCaries = `Відпрепаровано каріозну порожнину  ${cariesList[0]} зуба. Коронку ${cariesList[0]} зуба відновлено прямою реставрацією ${restMaterial}.`)
    : cariesList.length > 1
    ? (sanationCaries = `Відпрепаровано каріозні порожнини  ${cariesList.join(
        ", "
      )} зубів. Коронки ${cariesList.join(
        ", "
      )} зубів відновлено прямими реставраціями ${restMaterial}.`)
    : (sanationCaries = ``);
  pulpitList.length === 1
    ? (sanationPulpit = `Відпрепаровано каріозну порожнину  ${pulpitList[0]} зуба. Проведена екстирпація пульпи, інструментальна та медикаментозна обробка ${pulpitList[0]} зуба.`)
    : pulpitList.length > 1
    ? (sanationPulpit = `Відпрепаровано каріозні порожнини  ${pulpitList.join(
        ", "
      )} зубів. Проведена екстирпація пульпи, інструментальна та медикаментозна обробка ${pulpitList.join(
        ", "
      )} зубів.`)
    : (sanationPulpit = ``);
  perioList.length === 1
    ? (sanationPerio = `Видалено ${perioList[0]} зуб, на верхівці кореня якого виявлені множинні дрібні гранульоми.`)
    : perioList.length > 1
    ? (sanationPerio = `Видалено ${perioList.join(
        ", "
      )} зуби, на верхівках коренів яких виявлені множинні дрібні гранульоми.`)
    : (sanationPerio = ``);
  let pliersAndElevators = `з допомогою ${pliers}${
    pliers && elevators ? "," : ""
  } ${elevators}`;
  let perioTeethContent = "";
  perioTeeth.length === 2
    ? (perioTeethContent = `Видалено ${perioTeeth} зуб, на верхівці кореня якого виявлені множинні дрібні гранульоми.`)
    : perioTeeth.length > 2
    ? (perioTeethContent = `Видалено ${perioTeeth} зуби, на верхівках коренів яких виявлені множинні дрібні гранульоми.`)
    : (perioTeethContent = "");
  if (type === "periostit") {
    return `${anestesiaTypeMod} ${opBeginning} Проведено розріз до кістки паралельно до перехідної складки в ділянці ${area} зубів, довжиною приблизно 2 см. Тупо москітним затискачем розширено краї рани та пройдено до гнійного осередку. Гнійний вміст об’ємом приблизно 2 мл забрано на бак.посів. Рана дренована гумовим випускником. Видалено ${tooth} зуб ${pliersAndElevators}. На верхівках коренів видаленого зуба виявлені множинні дрібні гранульоми. ${perioTeethContent} ${finishing}`;
  } else if (type === "periodontit") {
    return `${anestesiaTypeMod} ${opBeginning} Видалено ${tooth} зуб ${pliersAndElevators}. На верхівках коренів видаленого зуба виявлені множинні дрібні гранульоми. ${perioTeethContent} ${finishing}`;
  } else if (type === "skinWound") {
    return `${anestesiaTypeMod} ${opBeginning} Ревізія рани. Медикаментозна обробка розчинами декасану та перекисю водню(3%). Краї рани співставлено та ушито ${sutureType}, використовуючи матеріал '${sutureMaterial}${sutureSize}'. ${isSkinWound}${finishing}`;
  } else if (type === "tongueBridle") {
    return `${anestesiaTypeMod} ${opBeginning} Язик взято на лігатуру. Проведено поперечне розсічення сполучнотканинного тяжу вуздечки язика. Здійснено ушивання рани ${sutureType}, використовуючи матеріал '${sutureMaterial}${sutureSize}'. ${finishing}`;
  } else if (type === "lipBridle") {
    return `${anestesiaTypeMod} ${opBeginning} V-подібним розрізом до кістки висічено тяж вуздечки верхньої губи із діастеми. Здійснено ушивання ромбоподібної рани ${sutureType}, використовуючи матеріал '${sutureMaterial}${sutureSize}'. ${finishing}`;
  } else if (type === "caries") {
    return `${anestesiaTypeMod} ${opBeginning} ${sanationCaries} ${sanationPulpit} ${sanationPerio} ${finishing}`;
  } else if (type === "abscess") {
    return `${abscessTemplate}`;
  } else if (type === "cyst") {
    return `${cystTemplate}`;
  } else if (type === "retention") {
    return `${retentionTemplate}`;
  } else if (type === "neoplasm") {
    return `${neoplasmTemplate}`;
  } else if (type === "fractureLowerJaw") {
    return `${fractureLowerJawTemplate}`;
  } else if (type === "dislocationTooth") {
    return `${dlTemplate}`;
  } else if (type === "overComplete") {
    return `${overCompleteTemplate}`;
  }
};
