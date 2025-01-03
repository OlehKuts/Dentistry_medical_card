import React from "react";
import { Icon } from "../icon";

export const LinkItem = ({ someLink }) => {
  const { title, link, iconName, color } = someLink;
  return (
    <div className="linkItem">
      <div>
        <Icon name={iconName} color={color} size="30px" />
      </div>
      <div>
        <a href={link} target="_blank" rel="noreferrer">
          {title}
        </a>
      </div>
    </div>
  );
};
