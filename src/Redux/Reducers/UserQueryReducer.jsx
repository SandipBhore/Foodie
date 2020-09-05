import UserSearch from "../Actions/ActionConstants/UserSearchActionConstants";
import UserQueryInitialState from "../Reducers/Initialstate/UserQueryInitialState";

const UserQueryReducer = (state = UserQueryInitialState, action) => {
  switch (action.type) {
    case UserSearch:
      return {
        ...state,
        locationName: action.payload1,
        restaurantName: action.payload2,
      };
    default:
      return state;
  }
};
export default UserQueryReducer;
