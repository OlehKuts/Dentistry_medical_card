export const plannedChecker = (type) => {
  switch (type) {
    case "periostit":
    case "periodontit":
    case "skinWound":
    case "abscess":
    case "dislocationTooth":
    case "fractureLowerJaw":
      return false;
    case "tongueBridle":
    case "lipBridle":
    case "caries":
    case "cyst":
    case "neoplasm":
    case "retention":
    case "overComplete":
      return true;
    default:
      return false;
  }
};
