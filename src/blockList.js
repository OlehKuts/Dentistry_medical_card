import React from "react";
import "./styles.css";
import { Text } from "./text";

export const BlockList = ({ header, content, ...props }) => (
  <div className="blockList">
    {""}
    <ol>
      <Text size="18px" fontWeight="bold">
        {header}
      </Text>
      {content.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ol>
  </div>
);
