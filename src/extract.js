import React, { useEffect, useState } from "react";
import "./styles.css";
import { Block } from "./block";
import { Text } from "./text";
import { BlockList } from "./blockList";
import { Table } from "./table";
import { FormulaTable } from "./formulaTable";
import { bloodTestExponents, urineTestExponents } from "./database";
import { bloodTestChecker } from "./functions/bloodTestChecker";
import signKuchmiy from "./images/signetKuchmiy.jpg";
import signPikh from "./images/signetPikh.jpg";

export const Extract = ({ current, params }) => {
  const {doctor, drugs, toothFormulaPost, toothFormula, bloodTest, analyseHiddenFields,
    extractDataSend, cardNumber, birthDate, residence, reviewDate, dischargeDate,fullAdress,
    complaintsContent, anamnesisMorbiContent, statusLocalisContent, finalDiagnosis, diagnosis,
    operationDate, operationFree, operationName, secondOperation, anestesiaTypeModified,
    recommendations, disease, wasViolation, glucose, enterobioz, urineTest, planned,
    bloodGroup, dung, rezusFactor, otherExaminations, histologyConclusion, histologyNumber
  } = current;
  const showSignet =
    doctor === "В.Я.Кучмій" || doctor === "І.І.Піх"
      ? true
      : false;
  const urlSign =
    doctor === "В.Я.Кучмій"
      ? signKuchmiy
      : doctor === "І.І.Піх"
      ? signPikh
      : "";
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
  const abNormalList = bloodTestChecker(bloodTest);
  const {
    bloodTestHidden = false,
    urineHidden = false,
    glucoseHidden = false,
  } = analyseHiddenFields || {};
  const extractRef = React.createRef();
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(extractRef.current.getBoundingClientRect().height);
    console.log(extractRef.current.getBoundingClientRect().height);
  }, []);
  return (
    <div
      id="extract"
      ref={extractRef}
      style={{
        fontSize:
          (height > 1100 &&
            (doctor === "В.Я.Кучмій" ||
              doctor === "І.І.Піх")) ||
          height > 1200
            ? "15px"
            : "18px",
      }}
    >
      {extractDataSend && (
        <>
          <div className="super">
            <div className="main">
              <div className="header">
                <div className="headerPart headerPart1">
                  <div className="nameAdress">{params.institution}</div>
                  <div className="code">Код за ЄДРПОУ {params.edrpouCode}</div>
                </div>
                <div className="headerPart">
                  <div className="headerLine">Медична документація</div>
                  <div className="headerLine">
                    Форма первинної облікової документації
                  </div>
                  <div className="headerLine">№027/о</div>
                  <div className="headerLine">ЗАТВЕРДЖЕНО</div>
                  <div className="headerLine">Наказ МОЗ України</div>
                  <div className="headerLine">
                    |1|4|0|2|2|0|1|2| <span className="spanNumber">№110</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flexi headers">
            <Block header="ВИПИСКА" content={""} size="28px" />
          </div>
          <div className="flexi headers">
            <Block
              header={`${params.medicalCard} №:`}
              content={cardNumber}
            />
          </div>
          <Block header="П.І.Б хворого: " content={current.name} />
          <Block
            header="Дата народження: "
            content={`${birthDate} р.н.`}
          />
          <Block
            header="Адреса проживання: "
            content={residence || fullAdress}
          />
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
          {filteredDrugs.length === 0 ? (
            <Block header="Медикаментозне лікування відсутнє." content="" />
          ) : (
            <BlockList header="Медикаментозне лікування:" content={filteredDrugs} />
          )}
          <Block
            header=""
            content={` ${
              wasViolation
                ? "Дитина виписана за вимогою батьків."
                : "Дитина виписана в задовільному загальному стані. "
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
              <span id="content">{bloodGroup}</span>
              <Text fontWeight="bold">резус-фактор:</Text>
              {""}
              <span id="content">{rezusFactor}</span>
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
            {!showSignet && (
              <div className="lastLine">
                <Block header="" content={`Лікар ________ ${doctor}`} />
              </div>
            )}
            {showSignet && (
              <div className="block signet">
                <Text fontWeight="bold">
                  <img src={urlSign} alt="" />
                </Text>
                {""}
                <span className="signature">
                  {" "}
                  {`Лікар ________ ${doctor}`}{" "}
                </span>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};
