import React from "react";
import "./styles.css";
import { Block } from "./block";
import { capitalizeFirstSign } from "./utils/utils";

export const OperationRegister = ({ current }) => {
  const { operationName, operationContent } = current;
  return (
    <div className="operation_container">
      <div className="opDesc">
        <Block header="12.ОПИС ОПЕРАТИВНОГО ВТРУЧАННЯ" content="" />
      </div>
      <div className="flexi opDesc">
        <Block header={capitalizeFirstSign(operationName)} content={""} />
      </div>
      <div className="flexi protocolContent">
        <Block header={""} content={operationContent} />
      </div>
      <hr style={{ marginTop: "20px" }} />
    </div>
  );
};
