import SET_CURRENT_USER from "../ActionConstants/UserAuthActionConstant";
const setCurrentUser = currentUser => {
  return {
    type: SET_CURRENT_USER,
    payload: currentUser,
  };
};
export default setCurrentUser;
