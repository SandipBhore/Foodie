import GET_CRETIT_CARD_DETAILS from "../ActionConstants/UserCreditDetailsActionConstant";

const getCreditCardDetails = cardDetails => {
  return {
    type: GET_CRETIT_CARD_DETAILS,
    payload: cardDetails,
  };
};
export default getCreditCardDetails;
