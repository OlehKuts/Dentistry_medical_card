import React from "react";
import "../styles.css";
import { isRelevantDate } from "../utils/utils";

export const UpcomingEvents = ({ patients, ...props }) => {
  const upcomingPatients = [...patients].filter(
    (i) => i.planned && isRelevantDate([i.startDay, i.startMonth, i.startYear])
  );
  const names = upcomingPatients.map((item) => item.name);
  const reviewDates = upcomingPatients.map((item) => item.reviewDate);
  const operationNames = upcomingPatients.map(
    (item) =>
      item.operationName[0].toUpperCase() + item.operationName.slice(1, -1)
  );
  const doctors = upcomingPatients.map((item) => item.doctor);

  return (
    <div className="upcomingEvents">
      {upcomingPatients.length === 0 ? (
        <h5>На даний момент найближчі планові операції відсутні</h5>
      ) : (
        <>
          {" "}
          <hr />
          <h5>Найближчі планові операції</h5>
          <div className="flexTable">
            <div className="sectionFlexTable">
              <p>Пацієнт</p>
              {names.map((item, idx) => (
                <p key={idx}>{item}</p>
              ))}
            </div>
            <div className="sectionFlexTable">
              <p>Дата поступлення</p>

              {reviewDates.map((item, idx) => (
                <p key={idx}>{item}</p>
              ))}
            </div>
            <div className="sectionFlexTable">
              <p>Операція</p>

              {operationNames.map((item, idx) => (
                <p key={idx}>{item}</p>
              ))}
            </div>
            <div className="sectionFlexTable">
              <p>Лікар</p>

              {doctors.map((item, idx) => (
                <p key={idx}>{item}</p>
              ))}
            </div>
          </div>{" "}
        </>
      )}
    </div>
  );
};
