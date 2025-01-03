import React from "react";
import classes from "./MacInput.module.css";

export const MacInput = React.forwardRef((props, ref) => {
  return <input ref={ref} className={classes.macInput} {...props} />;
});
