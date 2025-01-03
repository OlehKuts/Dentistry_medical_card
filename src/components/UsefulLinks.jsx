import React from "react";
import { usefulLinks } from "../database";
import { LinkItem } from "./LinkItem";

export const UsefulLinks = () => {
  return (
    <div className="usefulLinks">
      {usefulLinks.map((item) => (
        <LinkItem key={item.title} someLink={item} />
      ))}
    </div>
  );
};
