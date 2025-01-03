export const changedListMounter = (
  i1,
  i2,
  i3,
  i4,
  i5,
  i6,
  i7,
  i8,
  i9,
  i10,
  s1,
  s2,
  s3,
  s4,
  s5,
  s6,
  s7,
  s8,
  s9,
  s10
) => {
  let idList = [i1, i2, i3, i4, i5, i6, i7, i8, i9, i10];
  let diseaseList = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10];
  let resultArr = [];
  for (let i = 0; i < idList.length; i++) {
    resultArr.push({
      id: idList[i],
      status: statusMounter(diseaseList[i]),
      disease: diseaseList[i]
    });
  }
  resultArr = resultArr.filter((item) => item.id !== "" && item.status !== "");
  resultArr = resultArr.map(function (item) {
    item.id = Number(item.id);
    return item;
  });
  return resultArr;
};

export const statusMounter = (s) => {
  let status = ``;
  switch (s) {
    case "acuteDeep":
    case "acuteFacial":
    case "acuteMiddle":
    case "chronicDeep":
    case "chronicMiddle":
    case "chronicFacial":
      status = "C";
      break;
    case "pulpit":
      status = "P";
      break;
    case "periodontit":
      status = "Pt";
      break;
    default:
      status = "";
  }
  return status;
};
