import { v4 as uuid } from 'uuid'
import { complaintsCreator } from "./functions/complaintsCreator";
import { anamnesisMorbiCreator } from "./functions/anamnesisMorbiCreator";
import { anamnesisVitaeCreator } from "./functions/anamnesisVitaeCreator";
import { statusPraesensCreator } from "./functions/statusPraesensCreator";
import { statusLocalisCreator } from "./functions/statusLocalisCreator";
import { diagnosisCreator } from "./functions/diagnosisCreator";
import { treatmentCreator } from "./functions/treatmentCreator";
import { operationNameCreator } from "./functions/operationNameCreator";
import { operationContentCreator } from "./functions/operationContentCreator";
import { lastTimeChecker } from "./functions/lastTimeChecker";
import { recommendationsCreator } from "./functions/recommendationsCreator";
import { colorIndexCounter } from "./functions/colorIndexCounter";
import { monoCounter } from "./functions/monoCounter";
import { diaryListCreator } from "./functions/diaryListCreator";
import { respiratoryRateCounter } from "./functions/respiratoryRateCounter";
import { heartRateCounter } from "./functions/heartRateCounter";
import { someDayCreator } from "./functions/someDayCreator";
import { lastDayCreator } from "./functions/lastDayCreator";
import { plannedChecker } from "./functions/plannedChecker";
import { patientEditor } from "./functions/patientEditor";
import {
  formulaMounter,
  finalFormulaMounter,
} from "./functions/formulaMounter";
import { patientTemplate, formulaTemplate } from "./templates";
import { minutesToHoursConverter } from "./utils/utils";
import { initialExaminations } from './database';

export const PATIENTS_ACTIONS = {
  ADD: "add",
  REMOVE: "remove",
  DISCHARGEADD: "dischargeadd",
  EXTRACTADD: "extractadd",
  OPERATIONADD: "operationadd",
  EDIT: "edit",
  EDITDAY: "editday",
  IMPORT: "import",
};

export const initialState = () => {
  const patientsFromStorage = localStorage.getItem("patients");
  const parsedPatients = JSON.parse(patientsFromStorage);
  return parsedPatients || [patientTemplate];
};

export const patientsReducer = (patients, action) => {
  const { payload, disease, startDay, startMonth, startYear, cardNumber,
    doctor, toothCasual, start1, start2, pregnancy, childbirth, birthWeight,
    condition, weight, age, crownDestruction, inflammationArea, drugName1,
    drugName2, drugName3, drugName4, drugName5, appointment, appointment2,
    appointment3, protocolNumber, operationDate, operationTime, pliers, 
    elevator, duration, surgeon, assistant, anesthetist, woundArea,
    woundSide, injuryDate, injuryTime, injuryReason, woundType, woundLength,
    woundWidth, woundDepth, woundForm, woundLedges, woundAliens, woundBleeding,
    sutureType, sutureMaterial, sutureSize, retention1, retention2,
    retention3, retention4, overCompleteAmount, overCompleteTooth1,
    overCompleteTooth2, overCompleteTooth3, overCompleteTooth4, cystDiameter,
    operationFree, isTemporaryToothAbove, cystType, neoplasmType, neoplasmArea,
    neoplasmSide, growthRate, neoplasmSurface, neoplasmAboveSurface, neoplasmColor,
    neoplasmMovability, neoplasmBorders, neoplasmSurfaceAlter, neoplasmPoignancy,
    neoplasmConsistance, neoplasmForm, neoplasmDiameter, bilateralismLower, fractureLowerArea1,
    fractureLowerBias1, fractureLowerSide1, fractureLowerDirection1,
    fractureLowerTooth1a, fractureLowerTooth1b, fractureLowerTeethInLine1, fractureLowerStep1,
    lowerJawSubmucous1, fractureLowerArea2, fractureLowerSide2, fractureLowerBias2,
    lowerJawSubmucous2, fractureLowerDirection2, fractureLowerTooth2a,
    fractureLowerTooth2b, fractureLowerTeethInLine2, fractureLowerStep2,
    xRay, continuity, fractureOperationType, dlType, dlType2, dlOperationType,
    dlAlveolusDestroyed, dlAlveolusDestroyed2, dlDirection, dlDirection2,
    dlDistance, dlDistance2, dlDeployed, dlDeployed2, dlTooth1, dlTooth2,
    dlTooth3, dlOperationType2, dlTooth4, dlTooth5, dlTooth6, dlTooth7, dlTooth8,
    overCompleteForm, overCompleteForm2, overCompleteLocation, overCompleteLocation2,
    overCompleteXRay, directionCode, abscessArea, abscessReason, abscessSide,
    abscessTooth, abscessType, cystTooth, rootSealed, perioTeeth, changedList,
    woundSurface, anestesiaType, _id, lastDay, lastMonth, lastYear, hb, er, leu,
    pal, segm, eoz, limf, rse, uColor, uEp1, uOpacity, uWeight, uPh, uProtein,
    uLeu, uEp2, uOther, restMaterial, finalDiagnosis, editType, editedValue,
    patientId, day, glucose, enterobioz, dung, bloodGroup, rezusFactor,
    analyseHiddenFields, wasViolation, birthDate, residence, histologyConclusion, histologyNumber
   } = action;
  switch (action.type) {
    case PATIENTS_ACTIONS.IMPORT:
      return payload.importedPatients;
    case PATIENTS_ACTIONS.ADD:
      return [
        {_id: uuid(),
          usedNewDiary: true, disease,
          reviewDate: `${startDay}.${startMonth}.${startYear}`, 
          cardNumber,
          name: action.name, doctor,
          toothCasual,start1,start2,pregnancy,
          childbirth, birthWeight, condition,
          examinations: initialExaminations, weight,
          age, crownDestruction, inflammationArea,
          planned: plannedChecker(disease),
          drugs: [
            treatmentCreator(drugName1, age, weight),
            treatmentCreator(drugName2, age, weight),
            treatmentCreator(drugName3, age, weight),
            treatmentCreator(drugName4, age, weight),
            treatmentCreator(drugName5, age, weight),
            appointment,appointment2,appointment3,
          ],
          drugName1, drugName2, drugName3, drugName4, drugName5,
          appointment, appointment2, appointment3,
          protocolNumber, operationDate, operationTime,
          pliers, elevator,
          duration: minutesToHoursConverter(duration),
          surgeon, assistant, anesthetist,
          woundArea, woundSide,
          injuryDate, injuryTime, injuryReason,
          woundType, woundLength, woundWidth,
          woundDepth, woundForm, woundLedges,
          woundBleeding, woundAliens,
          sutureType, sutureMaterial, sutureSize,
          startDay: Number(startDay),
          startMonth: Number(startMonth),
          startYear: Number(startYear),
          retention1, retention2, retention3, retention4,
          overCompleteAmount, overCompleteTooth1,
          overCompleteTooth2, overCompleteTooth3, overCompleteTooth4,
          cystDiameter,
          operationDataSend: false,
          operationFree, isTemporaryToothAbove, cystType,
          neoplasmType, neoplasmArea, neoplasmSide,
          growthRate,
          neoplasmSurface, neoplasmMovability,
          neoplasmPoignancy, neoplasmConsistance,
          neoplasmDiameter, neoplasmColor, neoplasmBorders,
          neoplasmAboveSurface, neoplasmSurfaceAlter, neoplasmForm,
          bilateralismLower, fractureLowerArea1,
          fractureLowerSide1, fractureLowerBias1,
          fractureLowerDirection1, fractureLowerTooth1a,
          fractureLowerTooth1b, fractureLowerTeethInLine1,
          fractureLowerStep1, lowerJawSubmucous1,
          fractureLowerArea2, fractureLowerSide2, fractureLowerBias2,
          fractureLowerDirection2, fractureLowerTooth2a,
          fractureLowerTooth2b, fractureLowerTeethInLine2,
          fractureLowerStep2, lowerJawSubmucous2,
          xRay, continuity, fractureOperationType,
          dlType, dlOperationType, dlAlveolusDestroyed,
          dlDirection, dlDistance, dlDeployed,
          dlTooth1, dlTooth2, dlTooth3,
          dlType2, dlOperationType2, dlAlveolusDestroyed2,
          dlDirection2, dlDistance2, dlDeployed2,
          dlTooth4, dlTooth5, dlTooth6, dlTooth7, dlTooth8,
          overCompleteForm, overCompleteForm2,
          overCompleteLocation, overCompleteLocation2,
          overCompleteXRay, directionCode,
          codeInternational: "",
          secondOperation: null,
          histologyNumber: "",
          histologyConclusion: "",
          complaintsContent: complaintsCreator(
            disease,  toothCasual,
            woundArea, woundSide,
            abscessType,abscessArea, abscessSide,
            cystTooth, cystType,
            retention1, retention2, retention3,
            retention4, neoplasmPoignancy,
            neoplasmArea, neoplasmSide,
            fractureLowerSide1, fractureLowerSide2, dlType,
            dlTooth1, dlTooth2, dlTooth3, dlType2,
            dlTooth4, dlTooth5, dlTooth6,
            overCompleteTooth1, overCompleteTooth2, overCompleteLocation,
            overCompleteAmount, dlTooth7, dlTooth8
          ),
          anamnesisMorbiContent: anamnesisMorbiCreator(
            disease, toothCasual,
            start1, start2, injuryDate, injuryTime,
            injuryReason, abscessType, abscessReason, abscessSide, cystTooth,
            cystType, rootSealed, growthRate
          ),
          anamnesisVitaeContent: anamnesisVitaeCreator(pregnancy, childbirth, birthWeight),
          statusPraesensContent: statusPraesensCreator(condition, age),
          shortStatusContent: statusLocalisCreator(
            false,
            disease, toothCasual,
            inflammationArea, age, crownDestruction, woundSide,
            woundArea,woundType, woundLength, woundWidth, woundDepth,
            woundForm, woundLedges, woundBleeding, woundAliens,
            perioTeeth, changedList, woundSurface,
            abscessType, abscessArea, abscessSide, abscessTooth,
            cystTooth, cystDiameter,
            isTemporaryToothAbove, cystType,
            rootSealed, retention1, retention2, retention3,
            retention4, neoplasmArea,
            neoplasmSide, neoplasmForm,
            neoplasmBorders, neoplasmMovability,
            neoplasmPoignancy, neoplasmConsistance,
            neoplasmDiameter, neoplasmSurface,
            neoplasmColor, neoplasmAboveSurface,
            neoplasmSurfaceAlter, fractureLowerArea1,
            fractureLowerSide1, fractureLowerStep1,
            fractureLowerBias1, lowerJawSubmucous2,
            xRay, continuity,
            fractureLowerDirection1, condition,
            bilateralismLower, fractureLowerTooth1a,
            fractureLowerTooth1b, fractureLowerTeethInLine1,
            fractureLowerArea2, fractureLowerSide2, fractureLowerStep2,
            fractureLowerBias2, lowerJawSubmucous2,
            fractureLowerTooth2a, fractureLowerTooth2b,
            fractureLowerTeethInLine2, fractureLowerDirection2,
            dlAlveolusDestroyed, dlDirection, dlDistance,
            dlDeployed, dlTooth1, dlTooth2, dlTooth3,
            dlType, dlAlveolusDestroyed2,
            dlDirection2, dlDistance2, dlDeployed2,
            dlTooth4, dlTooth5, dlTooth6, dlType2,
            overCompleteTooth1, overCompleteTooth2,
            overCompleteTooth3, overCompleteTooth4,
            overCompleteLocation, overCompleteForm,
            overCompleteXRay, overCompleteAmount,
            dlTooth7, dlTooth8
          ),
          changedList,
          statusLocalisContent: statusLocalisCreator(
            true,
            disease, toothCasual, inflammationArea,
            age, crownDestruction, woundSide, woundArea,
            woundType, woundLength, woundWidth, woundDepth, woundForm,
            woundLedges, woundBleeding, woundAliens, perioTeeth,
            changedList, woundSurface,
            abscessType, abscessArea, abscessSide, abscessTooth,
            cystTooth, cystDiameter,
            isTemporaryToothAbove, cystType,
            rootSealed, retention1, retention2, retention3, retention4,
            neoplasmArea, neoplasmSide,
            neoplasmForm, neoplasmBorders,
            neoplasmMovability, neoplasmPoignancy,
            neoplasmConsistance, neoplasmDiameter,
            neoplasmSurface, neoplasmColor,
            neoplasmAboveSurface, neoplasmSurfaceAlter,
            fractureLowerArea1, fractureLowerSide1,
            fractureLowerStep1, fractureLowerBias1,
            lowerJawSubmucous1, xRay, continuity,
            fractureLowerDirection1, condition,
            bilateralismLower, fractureLowerTooth1a,
            fractureLowerTooth1b, fractureLowerTeethInLine1,
            fractureLowerArea2, fractureLowerSide2,
            fractureLowerStep2, fractureLowerBias2,
            lowerJawSubmucous2, fractureLowerTooth2a,
            fractureLowerTooth2b, fractureLowerTeethInLine2,
            fractureLowerDirection2, dlAlveolusDestroyed,
            dlDirection, dlDistance, dlDeployed,
            dlTooth1, dlTooth2, dlTooth3,
            dlType, dlAlveolusDestroyed2,
            dlDirection2, dlDistance2, dlDeployed2,
            dlTooth4, dlTooth5, dlTooth6, dlType2,
            overCompleteTooth1, overCompleteTooth2,
            overCompleteTooth3, overCompleteTooth4,
            overCompleteLocation, overCompleteForm,
            overCompleteXRay, overCompleteAmount,
            dlTooth7, dlTooth8
          ),
          diagnosis: diagnosisCreator(
            disease, toothCasual,
            woundType, woundArea, woundSide, perioTeeth,
            changedList, abscessType, abscessArea, abscessSide,
            abscessReason, abscessTooth, cystTooth, cystType,
            retention1, retention2, retention3, retention4,
            neoplasmType, neoplasmArea, neoplasmSide,
            fractureLowerArea1, fractureLowerSide1, fractureLowerBias1,
            fractureLowerTooth1a, fractureLowerTooth1b,
            fractureLowerTeethInLine1, bilateralismLower,
            fractureLowerArea2, fractureLowerSide2,
            fractureLowerBias2, fractureLowerTooth2a,
            fractureLowerTooth2b, fractureLowerTeethInLine2,
            dlType, dlType2, dlTooth1, dlTooth2, dlTooth3,
            dlTooth4, dlTooth5, dlTooth6,
            overCompleteTooth1, overCompleteTooth2,
            overCompleteTooth3, overCompleteTooth4,
            overCompleteAmount, dlTooth7, dlTooth8
          ),
          finalDiagnosis: diagnosisCreator(
            disease, toothCasual,
            woundType, woundArea, woundSide, perioTeeth, changedList, abscessType, abscessArea, abscessSide,
            abscessReason, abscessTooth, cystTooth, cystType,
            retention1, retention2, retention3, retention4,
            neoplasmType, neoplasmArea, neoplasmSide,
            fractureLowerArea1, fractureLowerSide1, fractureLowerBias1,
            fractureLowerTooth1a, fractureLowerTooth1b,
            fractureLowerTeethInLine1, bilateralismLower,
            fractureLowerArea2, fractureLowerSide2,
            fractureLowerBias2, fractureLowerTooth2a,
            fractureLowerTooth2b, fractureLowerTeethInLine2,
            dlType, dlType2, dlTooth1, dlTooth2,
            dlTooth3, dlTooth4, dlTooth5, dlTooth6,
            overCompleteTooth1, overCompleteTooth2, overCompleteTooth3,
            overCompleteTooth4, overCompleteAmount, dlTooth7, dlTooth8
          ),
          operationName: operationNameCreator(
            disease, toothCasual,woundArea, woundSide, perioTeeth,
            abscessType, abscessArea, abscessSide, cystTooth, cystType,
            retention1, retention2, retention3, retention4,
            neoplasmArea, neoplasmSide,
            dlTooth1, dlTooth2, dlTooth3, dlTooth4, dlTooth5,
            dlTooth6, dlOperationType,
            dlOperationType2, overCompleteAmount, dlTooth7,
            dlTooth8, dlType, dlType2
          ),
          operationContent: operationContentCreator(
            disease, toothCasual,
            inflammationArea, pliers, elevator,
            sutureType, sutureMaterial, sutureSize,
            perioTeeth, changedList,
            "",
            anestesiaType, woundSurface,
            abscessType, abscessArea,
            abscessSide, abscessReason,
            abscessTooth, cystTooth, cystType,
            retention1, retention2, retention3,
            retention4, neoplasmArea, fractureOperationType,
            dlTooth1, dlTooth2, dlTooth3, dlTooth4, dlTooth5, dlTooth6,
            dlOperationType, dlOperationType2,
            overCompleteTooth1, overCompleteTooth2,
            overCompleteTooth3, overCompleteTooth4, overCompleteAmount, dlTooth7, dlTooth8
          ),
          perioTeeth: perioTeeth,
          heartRate: heartRateCounter(age),
          respiratoryRate: respiratoryRateCounter(age),
          lastTime: lastTimeChecker(operationTime),
          someDayContent: someDayCreator(
          disease, toothCasual,
          abscessArea, abscessSide, abscessType, cystTooth,
          retention1, retention2, retention3, retention4,
          neoplasmSurface, fractureLowerArea1,
          fractureLowerSide1, fractureLowerArea2,
          fractureLowerSide2, bilateralismLower,
          dlTooth1, dlTooth2, dlTooth3, dlTooth4, dlTooth5, dlTooth6,
          dlOperationType, dlOperationType2,
          overCompleteTooth3, overCompleteTooth4,
          dlTooth7, dlTooth8
          ),
          lastDayContent: lastDayCreator(
            disease, retention1, retention2, retention3, retention4,
            dlTooth1, dlTooth2, dlTooth3, dlTooth4, dlTooth5, dlTooth6,
            dlOperationType, dlOperationType2,
            overCompleteTooth3, overCompleteTooth4,
            abscessArea, dlTooth7, dlTooth8, abscessType
          ),
          diaryList: [
            {
              date: `${startDay}.${startMonth}.${startYear}`,
              workDay: true,
              id: Math.random(),
              generalStatus: "Загальний стан дитини близький до задовільного.",
              localStatus: "Обличчя симетричне",
            },
          ],
          epicrisisDataSend: false,
          extractDataSend: false,
          anestesiaType,
          abscessType, abscessArea, abscessSide,
          abscessReason, abscessTooth,
          cystTooth, rootSealed,
          toothFormula: formulaMounter(
            formulaTemplate, age, changedList
          ),
          toothFormulaPost: formulaMounter(
            formulaTemplate, age, changedList
          ),
        },
        ...patients,
      ];
    case PATIENTS_ACTIONS.REMOVE:
      return patients.filter((patient) => _id !== patient._id);
    case PATIENTS_ACTIONS.DISCHARGEADD:
      return patients.map((patient) =>
        patient._id === _id
          ? {
              ...patient,
              recommendations: recommendationsCreator(
                patient.disease,
                patient.age
              ),
              dischargeDate: `${lastDay}.${lastMonth}.${lastYear}`,
              diaryList: diaryListCreator(
                patient.startDay, patient.startMonth, patient.startYear,
                lastDay, lastMonth, lastYear, patient
              ),
              hb, er,
              colorIndex: colorIndexCounter(hb, er),
              leu, pal, segm, eoz, limf,
              mono: monoCounter(pal, segm, eoz, limf),
              rse,
              bloodTest: [
                hb,
                er,
                colorIndexCounter(hb, er),
                leu, pal, segm, eoz, limf,
                monoCounter(pal, segm, eoz, limf),
                rse,
              ],
              uColor, uOpacity, uWeight, uPh, uProtein,
              uLeu, uEp1, uEp2,
              urineTest: [
                uColor, uOpacity,
                uWeight, uPh, uProtein,
                uLeu, uEp1, uEp2, uOther,
              ],
              glucose: `${glucose} ммоль/л`,
              enterobioz, dung, bloodGroup, rezusFactor,
              analyseHiddenFields, wasViolation,
              epicrisisDataSend: true,
              finalDiagnosis,
              anestesiaTypeModified: `${patient.anestesiaType[0].toLowerCase()}${patient.anestesiaType.slice(
                1,
                patient.anestesiaType.length - 1
              )}им`,
            }
          : patient
      );
    case PATIENTS_ACTIONS.EXTRACTADD:
      return patients.map((patient) =>
        patient._id === action._id
          ? {
              ...patient,
              birthDate, residence,
              histologyNumber, histologyConclusion,
              extractDataSend: true,
            }
          : patient
      );
    case PATIENTS_ACTIONS.OPERATIONADD:
      return patients.map((patient) =>
        patient._id === _id
          ? {
              ...patient,
              protocolNumber,anestesiaType, operationDate,
              operationTime,
              toothFormulaPost: finalFormulaMounter(
                patient.toothFormula,
                changedList
              ),
              operationContent: operationContentCreator(
                patient.disease, patient.toothCasual, patient.inflammationArea,
                pliers, elevator, sutureType, sutureMaterial, sutureSize,
                patient.perioTeeth, changedList,
                restMaterial, anestesiaType, patient.woundSurface, patient.abscessType,
                patient.abscessArea, patient.abscessSide,
                patient.abscessReason, patient.abscessTooth, patient.cystTooth,
                patient.cystType, patient.retention1,
                patient.retention2, patient.retention3,
                patient.retention4, patient.neoplasmArea,
                patient.fractureOperationType, patient.dlTooth1,
                patient.dlTooth2, patient.dlTooth3,
                patient.dlTooth4, patient.dlTooth5,
                patient.dlTooth6, patient.dlOperationType,
                patient.dlOperationType2, patient.overCompleteTooth1,
                patient.overCompleteTooth2, patient.overCompleteTooth3,
                patient.overCompleteTooth4, patient.overCompleteAmount,
                patient.dlTooth7, patient.dlTooth8
              ),
              duration: minutesToHoursConverter(duration),
              surgeon, assistant, anesthetist,
              lastTime: lastTimeChecker(operationTime),
              operationDataSend: true, finalDiagnosis,
            }
          : patient
      );
    case PATIENTS_ACTIONS.EDIT:
      return patients.map((patient) =>
        patient._id === _id
          ? patientEditor(editType, patient, editedValue)
          : patient
      );
    case PATIENTS_ACTIONS.EDITDAY:
      return patients.map((patient) =>
        patient._id === patientId
          ? {
              ...patient,
              diaryList: patient.diaryList.map((item) => {
                if (Number(day.id) === Number(item.id)) {
                  return day;
                } else {
                  return item;
                }
              }),
            }
          : patient
      );
    default:
      throw new Error();
  }
};
