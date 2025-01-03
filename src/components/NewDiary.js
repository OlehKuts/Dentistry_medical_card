import React from "react";
import "../styles.css";
import { Block } from "../block";
import { hrCounter, rrCounter } from "../utils/utils";

export const NewDiary = ({ currentDay, patient, params }) => {
  const { heartRate, respiratoryRate, doctor } = patient;
  const { workDay, date, generalStatus, localStatus } = currentDay;
  const {mutualExamination} = params;
  return (
    <>
      <div id="newDiary">
        <div className="flexi flexDiary">
          <Block header="Дата:" content={date} />
        </div>

        {workDay ? (
          <>
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

              <div className="diary">
                <Block header="" content={generalStatus} />
              </div>
              <div className="diary">
                <Block header="" content={localStatus} />
              </div>
              <div className="flexEnd headers">
                <div className="lastLine">
                  <Block
                    header=""
                    content={`Лікар ________ ${doctor}`}
                  />
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flexi">
              <Block
                header=""
                content="Вихідний день. Дитина перебуває під наглядом чергового медичного персоналу."
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};
