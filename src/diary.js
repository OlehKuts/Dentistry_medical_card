import React from "react";
import "./styles.css";
import { Block } from "./block";
export const Diary = ({ current, lastIndex, patient, penultimateIndex, params }) => {
  const {heartRate, respiratoryRate, lastDayContent, someDayContent, abscessArea,
    disease, doctor} = patient;
  const {mutualExamination} = params;
  const hrCounter = (rate) => {
    let numRate = Number(rate);
    let randomInc = Number((Math.random() * 3).toFixed(0));
    numRate = numRate + randomInc;
    return numRate;
  };
  const rrCounter = (rate) => {
    let numRate = Number(rate);
    let randomInc = Number((Math.random() * 5).toFixed(0));
    numRate = numRate + randomInc;
    return numRate;
  };
  return (
    <div id="diary">
      <div className="flexi flexDiary">
        <Block header="Дата:" content={current.date} />
      </div>
      {current.workDay && (
        <div id="workdayBlock">
          <div className="flexi flexDiaryMiddle">
            <Block
              header={mutualExamination}
              content=""
            />
          </div>
          <div className="flexi flexDiaryMiddle">
            <Block
              header=""
              content={`ЧСС=${hrCounter(heartRate)}/хв; ЧДР=${rrCounter(
                respiratoryRate
              )}/хв; t ̊- N`}
            />
          </div>

          {lastIndex && (
            <div className="diary">
              <Block
                header=""
                content="Загальний стан дитини задовільний. Скарги відсутні. Свідомість ясна, шкірні покриви чисті. Серцева діяльність ритмічна, тони чисті, звучні. Перкуторно ясний легеневий звук. Везикулярне дихання. Живіт при пальпації м’який, безболісний. Печінка не збільшена. Нирки та селезінка не пальпуються. Фізіологічні відправлення не порушені."
              />
            </div>
          )}
          {!lastIndex && (
            <div className="diary">
              <Block
                header=""
                content="Загальний стан дитини близький до задовільного. Свідомість ясна, шкірні покриви чисті. Серцева діяльність ритмічна, тони чисті, звучні. Перкуторно ясний легеневий звук. Везикулярне дихання. Живіт при пальпації м’який, безболісний. Печінка не збільшена. Нирки та селезінка не пальпуються. Фізіологічні відправлення не порушені."
              />
            </div>
          )}

          {lastIndex && (
            <div className="diary">
              <Block header="" content={lastDayContent} />
            </div>
          )}
          {!lastIndex && !penultimateIndex && (
            <div className="diary">
              <Block header="" content={someDayContent} />
            </div>
          )}
          {!lastIndex &&
            penultimateIndex &&
            disease === "abscess" &&
            abscessArea !== "дна порожнини рота" &&
            abscessArea !== "твердого піднебіння" &&
            abscessArea !== "щелепно-язикового жолобка" && (
              <div className="diary">
                <Block
                  header=""
                  content="Обличчя симетричне. Припухлостей немає.
   Знято асептичну пов'язку. Видалено гумовий випускник. Асептична пов'язка з офлокаїновою маззю. Призначення виконуються."
                />
              </div>
            )}
          {!lastIndex && penultimateIndex && disease !== "abscess" && (
            <div className="diary">
              <Block header="" content={someDayContent} />
            </div>
          )}
          {!lastIndex &&
            penultimateIndex &&
            (abscessArea === "щелепно-язикового жолобка" ||
              abscessArea === "твердого піднебіння" ||
              abscessArea === "дна порожнини рота") && (
              <div className="diary">
                <Block header="" content={someDayContent} />
              </div>
            )}
          <div className="flexEnd headers">
            <div className="lastLine">
              <Block header="" content={`Лікар ________ ${doctor}`} />
            </div>
          </div>
        </div>
      )}
      {!current.workDay && (
        <div className="flexi">
          <Block
            header=""
            content="Вихідний день. Дитина перебуває під наглядом чергового медичного персоналу."
          />
        </div>
      )}
    </div>
  );
};
