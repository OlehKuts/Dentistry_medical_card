import T from "prop-types";

export const patientListPropTypes = {
  patient: T.shape({
    _id: T.string.isRequired,
    name: T.string.isRequired,
    cardNumber: T.string.isRequired
  }).isRequired
};
