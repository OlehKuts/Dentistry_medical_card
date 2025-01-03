export const recommendationsCreator = (type, age) => {
  if (type === "skinWound") {
    return " контрольний огляд та зняття швів через 8-10 днів після операції.";
  } else if (type === "tongueBridle") {
    return ` механічно-щадна дієта протягом семи днів після операції. ${
      age < 3 ? "Консультація логопеда." : ""
    }`;
  } else if (type === "lipBridle" || type === "cyst") {
    return " механічно-щадна дієта протягом семи днів після операції. ";
  } else if (type === "caries") {
    return " контрольний огляд у стоматолога 2-3 рази на рік.";
  } else {
    return " санація порожнини рота по місцю проживання.";
  }
};
