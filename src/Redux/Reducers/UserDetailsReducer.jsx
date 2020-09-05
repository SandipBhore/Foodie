import {
  checkIsAddressProvided,
  checkIsPhoneVerified,
} from "../Actions/ActionConstants/UserDetailsActionConstants";
import UserDetailsInitialState from "./Initialstate/UserDetailsInitialstate";

const UserDetailsReducer = (state = UserDetailsInitialState, action) => {
  switch (action.type) {
    case checkIsPhoneVerified:
      return {
        ...state,
        isPhoneVerified: true,
      };
    case checkIsAddressProvided:
      return {
        ...state,
        isAddressProvided: true,
        name: action.payload1,
        phone: action.payload2,
        alternatePhone: action.payload1,
        address: action.payload3,
        landmark: action.payload4,
        location: action.payload5,
      };
    default:
      return state;
  }
};
export default UserDetailsReducer;
