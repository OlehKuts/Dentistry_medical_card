import React from "react";
import "./styles.css";
import { Text } from "./text";

export const FormulaTable = ({
  line1,
  line2,
  line3,
  line4,
  size,
  ...props
}) => (
  <div>
    <table className="table">
      <tbody>
        <tr>
          {line1.map((item) => (
            <td className="td">
              <Text size={size} fontWeight="bold" {...props}>
                {item}
              </Text>
            </td>
          ))}
        </tr>
      </tbody>
      <tbody>
        <tr>
          {line2.map((item) => (
            <td className="tdNarrow">
              <Text size={size} fontWeight="bold" {...props}>
                {item}
              </Text>
            </td>
          ))}
        </tr>
      </tbody>
      <tbody>
        <tr>
          {line3.map((item) => (
            <td className="tdNarrow">
              <Text size={size} fontWeight="bold" {...props}>
                {item}
              </Text>
            </td>
          ))}
        </tr>
      </tbody>
      <tbody>
        <tr>
          {line4.map((item) => (
            <td className="td">
              <Text size={size} fontWeight="bold" {...props}>
                {item}
              </Text>
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  </div>
);

FormulaTable.defaultProps = {
  size: "16px",
  line1: [1, 2, 3, 4],
  line2: [1, 2, 3, 4],
  line3: [1, 2, 3, 4],
  line4: [1, 2, 3, 4]
};
