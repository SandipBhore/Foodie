import CurrentUserInitialState from "./Initialstate/UserAuthInitialState";
import SET_CURRENT_USER from "../Actions/ActionConstants/UserAuthActionConstant";
const CurrentUserReducer = (state = CurrentUserInitialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};
export default CurrentUserReducer;
