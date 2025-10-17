export const patientEditor = (type, patient, value) => {
  let newPatient = patient;
  switch (type) {
    case "name":
      newPatient.name = value;
      break;
    case "cardNumber":
      newPatient.cardNumber = value;
      break;
    case "reviewDate":
      newPatient.reviewDate = value;
      break;
    case "doctor":
      newPatient.doctor = value;
      break;
    case "complaintsContent":
      newPatient.complaintsContent = value;
      break;
    case "anamnesisMorbiContent":
      newPatient.anamnesisMorbiContent = value;
      break;
    case "anamnesisVitaeContent":
      newPatient.anamnesisVitaeContent = value;
      break;
    case "statusPraesensContent":
      newPatient.statusPraesensContent = value;
      break;
    case "statusLocalisContent":
      newPatient.statusLocalisContent = value;
      break;
    case "diagnosis":
      newPatient.diagnosis = value;
      newPatient.diagnosisCap = value[0].toUpperCase() + value.slice(1);
      break;
    case "protocolNumber":
      newPatient.protocolNumber = value;
      break;
    case "operationName":
      newPatient.operationName = value;
      newPatient.operationNameCap = value[0].toUpperCase() + value.slice(1);
      break;
    case "operationDate":
      newPatient.operationDate = value;
      break;
    case "operationTime":
      newPatient.operationTime = value;
      break;
    case "operationContent":
      newPatient.operationContent = value;
      break;
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
    case "recommendations":
      newPatient.recommendations = value;
      break;
    case "shortStatusContent":
      newPatient.shortStatusContent = value;
      break;
    case "secondOperation":
      newPatient.secondOperation = value;
      break;
    case "finalDiagnosis":
      newPatient.finalDiagnosis = value;
      break;
    case "otherExaminations":
      newPatient.otherExaminations = value;
      break;
      case "examinations":
        newPatient.examinations = value;
        break;
       case "anestesiaTypeModified":
        newPatient.anestesiaTypeModified = value;
        break;
    default:
      newPatient = patient;
  }
  return newPatient;
};
