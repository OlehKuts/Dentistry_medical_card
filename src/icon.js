import React from "react";
import T from "prop-types";
import { iconsConfig } from "./iconsConfig";
import "./styles.css";

export const Icon = ({ name="", color="black", size="14px", ...props }) => {
  const IconC = iconsConfig[name];
  return <IconC name={name} color={color} size={size} {...props} />;
};

Icon.propTypes = {
  name: T.string.isRequired,
  color: T.string,
  size: T.string
};

