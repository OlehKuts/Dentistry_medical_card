export const patientEditor = (type, patient, value) => {
  let newPatient = patient;
  switch (type) {
    case "drugName1":
      newPatient.drugName1 = value;
      newPatient.drugs.splice(0, 1, value); //here
      break;
    case "drugName2":
      newPatient.drugName2 = value;
      newPatient.drugs.splice(1, 1, value);
      break;
    case "drugName3":
      newPatient.drugName3 = value;
      newPatient.drugs.splice(2, 1, value);
      break;
    case "drugName4":
      newPatient.drugName4 = value;
      newPatient.drugs.splice(3, 1, value);
      break;
    case "drugName5":
      newPatient.drugName5 = value;
      newPatient.drugs.splice(4, 1, value);
      break;
    case "appointment":
      newPatient.appointment = value;
      newPatient.drugs.splice(5, 1, value);
      break;
    case "appointment2":
      newPatient.appointment2 = value;
      newPatient.drugs.splice(6, 1, value);
      break;
    case "appointment3":
      newPatient.appointment3 = value;
      newPatient.drugs.splice(7, 1, value);
      break;
    default:
      newPatient[type] = value;
  }
  return newPatient;
};
