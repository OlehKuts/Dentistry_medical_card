import React from "react";
import { useFormFields } from "./hooks/useFormFields";
import { useToggle } from "./hooks/useToggle";
import { dayTemplate } from "../database";

export const EditDiaryForm = ({
  currentDay = dayTemplate,
  onEditDay,
  onCancelEditDiary,
  patientId,
}) => {
  const { fields, clearForm, changeField } = useFormFields({
    date: currentDay.date || "",
    generalStatus: currentDay.generalStatus || "",
    localStatus: currentDay.localStatus || "",
    id: currentDay.id,
  });
  const { date, generalStatus, localStatus } = fields;
  const [workDay, setWorkday] = useToggle(currentDay.workDay || false);
  const onHandleSubmit = (e) => {
    e.preventDefault();
    onEditDay({ ...fields, workDay: workDay }, patientId);
    clearForm();
  };
  return (
    <>
      <form onSubmit={onHandleSubmit}>
        <div className="editDiaryForm">
          <input
            placeholder="Дата щоденнику..."
            type="text"
            value={date}
            name="date"
            onChange={changeField}
          />
          <textarea
            placeholder="Загальний стан..."
            type="text"
            name="generalStatus"
            value={generalStatus}
            onChange={changeField}
            rows="10"
            cols="100"
          />
          <textarea
            placeholder="Cтан щелепно-лицевої ділянки..."
            type="text"
            name="localStatus"
            value={localStatus}
            onChange={changeField}
            rows="10"
            cols="100"
          />
          <label className="container">
            Робочий день
            <input type="checkbox" checked={workDay} onChange={setWorkday} />
            <span className="checkmark"></span>
          </label>
          <div>
            <button type="submit">Підтвердити</button>
            <button onClick={onCancelEditDiary}>Відмінити</button>
          </div>
        </div>
      </form>
    </>
  );
};
