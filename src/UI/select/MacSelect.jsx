import React from "react";
import classes from "./MacSelect.module.css";

export const MacSelect = ({
  options,
  defaultValue,
  value,
  onChange,
  ...props
}) => {
  return (
    <select
      className={classes.macSelect}
      onChange={(e) => onChange(e.target.value)}
      {...props}
    >
      <option value="" disabled>
        {defaultValue}
      </option>
      {options.map((item) => (
        <option key={item.value} value={item.value}>
          {item.name}
        </option>
      ))}
    </select>
  );
};
