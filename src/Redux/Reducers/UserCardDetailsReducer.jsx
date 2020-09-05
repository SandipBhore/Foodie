import UserCardDetailsInitialState from "./Initialstate/UserCardDetailsInitialState";
import GET_CRETIT_CARD_DETAILS from "../Actions/ActionConstants/UserCreditDetailsActionConstant";
import UserDetailsInitialState from "./Initialstate/UserDetailsInitialstate";
// import state from "sweetalert/typings/modules/state";

const UserCardDetailsReducer = (state = UserDetailsInitialState, action) => {
  switch (action.type) {
    case GET_CRETIT_CARD_DETAILS:
      return {
        ...state,
        cardDetails: action.payload,
      };
    default:
      return state;
  }
};
export default UserCardDetailsReducer;
