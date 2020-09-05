import UserSearch from "../ActionConstants/UserSearchActionConstants";
const userQuery = (locationQuery, restaurantQuery) => {
  return {
    type: UserSearch,
    payload1: locationQuery,
    payload2: restaurantQuery,
  };
};
export default userQuery;
