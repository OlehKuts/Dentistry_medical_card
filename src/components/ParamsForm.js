import React, { useState } from "react";
import "../styles.css";
import { MacInput } from "../UI/input/MacInput";
import { MacButton } from "../UI/button/MacButton";

export const ParamsForm = ({ currentParams, alter }) => {
  const [params, setParams] = useState(currentParams);
  const changeParams = (e) => {
    e.preventDefault();
    alter(params);
  };
  return (
    <>
      <div className="paramsForm">
        <form>
          <div className="paramsFormLine">
            <div>Спільний огляд </div>
            <MacInput
              style={{ width: "660px" }}
              value={params.mutualExamination}
              onChange={(e) =>
                setParams({ ...params, mutualExamination: e.target.value })
              }
            />
          </div>

          <div className="paramsFormLine">
            <div>Лікарська спеціальність</div>
            <MacInput
              style={{ width: "660px" }}
              value={params.doctorType}
              onChange={(e) =>
                setParams({ ...params, doctorType: e.target.value })
              }
            />
          </div>

          <div className="paramsFormLine">
            <div>Назва медичної карти</div>
            <MacInput
              style={{ width: "660px" }}
              value={params.medicalCard}
              onChange={(e) =>
                setParams({ ...params, medicalCard: e.target.value })
              }
            />
          </div>

          <div className="paramsFormLine">
            <div style={{ marginTop: "10px" }}>Тип пацієнта</div>
            <MacInput
              style={{ width: "660px" }}
              value={params.patientType}
              onChange={(e) =>
                setParams({ ...params, patientType: e.target.value })
              }
            />
          </div>

          <div className="paramsFormLine">
            <div>Передопераційний огляд (лікарський склад)</div>
            <MacInput
              style={{ width: "660px" }}
              value={params.preOperationExamination}
              onChange={(e) =>
                setParams({
                  ...params,
                  preOperationExamination: e.target.value,
                })
              }
            />
          </div>

          <div className="paramsFormLine">
            <div>Назва медичного закладу</div>
            <MacInput
              style={{ width: "660px" }}
              value={params.institution}
              onChange={(e) =>
                setParams({ ...params, institution: e.target.value })
              }
            />
          </div>

          <div className="paramsFormLine">
            <div>Код ЄДРПОУ</div>
            <MacInput
              style={{ width: "660px" }}
              value={params.edrpouCode}
              onChange={(e) =>
                setParams({ ...params, edrpouCode: e.target.value })
              }
            />
          </div>

          <div className="paramsFormLine">
            <div>Місце лікування</div>
            <MacInput
              style={{ width: "660px" }}
              value={params.treatmentLocation}
              onChange={(e) =>
                setParams({ ...params, treatmentLocation: e.target.value })
              }
            />
          </div>
          <div className="paramsFormLine">
            <div>Список лікарів</div>
            <MacInput
              style={{ width: "660px" }}
              value={params.doctors}
              onChange={(e) =>
                setParams({ ...params, doctors: e.target.value })
              }
            />
          </div>
          <div className="paramsFormLine">
            <div>Список анестезіологів</div>
            <MacInput
              style={{ width: "660px" }}
              value={params.anesthetistList}
              onChange={(e) =>
                setParams({ ...params, anesthetistList: e.target.value })
              }
            />
          </div>
          <div className="sendLine">
            <MacButton style={{ fontSize: "10px" }} onClick={changeParams}>
              Застосувати зміни
            </MacButton>
          </div>
        </form>
      </div>
    </>
  );
};
