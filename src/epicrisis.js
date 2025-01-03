import React, { useState, useEffect } from "react";
import "./styles.css";
import { Block } from "./block";
import { BlockList } from "./blockList";
import { Table } from "./table";
import { Text } from "./text";
import { FormulaTable } from "./formulaTable";
import { bloodTestExponents, urineTestExponents } from "./database";
import { bloodTestChecker } from "./functions/bloodTestChecker";

export const Epicrisis = ({ current, params }) => {
  const {doctor, drugs, toothFormulaPost, toothFormula, bloodTest, analyseHiddenFields,
    cardNumber, reviewDate, dischargeDate, epicrisisDataSend,
    complaintsContent, anamnesisMorbiContent, statusLocalisContent, finalDiagnosis, diagnosis,
    operationDate, operationFree, operationName, secondOperation, anestesiaTypeModified,
    recommendations, disease, wasViolation, glucose, enterobioz, urineTest, planned,
    bloodGroup, dung, rezusFactor, otherExaminations, histologyConclusion, histologyNumber
  } = current;
  const filteredDrugs = drugs.filter((drug) => drug !== "");
  const formula = toothFormulaPost || toothFormula;
  const tLength = formula ? formula.length / 2 : 1;
  const mandibulaNames = formula
    .map((item) => item.name)
    .splice(tLength, tLength);
  const mandibulaStatusList = formula
    .map((item) => item.status)
    .splice(tLength, tLength);
  const maxillaNames = formula.map((item) => item.name).splice(0, tLength);
  const maxillaStatusList = formula
    .map((item) => item.status)
    .splice(0, tLength);
  const abNormalList = bloodTestChecker(current.bloodTest);
  const {
    bloodTestHidden = false,
    urineHidden = false,
    glucoseHidden = false
  } = analyseHiddenFields || {};
  const epicrisisRef = React.createRef();
  const [height, setHeight] = useState(0);
  useEffect(() => {
    setHeight(epicrisisRef.current.getBoundingClientRect().height);
  }, []);
  return (
    <div
      id="epicrisis"
      ref={epicrisisRef}
      style={{ fontSize: height > 1050 ? "16px" : "18px" }}
    >
      {epicrisisDataSend && (
        <>
          <div className="flexi headers">
            <Block
              header={`${params.medicalCard} №:`}
              content={cardNumber}
            />
            <Block header={`${params.patientType}:`} content={current.name} />
          </div>
          <div className="flexi headers">
            <Block header="ЕПІКРИЗ" content={""} size="28px" />
          </div>
          <Block
            header=""
            content={`${params.treatmentLocation} з ${reviewDate} по ${dischargeDate}.`}
          />
          <Block header="Скарги:" content={complaintsContent} />
          <Block
            header="Анамнез захворювання:"
            content={anamnesisMorbiContent}
          />
          <Block header="Об'єктивно:" content={statusLocalisContent} />
          {disease === "caries" && (
            <div className="flexi headers">
              <FormulaTable
                line1={maxillaStatusList}
                line2={maxillaNames}
                line3={mandibulaNames}
                line4={mandibulaStatusList}
              />
            </div>
          )}
          <Block
            header="Діагноз:"
            content={finalDiagnosis || diagnosis}
          />
          {!operationFree && (
            <>
              <Block
                header=""
                content={`${operationDate} під ${anestesiaTypeModified} знеболенням проведено оперативне втручання - ${operationName} Післяопераційний період без ускладнень.`}
              />

              <Block
                header=""
                content={
                  `${secondOperation}` === undefined
                    ? null
                    : secondOperation
                }
              />
              <Block
                header="Післяопераційний діагноз:"
                content={finalDiagnosis || diagnosis}
              />
            </>
          )}
          {filteredDrugs.length !== 0 ? (
            <BlockList header="Медикаментозне лікування:" content={filteredDrugs} />
          ) : (
            <Block header="Медикаментозне лікування відсутнє." content="" />
          )}

          <Block
            header=""
            content={` ${
              wasViolation
                ? "Дитина виписана за вимогою батьків."
                : "Дитина виписана в задовільному загальному стані."
            } Виписка видана батькам на руки. В контакті з інфекційними хворими не перебувала.`}
          />
          <Block header="Рекомендації:" content={recommendations} />

          <div className="flexi headers">
            <Block header="ДАНІ ОБСТЕЖЕНЬ" content="" />
          </div>
          {!bloodTestHidden && (
            <>
              <div className="flexi headers">
                <Block header="ЗАГАЛЬНИЙ АНАЛІЗ КРОВІ" content="" />
              </div>
              <div className="flexi headers">
                <Table
                  headerList={bloodTestExponents}
                  contentList={bloodTest}
                  abNormalList={abNormalList}
                />
              </div>
            </>
          )}
          {!urineHidden && (
            <>
              <div className="flexi headers">
                <Block header="ЗАГАЛЬНИЙ АНАЛІЗ СЕЧІ" content="" />
              </div>
              <div className="flexi headers">
                <Table
                  headerList={urineTestExponents}
                  contentList={urineTest}
                />
              </div>
            </>
          )}
          {!glucoseHidden && (
            <Block header="Глюкоза крові:" content={`${glucose}.`} />
          )}
          <div className="block">
            {enterobioz !== `не визначався` && (
              <>
                <Text fontWeight="bold">Зішкріб на ентеробіоз:</Text>
                {""}
                <span id="content"> {enterobioz}. </span>
              </>
            )}
            {dung !== `не визначався` && (
              <>
                <Text fontWeight="bold">Кал на я/г:</Text>
                {""}
                <span id="content"> {dung}. </span>
              </>
            )}
          </div>
          {planned && bloodGroup && (
            <div className="block">
              <Text fontWeight="bold">Група крові:</Text>
              {""}
              <span id="content"> {bloodGroup}, </span>
              <Text fontWeight="bold">резус-фактор:</Text>
              {""}
              <span id="content"> {rezusFactor}. </span>
            </div>
          )}

          {otherExaminations && (
            <div className="block">
              <Text fontWeight="bold">Інші обстеження:</Text>
              {""}
              <span id="content"> {otherExaminations}</span>
            </div>
          )}

{histologyConclusion && (
            <div className="block">
              <Text fontWeight="bold">Висновок гістологічного дослідження №{histologyNumber}:</Text>
              {""}
              <span id="content"> {histologyConclusion}</span>
            </div>
          )}

          <div className="flexEnd headers">
            <div className="lastLine">
              <Block header="" content={`Лікар ________ ${doctor}`} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
