import "./styles.css";
import { Block } from "./block";
import { BlockList } from "./blockList";
import { FormulaTable } from "./formulaTable";
import { initialExaminations, baseIndications } from "./database";
import { stringCapitalizer } from "./utils/utils";

export const Review = ({ current, params, onEditAdd }) => {
  const {_id, examinations, diagnosis, operationName, anestesiaType,
    drugs, toothFormula, reviewDate, cardNumber, doctor, complaintsContent,
    anamnesisMorbiContent, anamnesisVitaeContent, disease, statusLocalisContent,
    statusPraesensContent, operationFree, operationDataSend, shortStatusContent, 
    planned, operationDate, protocolNumber, operationTime, operationContent, assistant,
    surgeon, duration, anesthetist, finalDiagnosis, lastTime
  } = current;
  const { medicalCard, patientType, doctorType } = params;
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
        <  Block onEditAdd={onEditAdd} patientId={_id} header="Дата:" content={reviewDate} 
        editType="reviewDate"/>
      </div>
      <div className="flexi headers">
        <  Block onEditAdd={onEditAdd} patientId={_id}
          header={`${medicalCard} №:`}
          content={cardNumber} editType="cardNumber"
        />
        <  Block onEditAdd={onEditAdd} patientId={_id} header={`${patientType}:`} content={current.name}
        editType="name"/>
      </div>
      <div className="flexi headers">
        <  Block onEditAdd={onEditAdd} patientId={_id} header={`${stringCapitalizer(doctorType)}:`} content={doctor}
        editType="doctor" />
      </div>
      <  Block onEditAdd={onEditAdd} patientId={_id} header="Скарги:" content={complaintsContent} 
      editType="complaintsContent" />
      <  Block onEditAdd={onEditAdd} patientId={_id}
        header="Анамнез захворювання:"
        content={anamnesisMorbiContent}
        editType="anamnesisMorbiContent"
      />
      <  Block onEditAdd={onEditAdd} patientId={_id} header="Анамнез життя:" content={anamnesisVitaeContent}
      editType="anamnesisVitaeContent" />
      <  Block onEditAdd={onEditAdd} patientId={_id}
        header="Об'єктивний стан:"
        content={statusPraesensContent}
        editType="statusPraesensContent"
      />
      <  Block onEditAdd={onEditAdd} patientId={_id}
        header="Стан щелепно-лицевої ділянки:"
        content={statusLocalisContent}
        editType="statusLocalisContent"
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
        <  Block onEditAdd={onEditAdd} patientId={_id} header="Діагноз:" content={diagnosis}
        editType="diagnosis" />
      </div>
      <div className="flexBetween headers">
        <div className="examinationList">
          < BlockList header="План обстеження:" content={splittedExaminations} />
        </div>
        <div className="examinationList">
          < BlockList header="План лікування:" content={filteredDrugs} />
        </div>
      </div>

      <div className="flexEnd headers">
        <div className="lastLine">
          {" "}
          <  Block onEditAdd={onEditAdd} patientId={_id} header="" content={`Лікар ________ ${doctor}`} />{" "}
        </div>
      </div>
      {!operationFree && (
        <div id="secondPage">
          {!operationDataSend && (
            <>
              <div className="flexi headers">
                <  Block onEditAdd={onEditAdd} patientId={_id} header="СПІЛЬНИЙ ОГЛЯД" content="" />
              </div>
              <div className="flexi headers">
                <  Block onEditAdd={onEditAdd} patientId={_id}
                  header={`у складі: ${params.preOperationExamination}, лікар ${doctorType} ${doctor}`}
                  content=""
                />
              </div>
              <div className="flexi headers">
                <  Block onEditAdd={onEditAdd} patientId={_id}
                  header="(ОБГРУНТУВАННЯ КЛІНІЧНОГО ДІАГНОЗУ)"
                  content=""
                />
              </div>
              <  Block onEditAdd={onEditAdd} patientId={_id}
                header="Зважаючи на скарги: "
                content={`${complaintsContent.slice(0, -1)};`}
              />
              <  Block onEditAdd={onEditAdd} patientId={_id}
                header="дані анамнезу захворювання:"
                editType="anamnesisMorbiContent"
                content={anamnesisMorbiContent}
              />
              <  Block onEditAdd={onEditAdd} patientId={_id}
                header=""
                content={`Рекомендовано оперативне втручання.`}
              />

              <  Block onEditAdd={onEditAdd} patientId={_id}
                header="Дані об'єктивного обстеження: "
                content={shortStatusContent}
                editType="shortStatusContent"
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
                  <  Block onEditAdd={onEditAdd} patientId={_id}
                    header="У дитини є клінічний діагноз: "
                    content={diagnosis}
                    editType="diagnosis"
                  />
                </>
              )}

              <  Block onEditAdd={onEditAdd} patientId={_id}
                header="Рекомендовано: "
                content={`оперативне втручання.`}
              />

              <div className="flexStart headers">
                < BlockList
                  header="Показання до операції:"
                  content={indications}
                />
              </div>
              <div className="flexEnd headers">
                <div className="lastLine">
                  {" "}
                  <  Block onEditAdd={onEditAdd} patientId={_id}
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
                <  Block onEditAdd={onEditAdd} patientId={_id}
                  header="Протокол операції № "
                  content={protocolNumber}
                  editType="protocolNumber"
                />
              </div>
              <div className="flexi headers">
                <  Block onEditAdd={onEditAdd} patientId={_id} header="Дата: " content={operationDate} 
                editType="operationDate"/>
                <  Block onEditAdd={onEditAdd} patientId={_id} header="Час: " content={operationTime}
                editType={operationTime} />
              </div>
              <div className="flexi headers">
                <  Block onEditAdd={onEditAdd} patientId={_id}
                  header={""}
                  content={operationName}
                  editType="operationName"
                  style={{fontWeight: "bold"}}
                />
              </div>
              <div className="flexi protocolContent headers">
                <  Block onEditAdd={onEditAdd} patientId={_id} header={""} content={operationContent}
                editType="operationContent" />
              </div>
              <div className="flexEnd headers">
                {" "}
                <  Block onEditAdd={onEditAdd} patientId={_id}
                  header={`Оперував: ${surgeon}.  Асистент: ${assistant}`}
                  content={``}
                />{" "}
              </div>
              <div className="flexEnd headers">
                {" "}
                <  Block onEditAdd={onEditAdd} patientId={_id}
                  header={`Анестезіолог: ${anesthetist}. Тривалість: ${duration}`}
                  content=""
                />{" "}
              </div>
              <div id="postDiagnosis">
                {" "}
                <  Block onEditAdd={onEditAdd} patientId={_id}
                  header="Післяопераційний діагноз:"
                  content={diagnosis}
                  editType="finalDiagnosis"
                />{" "}
              </div>
             <div className="postOperationDate flexStart">
             <  Block onEditAdd={onEditAdd} patientId={_id} header="Дата:" content={operationDate} />
             <  Block onEditAdd={onEditAdd} patientId={_id} header="Час:" content={lastTime}
             editType="lastTime" />
             </div>
              <  Block onEditAdd={onEditAdd} patientId={_id}
                header=""
                content="Дитина притомна. Серцева діяльність та дихання не порушені. Кровотечі не спостерігається. Призначення виконуються."
              />
              <div className="flexEnd headers">
                <div className="lastLine">
                  {" "}
                  <  Block onEditAdd={onEditAdd} patientId={_id}
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
