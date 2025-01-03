import React from "react";
import "./styles.css";
import { Text } from "./text";

export const Block = ({ header, content, size = "18px", ...props }) => (
  <div className="block">
    <Text size={size} fontWeight="bold" {...props}>
      {header}
    </Text>
    {""}
    <span className="content"> {content} </span>
  </div>
);

