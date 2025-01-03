import React, { useState } from "react";
import { Icon } from "../icon";
import { morbiList } from "../database";
import { colorChecker } from "../utils/utils";
import "../styles.css";

export const ToothItem = ({ id, onToothAdd, onToothRemove }) => {
  const [showIcon, setShowIcon] = useState(true);
  const [morbiValue, setMorbiValue] = useState("");
  const addNewTooth = (e) => {
    e.preventDefault();
    onToothAdd(id, morbiValue);
    setShowIcon(true);
  };
  return (
    <div>
      {showIcon ? (
        <div className="toothItem">
          <Icon
            onClick={() => setShowIcon(false)}
            name="tooth"
            xText="12"
            number={id}
            size="4rem"
            backgroundTooth={colorChecker(morbiValue)}
          />
        </div>
      ) : (
        <div className="toothMorbi">
          <div className="addRemoveLine">
            <form>
              {" "}
              <button
                className="toothBtn toothAddBtn"
                type="submit"
                onClick={addNewTooth}
              >
                <Icon name="done" size="24px" color="white" />
              </button>
            </form>
            <button
              className="toothBtn toothRemoveBtn"
              onClick={() => {
                onToothRemove(id);
                setShowIcon(true);
                setMorbiValue("");
              }}
            >
              X
            </button>
          </div>
          <select
            className="toothSelect"
            onChange={(e) => setMorbiValue(e.target.value)}
          >
            {morbiList.map((item) => {
              return (
                <option key={item.value} value={item.value}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </div>
      )}
    </div>
  );
};
