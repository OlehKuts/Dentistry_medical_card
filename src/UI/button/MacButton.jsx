import React from "react";
import classes from "./MacButton.module.css";

export const MacButton = ({ children, ...props }) => {
  return (
    <button className={classes.macBtn} {...props}>
      {children}
    </button>
  );
};
