import React from "react";
import "../styles.css";

export const StatsTable = ({
  members,
  currentMonth,
  currentYear,
  ...props
}) => {
  const sortedDoctors = [...members]
    .filter((i) => i.personalCount > 0)
    .sort(function (a, b) {
      if (a.personalCount < b.personalCount) {
        return 1;
      }
      if (a.personalCount > b.personalCount) {
        return -1;
      }
      return 0;
    });
  const names = sortedDoctors.map((item) => item.name);
  const personals = sortedDoctors.map((item) => item.personalCount);
  const surgeons = sortedDoctors.map((item) => item.surgeonCount);
  const assistants = sortedDoctors.map((item) => item.assistantCount);

  return (
    <div>
      {sortedDoctors.length === 0 ? (
        <h5>Відсутня інформація за даний період</h5>
      ) : (
        <>
          <h5>
            Статистика за {currentMonth}.{currentYear}
          </h5>
          <hr />
          <div className="flexTable">
            <div className="sectionFlexTable">
              <p>Лікар</p>
              {names.map((item, idx) => (
                <p key={idx}>{item}</p>
              ))}
            </div>
            <div className="sectionFlexTable">
              <p>Пацієнти</p>

              {personals.map((item, idx) => (
                <p key={idx}>{item}</p>
              ))}
            </div>
            <div className="sectionFlexTable">
              <p>Операції</p>

              {surgeons.map((item, idx) => (
                <p key={idx}>{item}</p>
              ))}
            </div>
            <div className="sectionFlexTable">
              <p>Асистенції</p>

              {assistants.map((item, idx) => (
                <p key={idx}>{item}</p>
              ))}
            </div>
          </div>{" "}
        </>
      )}
    </div>
  );
};
