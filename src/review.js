import React from "react";
import "./styles.css";
import { Block } from "./block";
import { BlockList } from "./blockList";
import { FormulaTable } from "./formulaTable";
import { initialExaminations, baseIndications } from "./database";
import { stringCapitalizer } from "./utils/utils";

export const Review = ({ current, params }) => {
  const {examinations, diagnosis, operationName, anestesiaType,
    drugs, toothFormula, reviewDate, cardNumber, doctor, complaintsContent,
    anamnesisMorbiContent, anamnesisVitaeContent, disease, statusLocalisContent,
    statusPraesensContent, operationFree, operationDataSend, shortStatusContent, 
    planned, operationDate, protocolNumber, operationTime, operationContent, assistant,
    surgeon, duration, anesthetist, finalDiagnosis, lastTime
  } = current;
  const {mutualExamination, medicalCard, patientType, doctorType } = params;
  const splittedExaminations = examinations ? examinations.split(",") : initialExaminations.split(",");
  const _anestesiaType =
    anestesiaType === "Місцеве"
      ? "Місцеве знеболення."
      : "Загальне знеболення.";
  const preIndications = [
    stringCapitalizer(diagnosis),
    stringCapitalizer(operationName),
    _anestesiaType,
  ];
  const indications = preIndications.concat(baseIndications);
  const preDrugs = ["Режим палатний", "Стіл загальний"].concat(drugs);
  const filteredDrugs = preDrugs.filter((drug) => drug !== "");
  const tLength = toothFormula ? toothFormula.length / 2 : 1;
  const mandibulaNames = toothFormula
    .map((item) => item.name)
    .splice(tLength, tLength);
  const mandibulaStatusList = toothFormula
    .map((item) => item.status)
    .splice(tLength, tLength);
  const maxillaNames = toothFormula
    .map((item) => item.name)
    .splice(0, tLength);
  const maxillaStatusList = toothFormula
    .map((item) => item.status)
    .splice(0, tLength);
  return (
    <div id="review">
      <div className="flexi headers">
        <Block header="Дата:" content={reviewDate} />
      </div>
      <div className="flexi headers">
        <Block header={mutualExamination} content="" />
      </div>
      <div className="flexi headers">
        <Block
          header={`${medicalCard} №:`}
          content={cardNumber}
        />
        <Block header={`${patientType}:`} content={current.name} />
      </div>
      <div className="flexi headers">
        <Block header={`${stringCapitalizer(doctorType)}:`} content={doctor} />
      </div>
      <Block header="Скарги:" content={complaintsContent} />
      <Block
        header="Анамнез захворювання:"
        content={anamnesisMorbiContent}
      />
      <Block header="Анамнез життя:" content={anamnesisVitaeContent} />
      <Block
        header="Об'єктивний стан:"
        content={statusPraesensContent}
      />
      <Block
        header="Стан щелепно-лицевої ділянки:"
        content={statusLocalisContent}
      />
      {disease === "caries" && (
        <>
          <div className="flexi headers">
            {" "}
            <FormulaTable
              line1={maxillaStatusList}
              line2={maxillaNames}
              line3={mandibulaNames}
              line4={mandibulaStatusList}
              size="20px"
            />
          </div>
          <div className="flexi headers"> </div>
        </>
      )}
      <div id="diagnosis">
        <Block header="Діагноз:" content={diagnosis} />
      </div>
      <div className="flexBetween headers">
        <div className="examinationList">
          <BlockList header="План обстеження:" content={splittedExaminations} />
        </div>
        <div className="examinationList">
          <BlockList header="План лікування:" content={filteredDrugs} />
        </div>
      </div>

      <div className="flexEnd headers">
        <div className="lastLine">
          {" "}
          <Block header="" content={`Лікар ________ ${doctor}`} />{" "}
        </div>
      </div>
      {!operationFree && (
        <div id="secondPage">
          {!operationDataSend && (
            <>
              <div className="flexi headers">
                <Block header="СПІЛЬНИЙ ОГЛЯД" content="" />
              </div>
              <div className="flexi headers">
                <Block
                  header={`у складі: ${params.preOperationExamination}, лікар ${doctorType} ${doctor}`}
                  content=""
                />
              </div>
              <div className="flexi headers">
                <Block
                  header="(ОБГРУНТУВАННЯ КЛІНІЧНОГО ДІАГНОЗУ)"
                  content=""
                />
              </div>
              <Block
                header="Зважаючи на скарги: "
                content={`${complaintsContent.slice(0, -1)};`}
              />
              <Block
                header="дані анамнезу захворювання:"
                content={anamnesisMorbiContent}
              />
              <Block
                header=""
                content={`Рекомендовано оперативне втручання.`}
              />

              <Block
                header="Дані об'єктивного обстеження: "
                content={shortStatusContent}
              />

              {disease === "caries" && (
                <>
                  <div className="flexi headers">
                    {" "}
                    <FormulaTable
                      line1={maxillaStatusList}
                      line2={maxillaNames}
                      line3={mandibulaNames}
                      line4={mandibulaStatusList}
                      size="20px"
                    />
                  </div>
                  <Block
                    header="У дитини є клінічний діагноз: "
                    content={diagnosis}
                  />
                </>
              )}

              <Block
                header="Рекомендовано: "
                content={`оперативне втручання.`}
              />

              <div className="flexStart headers">
                <BlockList
                  header="Показання до операції:"
                  content={indications}
                />
              </div>
              <div className="flexEnd headers">
                <div className="lastLine">
                  {" "}
                  <Block
                    header=""
                    content={`Лікар ________ ${doctor}`}
                  />{" "}
                </div>
              </div>
            </>
          )}
          {operationDataSend && <div className="emptyField"></div>}
          {(!planned || operationDataSend) && (
            <>
              <div className="flexi headers" id="protocol">
                <Block
                  header="Протокол операції № "
                  content={protocolNumber}
                />
              </div>
              <div className="flexi headers">
                <Block header="Дата: " content={operationDate} />
                <Block header="Час: " content={operationTime} />
              </div>
              <div className="flexi headers">
                <Block
                  header={stringCapitalizer(operationName)}
                  content={""}
                />
              </div>
              <div className="flexi protocolContent headers">
                <Block header={""} content={operationContent} />
              </div>
              <div className="flexEnd headers">
                {" "}
                <Block
                  header={`Оперував: ${surgeon}.  Асистент: ${assistant}`}
                  content={``}
                />{" "}
              </div>
              <div className="flexEnd headers">
                {" "}
                <Block
                  header={`Анестезіолог: ${anesthetist}. Тривалість: ${duration}`}
                  content=""
                />{" "}
              </div>
              <div id="postDiagnosis">
                {" "}
                <Block
                  header="Післяопераційний діагноз:"
                  content={finalDiagnosis}
                />{" "}
              </div>
             <div className="postOperationDate flexStart">
             <Block header="Дата:" content={operationDate} />
             <Block header="Час:" content={lastTime} />
             </div>
              <Block
                header=""
                content="Дитина притомна. Серцева діяльність та дихання не порушені. Кровотечі не спостерігається. Призначення виконуються."
              />
              <div className="flexEnd headers">
                <div className="lastLine">
                  {" "}
                  <Block
                    header=""
                    content={`Лікар ________ ${doctor}`}
                  />{" "}
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};
//
