import React, { useState, useEffect, useMemo } from "react";
import T from "prop-types";
import "./styles.css";
import { numArrayCreator } from "./functions/numArrayCreator";
import { ToothItem } from "./components/ToothItem";
import { statusMounter } from "./functions/changedListMounter";
import { progressChecker } from "./utils/utils";
import {
  upperConstantTeeth,
  upperTemporaryTeeth,
  lowerConstantTeeth,
  lowerTemporaryTeeth,
  diseaseList,
  start2List,
  conditionList,
  crownDestructionList,
  drugName1List,
  drugName2List,
  drugName3List,
  drugName4List,
  drugName5List,
  pliersList,
  elevatorList,
  surgeons,
  assistants,
  areaList,
  sideList,
  injuryReasonList,
  woundSurfaceList,
  woundTypeList,
  woundFormList,
  woundLedgesList,
  woundBleedingList,
  woundAliensList,
  sutureTypeList,
  sutureMaterialList,
  sutureSizeList,
  toothList,
  retention1List,
  retention2List,
  retention3List,
  retention4List,
  abscessAreaList,
  abscessTypeList,
  abscessReasonList,
  cystTypeList,
  rootSealedList,
  neoplasmTypeList,
  growthRateList,
  neoplasmFormList,
  neoplasmBorderList,
  neoplasmMovabilityList,
  neoplasmPoignancyList,
  neoplasmConsistanceList,
  neoplasmSurfaceList,
  neoplasmColorList,
  bilateralismList,
  fractureLowerAreaList,
  fractureBiasList,
  fractureDirectionList,
  fractureLowerTeethList,
  teethInFractureLineList,
  fractureStepList,
  continuityList,
  xRayList,
  fractureOperationTypeList,
  dlTypeList,
  dlOperationTypeList,
  dlToothList,
  dlDirectionList,
  overCompleteLocationList,
  xRayList2,
  overCompleteFormList,
  overCompleteAmountList
} from "./database";

export const PatientForm = ({ onAdd, params }) => {
  const [showForm, setShowForm] = useState(false);
  const [showAddPatients, setShowAddPatients] = useState(true);
  const [showPerioLines, setShowPerioLines] = useState(false);
  const [showSkinWoundLines, setShowSkinWoundLines] = useState(false);
  const [suturingLine, setSuturingLine] = useState(false);
  const [showCariesLines, setShowCariesLines] = useState(false);
  const [showAbscessLines, setShowAbscessLines] = useState(false);
  const [showNeoplasmLines, setShowNeoplasmLines] = useState(false);
  const [showCystLines, setShowCystLines] = useState(false);
  const [showRetentionLines, setShowRetentionLines] = useState(false);
  const [showFractureLowerJawLines, setShowFractureLowerJawLines] = useState(
    false
  );
  const [showFractureLowerJawLine2, setShowFractureLowerJawLine2] = useState(
    false
  );
  const [showDlLines, setShowDlLines] = useState(false);
  const [showDlLine2, setShowDlLine2] = useState(false);
  const [showOverCompleteLines, setShowOverCompleteLines] = useState(false);
  const [showOverCompleteLine2, setShowOverCompleteLine2] = useState(false);
  const [urgentDisease, setUrgentDisease] = useState(true);
  const [complaintsDuration, setComplaintsDuration] = useState(true);
  const [showAdditionAppointment, setShowAdditionAppointment] = useState(false);

  const [showSecondLine, setShowSecondLine] = useState(false);
  const [showSpecialLines, setShowSpecialLines] = useState(false);
  const [showForPlanned, setShowForPlannedLine] = useState(false);
  const doctors = params.doctors.split(",").map((item, idx) => {
    if (idx === 0) {
      return { name: item, value: "" };
    } else return { name: item, value: item };
  });
  const anesthetistList = params.anesthetistList.split(",").map((item, idx) => {
    if (idx === 0) {
      return { name: item, value: "" };
    } else return { name: item, value: item };
  });
  const onCancel = () => {
    setShowForm(false);
    setShowAddPatients(true);
    setDisease(diseaseList[0].value);
    setShowPerioLines(false);
    setShowSkinWoundLines(false);
    setSuturingLine(false);
    setShowCariesLines(false);
    setShowAbscessLines(false);
    setUrgentDisease(true);
  };
  const onShowForm = () => {
    if (disease === "") return;
    setShowForm(true);
    if (disease === "periodontit" || disease === "periostit") {
      setShowPerioLines(true);
    }
    if (disease === "skinWound") {
      setShowSkinWoundLines(true);
      setSuturingLine(true);
    }
    if (disease === "tongueBridle" || disease === "lipBridle") {
      setSuturingLine(true);
      setUrgentDisease(false);
    }
    if (
      disease === "tongueBridle" ||
      disease === "lipBridle" ||
      disease === "caries" ||
      disease === "cyst" ||
      disease === "neoplasm" ||
      disease === "overComplete" ||
      disease === "retention"
    ) {
      setComplaintsDuration(false);
    }
    if (disease === "caries") {
      setShowCariesLines(true);
      setUrgentDisease(false);
    }
    if (disease === "cyst") {
      setShowCystLines(true);
      setUrgentDisease(false);
    }
    if (disease === "neoplasm") {
      setShowNeoplasmLines(true);
      setUrgentDisease(false);
    }
    if (disease === "abscess") {
      setShowAbscessLines(true);
    }
    if (disease === "dislocationTooth") {
      setShowDlLines(true);
    }
    if (disease === "overComplete") {
      setShowOverCompleteLines(true);
    }
    if (disease === "retention") {
      setShowRetentionLines(true);
      setUrgentDisease(false);
    }
    if (disease === "fractureLowerJaw") {
      setShowFractureLowerJawLines(true);
    }
    if (disease === "overComplete") {
      setShowOverCompleteLines(true);
      setUrgentDisease(false);
    }
    setShowAddPatients(false);
  };
  const initDate = new Date();
  const date = `${initDate.getDate()}.${
    initDate.getMonth() + 1
  }.${initDate.getFullYear()}`;
  const [startDay, setStartDay] = useState(Number(initDate.getDate()));
  const [startMonth, setStartMonth] = useState(1 + Number(initDate.getMonth()));
  const [startYear, setStartYear] = useState(Number(initDate.getFullYear()));
  const [disease, setDisease] = useState(diseaseList[0].value);
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState(null);
  const [doctor, setDoctor] = useState(doctors[0].value);
  const [toothCasual, setToothCasual] = useState("");
  const [start1, setStart1] = useState(1);
  const [start2, setStart2] = useState(start2List[0]);
  const [pregnancy, setPregnancy] = useState(1);
  const [childbirth, setChildbirth] = useState(1);
  const [birthWeight, setBirthWeight] = useState(3600);
  const [condition, setCondition] = useState(conditionList[1]);
  const [weight, setWeight] = useState(null);

  const [age, setAge] = useState(null);
  const [crownDestruction, setCrownDestruction] = useState(
    crownDestructionList[0].value
  );
  const [inflammationArea, setInflammationArea] = useState("");
  const [drugName1, setDrugName1] = useState(drugName1List[0].value);
  const [drugName2, setDrugName2] = useState(drugName2List[0].value);
  const [drugName3, setDrugName3] = useState(drugName3List[0].value);
  const [drugName4, setDrugName4] = useState(drugName4List[0].value);
  const [drugName5, setDrugName5] = useState(drugName5List[0].value);
  const [appointment, setAppointment] = useState("");
  const [appointment2, setAppointment2] = useState("");
  const [appointment3, setAppointment3] = useState("");
  const [protocolNumber, setProtocolNumber] = useState(null);
  const [operationDate, setOperationDate] = useState(date);
  const [operationTime, setOperationTime] = useState("");
  const [pliers, setPliers] = useState(pliersList[0].value);
  const [elevator, setElevator] = useState(elevatorList[0].value);
  const [duration, setDuration] = useState(null);
  const [surgeon, setSurgeon] = useState(surgeons[0].value);
  const [assistant, setAssistant] = useState(assistants[0].value);
  const [anesthetist, setAnesthetist] = useState(anesthetistList[0].value);
  const [woundArea, setWoundArea] = useState(areaList[0].value);
  const [woundSide, setWoundSide] = useState(sideList[0].value);
  const [injuryDate, setInjuryDate] = useState(date);
  const [injuryTime, setInjuryTime] = useState("");
  const [injuryReason, setInjuryReason] = useState(injuryReasonList[0].value);
  const [woundSurface, setWoundSurface] = useState(woundSurfaceList[0].value);
  const [woundType, setWoundType] = useState(woundTypeList[0].value);
  const [woundLength, setWoundLength] = useState("");
  const [woundWidth, setWoundWidth] = useState("");
  const [woundDepth, setWoundDepth] = useState("");
  const [woundForm, setWoundForm] = useState(woundFormList[0].value);
  const [woundLedges, setWoundLedges] = useState(woundLedgesList[0].value);
  const onWoundLedgesChange = (event) => setWoundLedges(event.target.value);
  const [woundBleeding, setWoundBleeding] = useState(
    woundBleedingList[0].value
  );
  const [woundAliens, setWoundAliens] = useState(woundAliensList[0].value);
  const [sutureType, setSutureType] = useState(sutureTypeList[0].value);
  const [sutureMaterial, setSutureMaterial] = useState(
    sutureMaterialList[0].value
  );
  const [sutureSize, setSutureSize] = useState(sutureSizeList[0].value);
  const [perioTeeth, setPerioTeeth] = useState("");
  const [retention1, setRetention1] = useState("");
  const [retention2, setRetention2] = useState("");
  const [retention3, setRetention3] = useState("");
  const [retention4, setRetention4] = useState("");
  const [anestesiaType, setAnestesiaType] = useState("Загальне");
  const onAnestesiaTypeChoise = (event) => {
    setAnestesiaType(event.target.value);
  };
  const [changedList, setChangedList] = useState([]);
  const onToothAdd = (_id, morbi) => {
    const newTooth = { id: _id, disease: morbi, status: statusMounter(morbi) };
    setChangedList([...changedList, newTooth]);
  };
  const onToothRemove = (_id) => {
    setChangedList([...changedList].filter((item) => item.id !== _id));
  };
  const [operationFree, setOperationFree] = useState(false);
  const onOperationFreeChange = () => {
    setOperationFree(!operationFree);
  };
  const [abscessType, setAbscessType] = useState(abscessTypeList[0].value);
  const [abscessArea, setAbscessArea] = useState(abscessAreaList[0].value);
  const [abscessSide, setAbscessSide] = useState(sideList[0].value);
  const [abscessReason, setAbscessReason] = useState(
    abscessReasonList[0].value
  );
  const [abscessTooth, setAbscessTooth] = useState("");
  const [cystType, setCystType] = useState(cystTypeList[0].value);
  const [cystTooth, setCystTooth] = useState(toothList[0]);
  const cystDiameterList = numArrayCreator(5, 40).map((d) =>
    (d / 10).toFixed(1)
  );
  const [cystDiameter, setCystDiameter] = useState(0.5);
  const [rootSealed, setRootSealed] = useState(rootSealedList[0].value);
  const [isTemporaryToothAbove, setIsTemporaryToothAbove] = useState(false);
  const onIsTemporaryToothAboveChange = () => {
    setIsTemporaryToothAbove(!isTemporaryToothAbove);
  };
  const [neoplasmType, setNeoplasmType] = useState(neoplasmTypeList[0].value);
  const [growthRate, setGrowthRate] = useState(growthRateList[0].value);
  const neoplasmDiameterList = numArrayCreator(1, 40).map((d) =>
    (d / 10).toFixed(1)
  );
  const [neoplasmDiameter, setNeoplasmDiameter] = useState(
    neoplasmDiameterList[0]
  );
  const [neoplasmForm, setNeoplasmForm] = useState(neoplasmFormList[0].value);
  const [neoplasmBorders, setNeoplasmBorders] = useState(
    neoplasmBorderList[0].value
  );
  const [neoplasmMovability, setNeoplasmMovability] = useState(
    neoplasmMovabilityList[0].value
  );
  const [neoplasmPoignancy, setNeoplasmPoignancy] = useState(
    neoplasmPoignancyList[0].value
  );
  const [neoplasmConsistance, setNeoplasmConsistance] = useState(
    neoplasmConsistanceList[0].value
  );
  const [neoplasmArea, setNeoplasmArea] = useState(areaList[0].value);
  const [neoplasmSide, setNeoplasmSide] = useState(sideList[0].value);
  const [neoplasmSurface, setNeoplasmSurface] = useState(
    neoplasmSurfaceList[0].value
  );
  const [neoplasmColor, setNeoplasmColor] = useState(
    neoplasmColorList[0].value
  );
  const [neoplasmAboveSurface, setNeoplasmAboveSurface] = useState(false);
  const onNeoplasmAboveSurfaceChange = (e) => {
    setNeoplasmAboveSurface(!neoplasmAboveSurface);
  };
  const [neoplasmSurfaceAlter, setNeoplasmSurfaceAlter] = useState(false);
  const onNeoplasmSurfaceAlterChange = (e) => {
    setNeoplasmSurfaceAlter(e.target.value);
  };
  const [bilateralismLower, setBilateralismLower] = useState(
    bilateralismList[0].value
  );
  const [fractureLowerArea1, setFractureLowerArea1] = useState(
    fractureLowerAreaList[0].value
  );
  const [fractureLowerArea2, setFractureLowerArea2] = useState(
    fractureLowerAreaList[0].value
  );
  const [fractureLowerSide1, setFractureLowerSide1] = useState(
    sideList[0].value
  );
  const [fractureLowerSide2, setFractureLowerSide2] = useState(
    sideList[0].value
  );
  const [fractureLowerBias2, setFractureLowerBias2] = useState(
    fractureBiasList[0]
  );
  const [fractureLowerBias1, setFractureLowerBias1] = useState(
    fractureBiasList[0]
  );
  const [fractureLowerDirection1, setFractureLowerDirection1] = useState(
    fractureDirectionList[0].value
  );
  const [fractureLowerDirection2, setFractureLowerDirection2] = useState(
    fractureDirectionList[0].value
  );
  const [fractureLowerTooth1a, setFractureLowerTooth1a] = useState(
    fractureLowerTeethList[0].value
  );
  const [fractureLowerTooth2a, setFractureLowerTooth2a] = useState(
    fractureLowerTeethList[0].value
  );
  const [fractureLowerTooth1b, setFractureLowerTooth1b] = useState(
    fractureLowerTeethList[0].value
  );
  const [fractureLowerTooth2b, setFractureLowerTooth2b] = useState(
    fractureLowerTeethList[0].value
  );
  const [fractureTooth1aText, setFractureTooth1aText] = useState("");
  const [fractureTooth1bText, setFractureTooth1bText] = useState("");
  const [fractureTooth2aText, setFractureTooth2aText] = useState("");
  const [fractureTooth2bText, setFractureTooth2bText] = useState("");
  const [fractureLowerTeethInLine1, setFractureLowerTeethInLine1] = useState(
    teethInFractureLineList[0].value
  );
  const onFractureLowerTeethInLine1Change = (e) => {
    setFractureLowerTeethInLine1(e.target.value);
  };
  const [fractureLowerTeethInLine2, setFractureLowerTeethInLine2] = useState(
    teethInFractureLineList[0].value
  );
  const [fractureLowerStep1, setFractureLowerStep1] = useState(
    fractureStepList[0].value
  );
  const [fractureLowerStep2, setFractureLowerStep2] = useState(
    fractureStepList[0].value
  );
  const [lowerJawSubmucous1, setLowerJawSubmucous1] = useState(false);
  const onLowerJawSubmucous1Change = () => {
    setLowerJawSubmucous1(!lowerJawSubmucous1);
  };
  const [lowerJawSubmucous2, setLowerJawSubmucous2] = useState(false);
  const onLowerJawSubmucous2Change = () => {
    setLowerJawSubmucous2(!lowerJawSubmucous2);
  };
  const [xRay, setXRay] = useState(xRayList[0]);
  const [continuity, setContinuity] = useState(continuityList[0].value);
  const [fractureOperationType, setFractureOperationType] = useState(
    fractureOperationTypeList[0].value
  );
  const [dlType, setDlType] = useState(dlTypeList[0].value);
  const [dlAlveolusDestroyed, setDlAlveolusDestroyed] = useState(false);
  const onDlAlveolusDestroyedChange = () => {
    setDlAlveolusDestroyed(!dlAlveolusDestroyed);
  };
  const [dlOperationType, setDlOperationType] = useState(
    dlOperationTypeList[0].value
  );
  const [dlDirection, setDlDirection] = useState(dlDirectionList[0].value);
  const dlDistanceList = numArrayCreator(0, 10);
  const [dlDistance, setDlDistance] = useState(dlDistanceList[0]);
  const [dlDeployed, setDlDeployed] = useState(false);
  const onDlDeployedChange = () => {
    setDlDeployed(!dlDeployed);
  };
  const [dlTooth1, setDlTooth1] = useState(dlToothList[0]);
  const [dlTooth2, setDlTooth2] = useState(dlToothList[0]);
  const [dlTooth3, setDlTooth3] = useState(dlToothList[0]);
  const [dlType2, setDlType2] = useState(dlTypeList[0].value);
  const [dlAlveolusDestroyed2, setDlAlveolusDestroyed2] = useState(false);
  const onDlAlveolusDestroyed2Change = () => {
    setDlAlveolusDestroyed2(!dlAlveolusDestroyed2);
  };
  const [dlOperationType2, setDlOperationType2] = useState(
    dlOperationTypeList[0].value
  );
  const [dlDirection2, setDlDirection2] = useState(dlDirectionList[0].value);
  const [dlDistance2, setDlDistance2] = useState(dlDistanceList[0]);
  const [dlDeployed2, setDlDeployed2] = useState(false);
  const onDlDeployed2Change = () => {
    setDlDeployed2(!dlDeployed2);
  };
  const [dlTooth4, setDlTooth4] = useState(dlToothList[0]);
  const [dlTooth5, setDlTooth5] = useState(dlToothList[0]);
  const [dlTooth6, setDlTooth6] = useState(dlToothList[0]);
  const [dlTooth7, setDlTooth7] = useState(dlToothList[0]);
  const [dlTooth8, setDlTooth8] = useState(dlToothList[0]);
  const [overCompleteTooth1, setOverCompleteTooth1] = useState(dlToothList[0]);
  const [overCompleteTooth2, setOverCompleteTooth2] = useState(dlToothList[0]);
  const [overCompleteTooth3, setOverCompleteTooth3] = useState(dlToothList[0]);
  const [overCompleteTooth4, setOverCompleteTooth4] = useState(dlToothList[0]);
  const [overCompleteLocation, setOverCompleteLocation] = useState(
    overCompleteLocationList[0].value
  );
  const [overCompleteForm, setOverCompleteForm] = useState(
    overCompleteFormList[0].value
  );
  const [overCompleteLocation2, setOverCompleteLocation2] = useState(
    overCompleteLocationList[0].value
  );
  const [overCompleteForm2, setOverCompleteForm2] = useState(
    overCompleteFormList[0].value
  );
  const [overCompleteXRay, setOverCompleteXRay] = useState(xRayList2[0].value);
  const [overCompleteAmount, setOverCompleteAmount] = useState(
    Number(overCompleteAmountList[0].value)
  );
  const onSubmit = (e) => {
    e.preventDefault();
    if (age === null) {
      alert(`Не вказано вік пацієнта`);
      return;
    }
    if (weight === null) {
      alert(`Не вказано вагу пацієнта`);
      return;
    }
    if (doctor === "") {
      alert(`Не вказано особистого лікаря`);
      return;
    }
    if (cardNumber === null) {
      alert(`Не введено номер медичної карти`);
      return;
    }
    if (name === "") {
      alert(`Не введено ім'я пацієнта`);
      return;
    }
    if (
      (disease === "periodontit" || disease === "periostit") &&
      toothCasual === ""
    ) {
      alert(`Вкажіть причинний зуб`);
      return;
    }
    if (
      (disease === "periodontit" || disease === "periostit") &&
      inflammationArea === ""
    ) {
      alert(`Вкажіть ділянку запалення`);
      return;
    }
    if (disease === "skinWound" && woundArea === "") {
      alert(`Вкажіть ділянку рани`);
      return;
    }
    if (disease === "skinWound" && woundType === "") {
      alert(`Вкажіть вид рани`);
      return;
    }
    if (disease === "caries" && changedList.length === 0) {
      alert(`Не вказано жодної патології зубів!`);
      return;
    }
    if (
      disease !== "caries" &&
      disease !== "tongueBridle" &&
      disease !== "lipBridle" &&
      disease !== "cyst" &&
      disease !== "retention" &&
      disease !== "neoplasm" &&
      disease !== "overComplete" &&
      !operationFree
    ) {
      if (duration === null) {
        alert(`Не вказано тривалість операції`);
        return;
      }
      if (surgeon === "") {
        alert(`Не вказано ім'я хірурга`);
        return;
      }
      if (assistant === "") {
        alert(`Не вказано ім'я асистента`);
        return;
      }
      if (anesthetist === "") {
        alert(`Не вказано ім'я анестезіолога`);
        return;
      }
      if (operationTime === "") {
        alert(`Не вказано час операції`);
        return;
      }
    }
    onAdd(
      disease,
      startDay,
      startMonth,
      startYear,
      cardNumber,
      name,
      doctor,
      toothCasual,
      start1,
      start2,
      pregnancy,
      childbirth,
      birthWeight,
      condition,
      weight,
      age,
      crownDestruction,
      inflammationArea,
      drugName1,
      drugName2,
      drugName3,
      drugName4,
      drugName5,
      appointment,
      appointment2,
      appointment3,
      protocolNumber,
      operationDate,
      operationTime,
      pliers,
      elevator,
      duration,
      surgeon,
      assistant,
      anesthetist,
      woundArea,
      woundSide,
      injuryDate,
      injuryTime,
      injuryReason,
      woundType,
      woundLength,
      woundWidth,
      woundDepth,
      woundForm,
      woundLedges,
      woundBleeding,
      woundAliens,
      sutureType,
      sutureMaterial,
      sutureSize,
      perioTeeth,
      changedList,
      anestesiaType,
      woundSurface,
      abscessType,
      abscessArea,
      abscessSide,
      abscessReason,
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
      neoplasmType,
      neoplasmArea,
      neoplasmSide,
      growthRate,
      neoplasmSurface,
      neoplasmMovability,
      neoplasmPoignancy,
      neoplasmConsistance,
      neoplasmDiameter,
      neoplasmColor,
      neoplasmBorders,
      neoplasmAboveSurface,
      neoplasmSurfaceAlter,
      neoplasmForm,
      bilateralismLower,
      fractureLowerArea1,
      fractureLowerSide1,
      fractureLowerBias1,
      fractureLowerDirection1,
      fractureLowerTooth1a,
      fractureLowerTooth1b,
      fractureLowerTeethInLine1,
      fractureLowerStep1,
      lowerJawSubmucous1,
      xRay,
      continuity,
      fractureOperationType,
      fractureLowerArea2,
      fractureLowerSide2,
      fractureLowerBias2,
      fractureLowerDirection2,
      fractureLowerTooth2a,
      fractureLowerTooth2b,
      fractureLowerTeethInLine2,
      fractureLowerStep2,
      lowerJawSubmucous2,
      dlType,
      dlAlveolusDestroyed,
      dlOperationType,
      dlDirection,
      dlDistance,
      dlDeployed,
      dlTooth1,
      dlTooth2,
      dlTooth3,
      dlTooth4,
      dlAlveolusDestroyed2,
      dlOperationType2,
      dlDirection2,
      dlDistance2,
      dlDeployed2,
      dlTooth5,
      dlTooth6,
      dlTooth7,
      dlTooth8,
      dlType2,
      overCompleteTooth1,
      overCompleteTooth2,
      overCompleteTooth3,
      overCompleteTooth4,
      overCompleteForm,
      overCompleteForm2,
      overCompleteLocation,
      overCompleteLocation2,
      overCompleteXRay,
      overCompleteAmount,
      operationFree
    );
    setDisease(diseaseList[0].value);
    setStartDay(initDate.getDate());
    setStartMonth(initDate.getMonth());
    setStartYear(initDate.getFullYear());
    setName("");
    setCardNumber(null);
    setDoctor(doctors[0].value);
    setToothCasual("");
    setStart1(1);
    setStart2(start2List[0]);
    setPregnancy(1);
    setChildbirth(1);
    setBirthWeight(3600);
    setCondition(conditionList[1]);
    setWeight(null);
    setAge(null);
    setCrownDestruction(crownDestructionList[0].value);
    setInflammationArea("");
    setDrugName1(drugName1List[0].value);
    setDrugName2(drugName2List[0].value);
    setDrugName3(drugName3List[0].value);
    setDrugName4(drugName4List[0].value);
    setDrugName5(drugName5List[0].value);
    setAppointment("");
    setProtocolNumber(null);
    setOperationDate(date);
    setOperationTime("");
    setPliers(pliersList[0].value);
    setElevator(elevatorList[0].value);
    setDuration(null);
    setSurgeon(surgeons[0].value);
    setAssistant(assistants[0].value);
    setAnesthetist(anesthetistList[0].value);
    setWoundArea(areaList[0].value);
    setWoundSide(sideList[0].value);
    setInjuryDate(date);
    setInjuryTime("");
    setInjuryReason(injuryReasonList[0].value);
    setWoundType(woundTypeList[0].value);
    setWoundLength("");
    setWoundWidth("");
    setWoundDepth("");
    setWoundForm(woundFormList[0].value);
    setWoundLedges(woundLedgesList[0].value);
    setWoundBleeding(woundBleedingList[0].value);
    setWoundAliens(woundAliensList[0].value);
    setSutureType(sutureTypeList[0].value);
    setSutureMaterial(sutureMaterialList[0].value);
    setSutureSize(sutureSizeList[0].value);
    setPerioTeeth("");
    setShowAddPatients(true);
    setShowForm(false);
    setChangedList([]);
    setShowPerioLines(false);
    setShowSkinWoundLines(false);
    setShowAbscessLines(false);
    setSuturingLine(false);
    setShowCariesLines(false);
    setUrgentDisease(true);
    setAnestesiaType("Загальне");
    setWoundSurface(woundSurfaceList[0].value);
    setAbscessType(abscessTypeList[0].value);
    setAbscessArea(abscessAreaList[0].value);
    setAbscessSide(sideList[0].value);
    setAbscessReason(abscessReasonList[0].value);
    setAbscessTooth("");
    setCystTooth(toothList[0]);
    setCystDiameter(cystDiameterList[0]);
    setIsTemporaryToothAbove(false);
    setCystType(cystTypeList[0].value);
    setRootSealed(rootSealedList[0].value);
    setNeoplasmType(neoplasmTypeList[0].value);
    setNeoplasmArea(areaList[0].value);
    setNeoplasmSide(sideList[0].value);
    setGrowthRate(growthRateList[0].value);
    setNeoplasmSurface(neoplasmSurfaceList[0].value);
    setNeoplasmMovability(neoplasmMovabilityList[0].value);
    setNeoplasmPoignancy(neoplasmPoignancyList[0].value);
    setNeoplasmConsistance(neoplasmConsistanceList[0].value);
    setNeoplasmDiameter(neoplasmDiameter[0]);
    setNeoplasmColor(neoplasmColorList[0].value);
    setNeoplasmBorders(neoplasmBorderList[0].value);
    setNeoplasmAboveSurface(false);
    setNeoplasmSurfaceAlter(false);
  };
  const progressValue = useMemo(
    () =>
      progressChecker(
        doctor,
        cardNumber,
        name,
        weight,
        age,
        duration,
        surgeon,
        assistant,
        anesthetist,
        operationTime
      ),
    [
      doctor,
      cardNumber,
      name,
      weight,
      age,
      duration,
      surgeon,
      assistant,
      anesthetist,
      operationTime
    ]
  );
  useEffect(() => {
    setShowFractureLowerJawLine2(bilateralismLower ? true : false);
  }, [bilateralismLower]);
  useEffect(() => {
    setFractureTooth1aText(
      fractureLowerTeethInLine1 === "between"
        ? `між`
        : fractureLowerTeethInLine1 === "through"
        ? `через`
        : ``
    );
    setFractureTooth1bText(fractureLowerTeethInLine1 === "between" ? `та` : ``);
  }, [fractureLowerTeethInLine1]);
  useEffect(() => {
    setFractureTooth2aText(
      fractureLowerTeethInLine2 === "between"
        ? `між`
        : fractureLowerTeethInLine2 === "through"
        ? `через`
        : ``
    );
    setFractureTooth2bText(fractureLowerTeethInLine2 === "between" ? `та` : ``);
  }, [fractureLowerTeethInLine2]);
  return (
    <div className="form">
      {showAddPatients && (
        <div id="addPatient">
          <select value={disease} onChange={(e) => setDisease(e.target.value)}>
            {diseaseList.map((item, idx) => (
              <option key={idx} value={item.value}>
                {item.name}
              </option>
            ))}
          </select>
          <button onClick={onShowForm}>Додати пацієнта</button>
        </div>
      )}
      <form onSubmit={onSubmit}>
        {showForm && (
          <div className="mainForm">
            <div className="flexBetween">
              <div className="label" id="firstLine">
                Дата госпіталізації
              </div>{" "}
              <input
                type="number"
                min="1"
                max="31"
                value={startDay}
                onChange={(e) => setStartDay(e.target.value)}
              />
              <input
                type="number"
                min="1"
                max="12"
                value={startMonth}
                onChange={(e) => setStartMonth(e.target.value)}
              />
              <input
                type="number"
                min="2020"
                max="9999"
                value={startYear}
                onChange={(e) => setStartYear(e.target.value)}
              />
              <select
                value={doctor}
                onChange={(e) => {
                  setDoctor(e.target.value);
                  setShowSecondLine(true);
                }}
                className="mandatoryField"
              >
                {doctors.map((item, idx) => (
                  <option key={idx} value={item.value}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            {showSecondLine && (
              <div className="flexBetween">
                {" "}
                <input
                  className="mandatoryField"
                  type="number"
                  min="0"
                  max="20000"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  placeholder="№ карти..."
                />{" "}
                <input
                  className="extraLongInputs mandatoryField"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="ПІБ пацієнта..."
                />
                <input
                  className="mandatoryField"
                  type="number"
                  min="0"
                  max="150"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="Вік..."
                />
                <input
                  className="mandatoryField"
                  type="number"
                  min="3"
                  max="120"
                  value={weight}
                  onChange={(e) => {
                    setWeight(e.target.value);
                    setShowSpecialLines(true);
                    if (!urgentDisease) {
                      setShowForPlannedLine(true);
                    }
                  }}
                  placeholder="Вага..."
                />{" "}
              </div>
            )}
            {complaintsDuration && showSecondLine && (
              <div className="flexBetween">
                {" "}
                <div className="label">Тривалість скарг</div>
                <input
                  type="number"
                  min="1"
                  max="11"
                  value={start1}
                  onChange={(e) => setStart1(e.target.value)}
                />
                <select
                  value={start2}
                  onChange={(e) => setStart2(e.target.value)}
                >
                  {start2List.map((item, idx) => (
                    <option key={idx} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <div className="label">Загальний стан</div>
                <select
                  value={condition}
                  onChange={(e) => setCondition(e.target.value)}
                >
                  {conditionList.map((item, idx) => (
                    <option key={idx} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            )}
            {showSpecialLines && (
              <div className="flexBetween">
                {" "}
                <div className="label">Вагітність</div>
                <input
                  type="number"
                  min="1"
                  max="20"
                  value={pregnancy}
                  onChange={(e) => setPregnancy(e.target.value)}
                />
                <div className="label">Пологи</div>
                <input
                  type="number"
                  min="1"
                  max="20"
                  value={childbirth}
                  onChange={(e) => setChildbirth(e.target.value)}
                  placeholder="Пологи..."
                />
                <input
                  type="number"
                  value={birthWeight}
                  onChange={(e) => setBirthWeight(e.target.value)}
                  placeholder="Вага при народженні..."
                />
              </div>
            )}
            {showPerioLines && showSpecialLines && (
              <div className="flexBetween">
                {" "}
                <input
                  className="mandatoryField"
                  value={toothCasual}
                  onChange={(e) => setToothCasual(e.target.value)}
                  placeholder="Причинний зуб..."
                />{" "}
                <select
                  value={crownDestruction}
                  onChange={(e) => setCrownDestruction(e.target.value)}
                >
                  {crownDestructionList.map((item, idx) => (
                    <option key={idx} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
                <input
                  className="mandatoryField"
                  value={inflammationArea}
                  onChange={(e) => setInflammationArea(e.target.value)}
                  placeholder="Ділянка запалення..."
                />
              </div>
            )}
            {(showSkinWoundLines || showFractureLowerJawLines || showDlLines) &&
              showSpecialLines && (
                <div className="flexBetween">
                  {" "}
                  <div className="label">Дата травми:</div>
                  <input
                    className="shortInputs"
                    value={injuryDate}
                    onChange={(e) => setInjuryDate(e.target.value)}
                    placeholder="Дата травми..."
                  />
                  <input
                    className="shortInputs"
                    value={injuryTime}
                    onChange={(e) => setInjuryTime(e.target.value)}
                    placeholder="Час травми..."
                  />{" "}
                  <select
                    value={injuryReason}
                    onChange={(e) => setInjuryReason(e.target.value)}
                  >
                    {injuryReasonList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <input
                    className="middleInputs"
                    value={injuryReason}
                    onChange={(e) => setInjuryReason(e.target.value)}
                    placeholder="Причина травми..."
                  />
                </div>
              )}
            {showSkinWoundLines && showSpecialLines && (
              <div className="flexBetween">
                <select
                  value={woundSurface}
                  onChange={(e) => setWoundSurface(e.target.value)}
                >
                  {woundSurfaceList.map((item, idx) => (
                    <option key={idx} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>{" "}
                <select
                  value={woundArea}
                  onChange={(e) => setWoundArea(e.target.value)}
                >
                  {areaList.map((item, idx) => (
                    <option key={idx} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
                <select
                  value={woundSide}
                  onChange={(e) => setWoundSide(e.target.value)}
                >
                  {sideList.map((item, idx) => (
                    <option key={idx} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
                <select
                  value={woundType}
                  onChange={(e) => setWoundType(e.target.value)}
                >
                  {woundTypeList.map((item, idx) => (
                    <option key={idx} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
                <input
                  className="superShortInputs"
                  value={woundLength}
                  onChange={(e) => setWoundLength(e.target.value)}
                  placeholder="довжина..."
                />
                <input
                  className="superShortInputs"
                  value={woundWidth}
                  onChange={(e) => setWoundWidth(e.target.value)}
                  placeholder="ширина..."
                />
                <input
                  className="superShortInputs"
                  value={woundDepth}
                  onChange={(e) => setWoundDepth(e.target.value)}
                  placeholder="глибина..."
                />
              </div>
            )}

            {showSkinWoundLines && showSpecialLines && (
              <div className="flexBetween">
                {" "}
                <select
                  value={woundForm}
                  onChange={(e) => setWoundForm(e.target.value)}
                >
                  {woundFormList.map((item, idx) => (
                    <option key={idx} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
                <select value={woundLedges} onChange={onWoundLedgesChange}>
                  {woundLedgesList.map((item, idx) => (
                    <option key={idx} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
                <select
                  value={woundBleeding}
                  onChange={(e) => setWoundBleeding(e.target.value)}
                >
                  {woundBleedingList.map((item, idx) => (
                    <option key={idx} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
                <select
                  value={woundAliens}
                  onChange={(e) => setWoundAliens(e.target.value)}
                >
                  {woundAliensList.map((item, idx) => (
                    <option key={idx} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {showAbscessLines && showSpecialLines && (
              <div className="flexBetween">
                {" "}
                <select
                  value={abscessType}
                  onChange={(e) => setAbscessType(e.target.value)}
                >
                  {abscessTypeList.map((item, idx) => (
                    <option key={idx} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
                <select
                  value={abscessArea}
                  onChange={(e) => setAbscessArea(e.target.value)}
                >
                  {abscessAreaList.map((item, idx) => (
                    <option key={idx} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
                <select
                  value={abscessSide}
                  onChange={(e) => setAbscessSide(e.target.value)}
                >
                  {sideList.map((item, idx) => (
                    <option key={idx} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
                <select
                  value={abscessReason}
                  onChange={(e) => setAbscessReason(e.target.value)}
                >
                  {abscessReasonList.map((item, idx) => (
                    <option key={idx} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
                <input
                  className="shortInputs"
                  value={abscessTooth}
                  onChange={(e) => setAbscessTooth(e.target.value)}
                  placeholder="зуб..."
                />{" "}
              </div>
            )}
            {showCystLines && showSpecialLines && (
              <div className="flexBetween">
                <select
                  value={cystType}
                  onChange={(e) => setCystType(e.target.value)}
                >
                  {cystTypeList.map((item, idx) => (
                    <option key={idx} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
                <div className="label">Причинний зуб</div>
                <select
                  value={cystTooth}
                  onChange={(e) => setCystTooth(e.target.value)}
                >
                  {toothList.map((item, idx) => (
                    <option key={idx} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <div className="label">Діаметр</div>
                <input
                  value={cystDiameter}
                  className="mandatoryField"
                  type="number"
                  step="0.1"
                  min="0.5"
                  max="15.0"
                  placeholder="діаметр"
                  onChange={(e) => setCystDiameter(e.target.value)}
                />
                <div className="label2">+ тимч. зуб</div>
                <input
                  className="checkbox"
                  type="checkbox"
                  value={isTemporaryToothAbove}
                  onChange={onIsTemporaryToothAboveChange}
                  checked={isTemporaryToothAbove}
                />
                <select
                  value={rootSealed}
                  onChange={(e) => setRootSealed(e.target.value)}
                >
                  {rootSealedList.map((item, idx) => (
                    <option key={idx} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {showFractureLowerJawLines && showSpecialLines && (
              <div className="flexBetween">
                {" "}
                <select
                  value={bilateralismLower}
                  onChange={(e) => setBilateralismLower(e.target.value)}
                >
                  {bilateralismList.map((item, idx) => (
                    <option key={idx} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
                <select
                  value={continuity}
                  onChange={(e) => setContinuity(e.target.value)}
                >
                  {continuityList.map((item, idx) => (
                    <option key={idx} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
                <select value={xRay} onChange={(e) => setXRay(e.target.value)}>
                  {xRayList.map((item, idx) => (
                    <option key={idx} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <select
                  value={fractureOperationType}
                  onChange={(e) => setFractureOperationType(e.target.value)}
                >
                  {fractureOperationTypeList.map((item, idx) => (
                    <option key={idx} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            )}
            {showFractureLowerJawLines && showSpecialLines && (
              <>
                <div className="flexBetween">
                  <div className="label">1-й перелом</div>
                  <select
                    value={fractureLowerArea1}
                    onChange={(e) => setFractureLowerArea1(e.target.value)}
                  >
                    {fractureLowerAreaList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <select
                    value={fractureLowerSide1}
                    onChange={(e) => setFractureLowerSide1(e.target.value)}
                  >
                    {sideList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <select
                    value={fractureLowerBias1}
                    onChange={(e) => setFractureLowerBias1(e.target.value)}
                  >
                    {fractureBiasList.map((item, idx) => (
                      <option key={idx} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <select
                    value={fractureLowerDirection1}
                    onChange={(e) => setFractureLowerDirection1(e.target.value)}
                  >
                    {fractureDirectionList.map((item, idx) => (
                      <option key={idx} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flexBetween">
                  <select
                    value={fractureLowerTeethInLine1}
                    onChange={onFractureLowerTeethInLine1Change}
                  >
                    {teethInFractureLineList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <div className="label">{fractureTooth1aText}</div>
                  <select
                    value={fractureLowerTooth1a}
                    onChange={(e) => setFractureLowerTooth1a(e.target.value)}
                  >
                    {fractureLowerTeethList.map((item, idx) => (
                      <option key={idx} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <div className="label">{fractureTooth1bText}</div>
                  <select
                    value={fractureLowerTooth1b}
                    onChange={(e) => setFractureLowerTooth1b(e.target.value)}
                  >
                    {fractureLowerTeethList.map((item, idx) => (
                      <option key={idx} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <select
                    value={fractureLowerStep1}
                    onChange={(e) => setFractureLowerStep1(e.target.value)}
                  >
                    {fractureStepList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <div className="label">Розрив слизової</div>
                  <input
                    className="checkbox"
                    type="checkbox"
                    value={lowerJawSubmucous1}
                    onChange={onLowerJawSubmucous1Change}
                    checked={lowerJawSubmucous1}
                  />
                </div>
              </>
            )}

            {showFractureLowerJawLine2 && showSpecialLines && (
              <>
                <div
                  className="flexBetween"
                  style={{ backgroundColor: `aliceBlue` }}
                >
                  <div className="label">2-й перелом</div>
                  <select
                    value={fractureLowerArea2}
                    onChange={(e) => setFractureLowerArea2(e.target.value)}
                  >
                    {fractureLowerAreaList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <select
                    value={fractureLowerSide2}
                    onChange={(e) => setFractureLowerSide2(e.target.value)}
                  >
                    {sideList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <select
                    value={fractureLowerBias2}
                    onChange={(e) => setFractureLowerBias2(e.target.value)}
                  >
                    {fractureBiasList.map((item, idx) => (
                      <option key={idx} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <select
                    value={fractureLowerDirection2}
                    onChange={(e) => setFractureLowerDirection2(e.target.value)}
                  >
                    {fractureDirectionList.map((item, idx) => (
                      <option key={idx} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
                <div
                  className="flexBetween"
                  style={{ backgroundColor: `aliceBlue` }}
                >
                  <select
                    value={fractureLowerTeethInLine2}
                    onChange={(e) =>
                      setFractureLowerTeethInLine2(e.target.value)
                    }
                  >
                    {teethInFractureLineList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <div className="label">{fractureTooth2aText}</div>
                  <select
                    value={fractureLowerTooth2a}
                    onChange={(e) => setFractureLowerTooth2a(e.target.value)}
                  >
                    {fractureLowerTeethList.map((item, idx) => (
                      <option key={idx} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <div className="label">{fractureTooth2bText}</div>
                  <select
                    value={fractureLowerTooth2b}
                    onChange={(e) => setFractureLowerTooth2b(e.target.value)}
                  >
                    {fractureLowerTeethList.map((item, idx) => (
                      <option key={idx} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <select
                    value={fractureLowerStep2}
                    onChange={(e) => setFractureLowerStep2(e.target.value)}
                  >
                    {fractureStepList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <div className="label">Розрив слизової</div>
                  <input
                    className="checkbox"
                    type="checkbox"
                    value={lowerJawSubmucous2}
                    onChange={onLowerJawSubmucous2Change}
                    checked={lowerJawSubmucous2}
                  />
                </div>
              </>
            )}

            {showDlLines && showSpecialLines && (
              <>
                <div className="flexBetween">
                  <select
                    value={dlType}
                    onChange={(e) => setDlType(e.target.value)}
                  >
                    {dlTypeList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <div className="label">Зуби</div>
                  <select
                    value={dlTooth1}
                    onChange={(e) => setDlTooth1(e.target.value)}
                  >
                    {dlToothList.map((item, idx) => (
                      <option key={idx} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <select
                    value={dlTooth2}
                    onChange={(e) => setDlTooth2(e.target.value)}
                  >
                    {dlToothList.map((item, idx) => (
                      <option key={idx} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <select
                    value={dlTooth3}
                    onChange={(e) => setDlTooth3(e.target.value)}
                  >
                    {dlToothList.map((item, idx) => (
                      <option key={idx} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <select
                    value={dlOperationType}
                    onChange={(e) => setDlOperationType(e.target.value)}
                  >
                    {dlOperationTypeList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <select
                    value={dlTooth4}
                    onChange={(e) => setDlTooth4(e.target.value)}
                  >
                    {dlToothList.map((item, idx) => (
                      <option key={idx} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flexBetween">
                  <div className="label">Руйнування альвеоли</div>
                  <input
                    className="checkbox"
                    type="checkbox"
                    value={dlAlveolusDestroyed}
                    onChange={onDlAlveolusDestroyedChange}
                    checked={dlAlveolusDestroyed}
                  />
                  <select
                    value={dlDirection}
                    onChange={(e) => setDlDirection(e.target.value)}
                  >
                    {dlDirectionList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <div className="label">мм</div>
                  <select
                    value={dlDistance}
                    onChange={(e) => setDlDistance(e.target.value)}
                  >
                    {dlDistanceList.map((item, idx) => (
                      <option key={idx} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <div className="label">Розвернутий по осі</div>
                  <input
                    className="checkbox"
                    type="checkbox"
                    value={dlDeployed}
                    onChange={onDlDeployedChange}
                    checked={dlDeployed}
                  />
                  <div className="label2" onClick={() => setShowDlLine2(true)}>
                    +зуб
                  </div>
                </div>
                {showDlLine2 && showSpecialLines && (
                  <>
                    <div className="flexBetween">
                      <select
                        value={dlType2}
                        onChange={(e) => setDlType2(e.target.value)}
                      >
                        {dlTypeList.map((item, idx) => (
                          <option key={idx} value={item.value}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                      <div className="label">Зуби</div>
                      <select
                        value={dlTooth5}
                        onChange={(e) => setDlTooth5(e.target.value)}
                      >
                        {dlToothList.map((item, idx) => (
                          <option key={idx} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                      <select
                        value={dlTooth6}
                        onChange={(e) => setDlTooth6(e.target.value)}
                      >
                        {dlToothList.map((item, idx) => (
                          <option key={idx} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                      <select
                        value={dlTooth7}
                        onChange={(e) => setDlTooth7(e.target.value)}
                      >
                        {dlToothList.map((item, idx) => (
                          <option key={idx} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                      <select
                        value={dlTooth8}
                        onChange={(e) => setDlTooth8(e.target.value)}
                      >
                        {dlToothList.map((item, idx) => (
                          <option key={idx} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                      <select
                        value={dlOperationType2}
                        onChange={(e) => setDlOperationType2(e.target.value)}
                      >
                        {dlOperationTypeList.map((item, idx) => (
                          <option key={idx} value={item.value}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="flexBetween">
                      <div className="label">Руйнування альвеоли</div>
                      <input
                        className="checkbox"
                        type="checkbox"
                        value={dlAlveolusDestroyed2}
                        onChange={onDlAlveolusDestroyed2Change}
                        checked={dlAlveolusDestroyed2}
                      />
                      <select
                        value={dlDirection2}
                        onChange={(e) => setDlDirection2(e.target.value)}
                      >
                        {dlDirectionList.map((item, idx) => (
                          <option key={idx} value={item.value}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                      <div className="label">мм</div>
                      <select
                        value={dlDistance2}
                        onChange={(e) => setDlDistance2(e.target.value)}
                      >
                        {dlDistanceList.map((item, idx) => (
                          <option key={idx} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                      <div className="label">Розвернутий по осі</div>
                      <input
                        className="checkbox"
                        type="checkbox"
                        value={dlDeployed2}
                        onChange={onDlDeployed2Change}
                        checked={dlDeployed2}
                      />
                    </div>
                  </>
                )}
              </>
            )}
            {showOverCompleteLines && showSpecialLines && (
              <>
                <div className="flexBetween">
                  <select
                    value={overCompleteAmount}
                    onChange={(e) => setOverCompleteAmount(e.target.value)}
                  >
                    {overCompleteAmountList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <div className="label">В проекції зубів</div>
                  <select
                    value={overCompleteTooth1}
                    onChange={(e) => setOverCompleteTooth1(e.target.value)}
                  >
                    {dlToothList.map((item, idx) => (
                      <option key={idx} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <select
                    value={overCompleteTooth2}
                    onChange={(e) => setOverCompleteTooth2(e.target.value)}
                  >
                    {dlToothList.map((item, idx) => (
                      <option key={idx} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <select
                    value={overCompleteLocation}
                    onChange={(e) => setOverCompleteLocation(e.target.value)}
                  >
                    {overCompleteLocationList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <select
                    value={overCompleteForm}
                    onChange={(e) => setOverCompleteForm(e.target.value)}
                  >
                    {overCompleteFormList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <select
                    value={overCompleteXRay}
                    onChange={(e) => setOverCompleteXRay(e.target.value)}
                  >
                    {xRayList2.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <div
                    className="label2"
                    onClick={() => setShowOverCompleteLine2(true)}
                  >
                    +зуб
                  </div>
                </div>
                {showOverCompleteLine2 && showSpecialLines && (
                  <>
                    <div className="flexBetween">
                      <div className="label">В проекції зубів</div>
                      <select
                        value={overCompleteTooth3}
                        onChange={(e) => setOverCompleteTooth3(e.target.value)}
                      >
                        {dlToothList.map((item, idx) => (
                          <option key={idx} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                      <select
                        value={overCompleteTooth4}
                        onChange={(e) => setOverCompleteTooth4(e.target.value)}
                      >
                        {dlToothList.map((item, idx) => (
                          <option key={idx} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                      <select
                        value={overCompleteLocation2}
                        onChange={(e) =>
                          setOverCompleteLocation2(e.target.value)
                        }
                      >
                        {overCompleteLocationList.map((item, idx) => (
                          <option key={idx} value={item.value}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                      <select
                        value={overCompleteForm2}
                        onChange={(e) => setOverCompleteForm2(e.target.value)}
                      >
                        {overCompleteFormList.map((item, idx) => (
                          <option key={idx} value={item.value}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </>
                )}
              </>
            )}

            {showNeoplasmLines && showSpecialLines && (
              <>
                <div className="flexBetween">
                  <select
                    value={neoplasmType}
                    onChange={(e) => setNeoplasmType(e.target.value)}
                  >
                    {neoplasmTypeList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <select
                    value={neoplasmArea}
                    onChange={(e) => setNeoplasmArea(e.target.value)}
                  >
                    {areaList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <select
                    value={neoplasmSide}
                    onChange={(e) => setNeoplasmSide(e.target.value)}
                  >
                    {sideList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <select
                    value={neoplasmSurface}
                    onChange={(e) => setNeoplasmSurface(e.target.value)}
                  >
                    {neoplasmSurfaceList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <select
                    value={growthRate}
                    onChange={(e) => setGrowthRate(e.target.value)}
                  >
                    {growthRateList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flexBetween">
                  <select
                    value={neoplasmMovability}
                    onChange={(e) => setNeoplasmMovability(e.target.value)}
                  >
                    {neoplasmMovabilityList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <select
                    value={neoplasmPoignancy}
                    onChange={(e) => setNeoplasmPoignancy(e.target.value)}
                  >
                    {neoplasmPoignancyList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <select
                    value={neoplasmConsistance}
                    onChange={(e) => setNeoplasmConsistance(e.target.value)}
                  >
                    {neoplasmConsistanceList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <input
                    value={neoplasmDiameter}
                    className="mandatoryField"
                    type="number"
                    step="0.1"
                    min="0.1"
                    max="15.0"
                    placeholder="діаметр"
                    onChange={(e) => setNeoplasmDiameter(e.target.value)}
                  />
                  <select
                    value={neoplasmColor}
                    onChange={(e) => setNeoplasmColor(e.target.value)}
                  >
                    {neoplasmColorList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flexBetween">
                  <select
                    value={neoplasmForm}
                    onChange={(e) => setNeoplasmForm(e.target.value)}
                  >
                    {neoplasmFormList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <select
                    value={neoplasmBorders}
                    onChange={(e) => setNeoplasmBorders(e.target.value)}
                  >
                    {neoplasmBorderList.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <div className="label">Над поверхнею</div>
                  <input
                    className="checkbox"
                    type="checkbox"
                    value={neoplasmAboveSurface}
                    onChange={onNeoplasmAboveSurfaceChange}
                    checked={neoplasmAboveSurface}
                  />
                  <div className="label">Поверхня над ним змінена</div>
                  <input
                    className="checkbox"
                    type="checkbox"
                    value={neoplasmSurfaceAlter}
                    onChange={onNeoplasmSurfaceAlterChange}
                    checked={neoplasmSurfaceAlter}
                  />
                </div>
              </>
            )}

            {showRetentionLines && showSpecialLines && (
              <div className="flexBetween">
                <div className="label">Ретеновані зуби</div>
                <select
                  value={retention1}
                  onChange={(e) => setRetention1(e.target.value)}
                >
                  {retention1List.map((item, idx) => (
                    <option key={idx} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <select
                  value={retention2}
                  onChange={(e) => setRetention2(e.target.value)}
                >
                  {retention2List.map((item, idx) => (
                    <option key={idx} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <select
                  value={retention3}
                  onChange={(e) => setRetention3(e.target.value)}
                >
                  {retention3List.map((item, idx) => (
                    <option key={idx} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <select
                  value={retention4}
                  onChange={(e) => setRetention4(e.target.value)}
                >
                  {retention4List.map((item, idx) => (
                    <option key={idx} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {showSpecialLines && (
              <>
                {" "}
                <div className="flexBetween">
                  {" "}
                  <select
                    value={drugName1}
                    onChange={(e) => setDrugName1(e.target.value)}
                  >
                    {drugName1List.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <select
                    value={drugName2}
                    onChange={(e) => setDrugName2(e.target.value)}
                  >
                    {drugName2List.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <select
                    value={drugName3}
                    onChange={(e) => setDrugName3(e.target.value)}
                  >
                    {drugName3List.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <select
                    value={drugName4}
                    onChange={(e) => setDrugName4(e.target.value)}
                  >
                    {drugName4List.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flexBetween">
                  {" "}
                  <select
                    value={drugName5}
                    onChange={(e) => setDrugName5(e.target.value)}
                  >
                    {drugName5List.map((item, idx) => (
                      <option key={idx} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <input
                    className="extraLongInputs"
                    value={appointment}
                    onChange={(e) => setAppointment(e.target.value)}
                    placeholder="Додаткові призначення..."
                  />
                  <div
                    className="label2"
                    onClick={() => setShowAdditionAppointment(true)}
                  >
                    додаткові
                  </div>
                </div>
                {showAdditionAppointment && (
                  <div className="flexBetween">
                    <input
                      className="longInputs"
                      value={appointment2}
                      onChange={(e) => setAppointment2(e.target.value)}
                      placeholder="Дод. призначення..."
                    />
                    <input
                      className="longInputs"
                      value={appointment3}
                      onChange={(e) => setAppointment3(e.target.value)}
                      placeholder="Дод. призначення..."
                    />
                  </div>
                )}
                {urgentDisease && (
                  <>
                    <div className="flexBetween">
                      {" "}
                      <input
                        className="middleInputs mandatoryField"
                        type="number"
                        min="1"
                        max="999"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        placeholder="Тривалість..."
                      />{" "}
                      <select
                        value={surgeon}
                        onChange={(e) => setSurgeon(e.target.value)}
                        className="mandatoryField"
                      >
                        {surgeons.map((item, idx) => (
                          <option key={idx} value={item.value}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                      <select
                        className="mandatoryField"
                        value={assistant}
                        onChange={(e) => setAssistant(e.target.value)}
                      >
                        {assistants.map((item, idx) => (
                          <option key={idx} value={item.value}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                      <select
                        className="mandatoryField"
                        value={anesthetist}
                        onChange={(e) => setAnesthetist(e.target.value)}
                      >
                        {anesthetistList.map((item, idx) => (
                          <option key={idx} value={item.value}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </>
                )}
                {showSpecialLines && (
                  <>
                    <div className="flexBetween">
                      {" "}
                      <input
                        className="middleInputs"
                        type="number"
                        min="1"
                        max="999"
                        value={protocolNumber}
                        onChange={(e) => setProtocolNumber(e.target.value)}
                        placeholder="№ протоколу..."
                      />
                      <div className="label">Знеболення</div>
                      <label className="radioButtons">
                        <span>загальне</span>
                        <input
                          className="radioButtonsInput"
                          name="anestesiaType"
                          type="radio"
                          value="Загальне"
                          checked={anestesiaType === "Загальне"}
                          onChange={onAnestesiaTypeChoise}
                        />
                      </label>
                      <label className="radioButtons">
                        <span>місцеве</span>
                        <input
                          className="radioButtonsInput"
                          name="anestesiaType"
                          type="radio"
                          value="Місцеве"
                          checked={anestesiaType === "Місцеве"}
                          onChange={onAnestesiaTypeChoise}
                        />
                      </label>
                      <input
                        className="shortInputs"
                        value={operationDate}
                        onChange={(e) => setOperationDate(e.target.value)}
                        placeholder="Дата операції..."
                      />
                      <input
                        className="shortInputs mandatoryField"
                        value={operationTime}
                        onChange={(e) => setOperationTime(e.target.value)}
                        placeholder="Час операції"
                      />
                    </div>
                  </>
                )}
                {showPerioLines && showSpecialLines && (
                  <div className="flexBetween">
                    <select
                      value={pliers}
                      onChange={(e) => setPliers(e.target.value)}
                    >
                      {pliersList.map((item, idx) => (
                        <option key={idx} value={item.value}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                    <select
                      value={elevator}
                      onChange={(e) => setElevator(e.target.value)}
                    >
                      {elevatorList.map((item, idx) => (
                        <option key={idx} value={item.value}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                    <input
                      className="extraLongInputs"
                      value={perioTeeth}
                      onChange={(e) => setPerioTeeth(e.target.value)}
                      placeholder="Періодонтитні зуби(через кому)..."
                    />
                  </div>
                )}
                {suturingLine && showSpecialLines && (
                  <div className="flexBetween">
                    {" "}
                    <select
                      value={sutureType}
                      onChange={(e) => setSutureType(e.target.value)}
                    >
                      {sutureTypeList.map((item, idx) => (
                        <option key={idx} value={item.value}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                    <select
                      value={sutureMaterial}
                      onChange={(e) => setSutureMaterial(e.target.value)}
                    >
                      {sutureMaterialList.map((item, idx) => (
                        <option key={idx} value={item.value}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                    <select
                      value={sutureSize}
                      onChange={(e) => setSutureSize(e.target.value)}
                    >
                      {sutureSizeList.map((item, idx) => (
                        <option key={idx} value={item.value}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                <div className="flexi">
                  <div className="label">Без операції</div>
                  <input
                    className="checkbox"
                    type="checkbox"
                    value={operationFree}
                    onChange={onOperationFreeChange}
                    checked={operationFree}
                  />
                </div>
              </>
            )}
            {showCariesLines && showSpecialLines && (
              <div id="cariesLines">
                <div className="toothList">
                  {upperConstantTeeth.map((item) => (
                    <ToothItem
                      key={item}
                      id={item}
                      onToothAdd={onToothAdd}
                      onToothRemove={onToothRemove}
                    />
                  ))}
                </div>
                <div className="toothList">
                  {upperTemporaryTeeth.map((item) => (
                    <ToothItem
                      key={item}
                      id={item}
                      onToothAdd={onToothAdd}
                      onToothRemove={onToothRemove}
                    />
                  ))}
                </div>
                <div className="toothList">
                  {lowerTemporaryTeeth.map((item) => (
                    <ToothItem
                      key={item}
                      id={item}
                      onToothAdd={onToothAdd}
                      onToothRemove={onToothRemove}
                    />
                  ))}
                </div>
                <div className="toothList">
                  {lowerConstantTeeth.map((item) => (
                    <ToothItem
                      key={item}
                      id={item}
                      onToothAdd={onToothAdd}
                      onToothRemove={onToothRemove}
                    />
                  ))}
                </div>
              </div>
            )}
            {urgentDisease && (
              <div className="flexi">
                <progress value={progressValue} max="100d"></progress>
              </div>
            )}
            {(showSpecialLines || showForPlanned) && (
              <>
                {" "}
                <div className="sendLine">
                  <button className="send btnEffect" type="submit">
                    Відправити
                  </button>
                  <button className="btnEffect cancel" onClick={onCancel}>
                    Скасувати
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </form>
    </div>
  );
};

PatientForm.propTypes = {
  onAdd: T.func.isRequired
};
